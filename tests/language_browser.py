"""Verify first-visit country language, saved overrides, timeout and mobile UI."""
import os
import shutil
import sys
from playwright.sync_api import sync_playwright, expect
BASE = sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8004'
KEY='tanvior.workspace.v1'
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH') or shutil.which('chromium'))
    def new_page(locale='en-US'):
        context=browser.new_context(locale=locale,viewport={'width':390,'height':844})
        context.route('https://cloud.umami.is/**',lambda route:route.abort())
        return context,context.new_page()
    for country,language in [('JP','ja'),('KR','ko'),('ES','es'),('FR','fr'),('US','en'),('CN','zh')]:
        context,page=new_page()
        calls=[]
        def country_response(route):
            calls.append(route.request.url)
            route.fulfill(json={'country':country})
        context.route('https://api.country.is/**',country_response)
        errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(BASE)
        expect(page.locator('#language')).to_have_value(language)
        assert len(calls)==1
        assert page.locator('#language option').count()==6
        expect(page.locator('.language-globe')).to_be_visible()
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),country+' intro overflow'
        expect(page.locator('#intro h1')).not_to_have_text('')
        page.locator('#enter').click();expect(page.locator('#intro')).to_be_hidden()
        for chosen in ['zh','en','ja','es','fr','ko']:
            page.locator('#language').select_option(chosen)
            page.locator('#new-task').click()
            expect(page.locator('#editor')).to_be_visible()
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),chosen+' editor overflow'
            page.locator('[name=name]').fill('Keep user input')
            page.locator('[name=goal]').fill('Original goal')
            page.locator('[name=baseline]').fill('Original baseline')
            page.locator('[name=weekly]').first.check()
            page.locator('#task-form [type=submit]').click()
            expect(page.locator('#editor')).to_be_hidden()
            card=page.locator('.task-card').last
            expect(card.locator('h2')).to_contain_text('Keep user input')
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),chosen+' workspace overflow'
            page.locator('#open-month').click()
            expect(page.locator('#month-title')).not_to_have_text('')
            page.locator('[data-close=month-dialog]').click()
        page.locator('#language').select_option('fr')
        page.reload();expect(page.locator('#language')).to_have_value('fr')
        assert len(calls)==1,'saved preference must skip IP lookup'
        assert not errors,errors
        context.close()
    # A late IP response must not override an explicit user choice.
    context,page=new_page();pending=[]
    context.route('https://api.country.is/**',lambda route:pending.append(route))
    page.goto(BASE)
    page.locator('#enter').click();expect(page.locator('#intro')).to_be_hidden()
    page.locator('#language').select_option('es')
    assert pending
    pending[0].fulfill(json={'country':'JP'})
    page.wait_for_timeout(100)
    expect(page.locator('#language')).to_have_value('es')
    context.close()
    # Network failure chooses the browser language, not a hardcoded default.
    context,page=new_page('ko-KR')
    context.route('https://api.country.is/**',lambda route:route.abort())
    page.goto(BASE);expect(page.locator('#language')).to_have_value('ko')
    expect(page.locator('#new-task')).to_have_text('＋ 새 목표')
    context.close()
    browser.close()
    print('PASS: six IP-selected languages, six UI/plan languages, globe, mobile layout, saved preference, manual/IP race and browser fallback; no uncaught JS errors.')
