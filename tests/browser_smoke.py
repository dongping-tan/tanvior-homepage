"""Run against a local HTTP server: python3 tests/browser_smoke.py [base URL]."""
import json
import os
from pathlib import Path
import shutil
import sys
import tempfile
import xml.etree.ElementTree as ET
from datetime import date, timedelta
from playwright.sync_api import sync_playwright, expect

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8001'
TODAY = date.today().isoformat()
END = (date.today() + timedelta(days=13)).isoformat()
KEY = 'tanvior.workspace.v1'

with sync_playwright() as p, tempfile.TemporaryDirectory() as out:
    browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH') or shutil.which('chromium'))
    page = browser.new_page(viewport={'width': 1440, 'height': 1000}, accept_downloads=True)
    # Keep smoke tests out of production analytics and verify offline resilience.
    page.route('https://cloud.umami.is/**', lambda route: route.abort())
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(BASE)
    expect(page.locator('#intro')).to_be_visible()
    page.locator('#enter').click()
    expect(page.locator('#intro')).to_be_hidden()
    expect(page.locator('#empty')).to_be_visible()
    def create(name, override=False):
        page.locator('#new-task').click()
        form = page.locator('#task-form')
        form.locator('[name=name]').fill(name)
        form.locator('[name=start]').fill(TODAY)
        form.locator('[name=end]').fill(END)
        form.locator('[name=goal]').fill('Learn <JavaScript> & build a project')
        form.locator('[name=baseline]').fill('Beginner')
        if not override:
            for day in range(7):
                form.locator(f'[name=weekly][value="{day} 09:00"]').check()
        else:
            page.locator('#adjustments summary').click()
            page.locator('#exception-date').fill(TODAY)
            page.locator('#add-date').click()
            page.locator('#allow-slot').click()
        form.locator('[type=submit]').click()
        expect(page.locator('#editor')).to_be_hidden()
    # Empty availability is rejected without closing the editor or creating a goal.
    page.locator('#new-task').click()
    page.locator('[name=name]').fill('Unavailable')
    page.locator('[name=goal]').fill('Learn')
    page.locator('[name=baseline]').fill('Beginner')
    page.locator('#task-form [type=submit]').click()
    expect(page.locator('#form-error')).to_contain_text('请至少选择')
    expect(page.locator('.task-card')).to_have_count(0)
    page.locator('[data-close=editor]').click()
    create('Study <script>alert(1)</script>')
    expect(page.locator('.task-card')).to_have_count(1)
    expect(page.locator('.session')).to_have_count(14)
    expect(page.locator('.task-card h2')).to_contain_text('<script>alert(1)</script>')
    first = page.locator('.session input').first
    first.fill('100'); first.press('Tab')
    expect(page.locator('.nav-progress')).to_have_text('7%')
    page.reload()
    expect(page.locator('#intro')).to_be_hidden()
    expect(page.locator('.session input').first).to_have_value('100')
    page.locator('[data-mark]').click()
    expect(page.locator('.task-card')).to_have_class(__import__('re').compile('marked'))
    create('Second goal', override=True)
    expect(page.locator('.task-card')).to_have_count(2)
    expect(page.locator('.task-card').last.locator('.session')).to_have_count(1)
    page.locator(f'[data-date="{TODAY}"]').click()
    expect(page.locator('#day-events button')).to_have_count(2)
    page.locator('#day-events button').last.click()
    expect(page.locator('.task-card').last).to_have_class(__import__('re').compile('active'))
    page.locator('.task-card').first.locator('.plan-reason').click()
    expect(page.locator('.task-card').first).to_have_class(__import__('re').compile('active'))
    # Drag and persist the card position.
    header=page.locator('.card-header').last
    header.scroll_into_view_if_needed(); box=header.bounding_box()
    page.mouse.move(box['x']+60, box['y']+15);page.mouse.down();page.mouse.move(box['x']+90,box['y']+55,steps=5);page.mouse.up()
    saved=json.loads(page.evaluate(f'localStorage.getItem("{KEY}")'))
    assert saved['tasks'][1]['position']['y'] > 0
    # Downloads must contain the actual user's data and valid XML/JSON.
    card=page.locator('.task-card').first
    for kind in ['excel','word','backup']:
        with page.expect_download() as d:
            card.locator(f'[data-export={kind}]').click()
        path=Path(out)/d.value.suggested_filename;d.value.save_as(path)
        content=path.read_text(encoding='utf-8-sig')
        if kind=='excel':
            root=ET.fromstring(content)
            assert root.tag.endswith('Workbook') and 'Study &lt;script&gt;' in content
        elif kind=='word':
            assert '<table>' in content and '&lt;script&gt;' in content
        else:
            backup_path=path
            assert len(json.loads(content)['tasks'])==2
    # Print document must only contain selected export content.
    page.evaluate('window.print=()=>{window.printCalled=true}')
    card.locator('[data-export=print]').click()
    assert page.evaluate('window.printCalled')
    expect(page.locator('.print-output')).to_contain_text('Study <script>')
    page.emulate_media(media='print')
    page.pdf(path=str(Path(out)/'plan.pdf'))
    assert (Path(out)/'plan.pdf').stat().st_size>1000
    page.emulate_media(media='screen')
    page.locator('#open-month').click()
    expect(page.locator('#month-table tbody tr')).not_to_have_count(0)
    page.locator('#export-month').fill('2030-01')
    expect(page.locator('#month-table')).to_contain_text('本月暂无安排')
    page.locator('[data-close=month-dialog]').click()
    page.locator('#language').select_option('en')
    expect(page.locator('#new-task')).to_have_text('+ New goal')
    page.reload()
    expect(page.locator('#new-task')).to_have_text('+ New goal')
    # Responsive layout and real touch-sized controls.
    page.set_viewport_size({'width':390,'height':844})
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Mobile horizontal overflow'
    page.screenshot(path='/tmp/tanvior-mobile.png',full_page=True)
    page.set_viewport_size({'width':1440,'height':1000})
    page.screenshot(path='/tmp/tanvior-desktop.png',full_page=True)
    page.on('dialog',lambda dialog:dialog.accept())
    page.locator('[data-delete]').first.click()
    expect(page.locator('.task-card')).to_have_count(1)
    page.locator('input[type=file]').set_input_files(str(backup_path))
    expect(page.locator('.task-card')).to_have_count(2)
    invalid_path=Path(out)/'invalid.json'
    invalid_path.write_text('{"tasks":[{"name":"invalid"}],"language":"zh"}')
    page.locator('input[type=file]').set_input_files(str(invalid_path))
    expect(page.locator('#notice')).to_contain_text('备份格式无效')
    expect(page.locator('.task-card')).to_have_count(2)
    # Corrupt data is preserved; recovery backup stays available.
    page.evaluate(f'localStorage.setItem("{KEY}","broken-json")')
    page.reload()
    assert page.evaluate(f'localStorage.getItem("{KEY}")')=='broken-json'
    expect(page.locator('#notice')).to_be_visible()
    with page.expect_download() as d:
        page.locator('.sidebar [data-export=backup]').click()
    path=Path(out)/'corrupt.json';d.value.save_as(path)
    assert path.read_text()=='broken-json'
    # Fresh visit auto-dismisses the introduction after fifteen seconds.
    page.evaluate(f'localStorage.removeItem("{KEY}");sessionStorage.clear()')
    page.clock.install()
    page.reload()
    page.clock.run_for(16000)
    expect(page.locator('#intro')).to_be_hidden()
    for legacy in ['goal.html','time.html','plan.html']:
        page.goto(BASE+'/'+legacy)
        page.wait_for_url('**/index.html')
        expect(page.locator('#new-task')).to_be_visible()
    assert not errors, errors
    browser.close()
    print('PASS: browser creation, overrides, progress, persistence, mark/delete, calendar, drag, language, exports, PDF, backup/restore, corrupt storage, mobile layout, introduction, legacy URLs; no uncaught JS errors.')
