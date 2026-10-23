# Tanvior

将目标、时间安排、日历和完成进度放在同一个页面的本地优先 MVP。依据 `Tanvior.xlsx` 第一阶段实现，使用 HTML、CSS 和原生 JavaScript；无需构建、账户、API 密钥或运行时依赖。

## 本地运行

```sh
cd /workspace/tanvior-homepage  # 或你的仓库目录
python3 -m http.server 8000 --bind 0.0.0.0
```

在本地开发机器上打开服务的首页。开发服务仅用于开发，不是生产部署服务器。

## 使用

1. 点击进入介绍页，或等待 15 秒自动进入工作台。
2. 新建任务，填写名称、开始/结束日期、目标和当前状态，勾选每周可用时间。
3. 可展开微调，选择一个或多个具体日期，批量添加或移除相应时间块。
4. 生成计划后在卡片或今日面板填写 0–100 的整数完成百分比。任务进度与日历颜色同步；点击日历安排可突出对应任务卡。
5. 可标记、删除任务，桌面端拖动卡片标题调整位置。支持中英文界面；用户输入和已生成计划正文保留原语言。
6. 任务卡可以导出，点击日历标题/月名可打开月度详表并选择月份导出。侧栏可导出/导入全量 JSON 备份。

**规划能力：** 当前“智能生成”是本地规则：按选中的时间块，依序划分基础、实践、复盘验收阶段；每块一小时，不进行能力评估、不调用真实 AI、不保证目标达成。同一时间的不同目标允许重叠，创建时提示冲突。

**数据：** 使用 `localStorage` 的 `tanvior.workspace.v1` 保存，含任务、逐次完成度、卡片位置和界面语言。只保存在当前浏览器/站点，不跨设备同步。清理浏览器数据将删除记录，请定期备份。JSON 备份包含所有目标及当前状态描述，请自行妥善保管。导入经过结构校验并要求确认后替换。旧版的 `goal` / `targetDate` / `availableTimes` 不会自动导入或删除，因为它们缺少完整计划数据。

**导出格式：** PDF 通过浏览器“打印 → 保存为 PDF”；Word 是 HTML 兼容 `.doc`；Excel 是 SpreadsheetML 2003 XML `.xls`。不是原生 `.docx` / `.xlsx`，部分 Office 版本可能显示格式兼容提示。月度表包含该月所有任务的时间块。JSON 备份始终包含完整工作台，支持恢复。导出采用 XML/HTML 转义及字符串单元格，避免用户输入被当作标记或公式。

## 检查

排程单元测试（仅需 Node.js 18+，本次在 Node 24 验证）：

```sh
node --test tests/planner.test.js
node --check app.js
node --check planner.js
```

真实浏览器检查需 Python Playwright 与 Chromium；可使用已安装的系统 Chromium，无需额外下载：

```sh
# 在已有 Python Playwright 的环境中执行
python3 -m http.server 8001 --bind 0.0.0.0
# 另一终端执行；默认寻找系统 chromium
python3 tests/browser_smoke.py http://127.0.0.1:8001
# 必要时通过 CHROMIUM_PATH 指定浏览器可执行文件
```

测试涵盖任务生成、具体日期覆盖、进度与持久化、标记/删除、日历、拖动、语言、文件导出与 PDF、备份恢复、损坏存储保护、移动布局、介绍页计时和旧链接兼容。截图输出至 `/tmp/tanvior-desktop.png` 和 `/tmp/tanvior-mobile.png`，不提交生成文件。

详见 [需求对照与后续阶段](docs/requirements.md)。
