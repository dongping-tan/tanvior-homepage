/* Tanvior: offline, single-page planning workspace. */
"use strict";
const P = window.Planner;
const $ = (selector) => document.querySelector(selector);
const KEY = "tanvior.workspace.v1";
const colors = ["#718a53", "#bb855f", "#648e9b", "#9a7ba0", "#ba9e46"];
const copy = {
  zh: {
    tagline: "把时间，留给想成为的自己",
    language: "语言",
    workspace: "我的空间",
    projects: "目标与计划",
    newTask: "＋ 新建任务",
    note: "小步前进，也在靠近。你的每一次投入，都算数。",
    about: "关于 Tanvior ↗",
    overview: "给成长一点空间。",
    local: "本地规则规划 · 无需联网",
    emptyTitle: "下一个目标，从这里开始",
    emptyText:
      "写下你想达成的事，选好属于它的时间。Tanvior 帮你把方向拆成可执行的日常。",
    start: "创建第一个目标 →",
    foot: "按你的节奏，持续向前。拖动卡片顶部可调整位置。",
    calendar: "日历与安排",
    today: "今天的小步",
    privacy:
      "◈ 任务数据保存在当前浏览器，请定期备份。本站使用 Umami 进行访问统计。",
    editorTitle: "给你的目标，一个计划",
    taskName: "任务名称",
    startDate: "开始日期",
    endDate: "预计完成日期",
    weekly: "每周可用时间（每块 1 小时）",
    adjust: "微调具体日期 · 添加或移除时间块",
    adjustHelp: "多选日期后批量添加或移除；也可单独调整某一天。",
    selectDate: "选择日期",
    allow: "添加时间",
    remove: "移除时间",
    goal: "想达成的事项 / 能力目标",
    baseline: "现阶段状态",
    plannerHint:
      "依据可用时间，按基础、实践、验收三阶段生成。本地规则规划，不调用 AI，不承诺实际达成结果。",
    generate: "✳ 智能生成计划（本地规则）",
    chooseMonth: "选择月份",
    aboutText:
      "Tanvior 将目标、可用时间、每日行动与进度放在同一个工作台。本版本使用本地规则生成三阶段计划，不连接 AI 服务或云端账户。请定期导出记录。",
    total: "进行中的目标",
    sessions: "行动时间块",
    average: "整体进度",
    unit: "个",
    noToday: "今天没有安排。留点时间给自己，或开始一个新目标。",
    none: "这一天没有安排。",
    target: "能力目标",
    initial: "开始时状态",
    period: "计划周期",
    mark: "标记",
    unmark: "取消标记",
    delete: "删除",
    confirm: "删除此任务及其全部进度？此操作无法撤销。",
    reason: "规划内容与原因",
    reasonText:
      "按可用时间顺序分为基础梳理、专项实践、复盘验收三个阶段；每个时间块 1 小时，阶段边界按时间块数量均分。任务目标用于描述每次行动方向，当前状态保留供你对照。此规则无法评估真实难度，请根据实际情况调整目标。",
    milestone: "预计完成 / 能力目标",
    week: "周",
    print: "打印 / PDF",
    word: "Word (.doc)",
    excel: "Excel (.xls)",
    backup: "备份 JSON",
    date: "日期",
    time: "时间",
    task: "任务",
    action: "行动内容",
    progress: "完成 %",
    month: "月度安排",
    emptyMonth: "本月暂无安排",
    invalid: "请填写有效日期，且结束日期不得早于开始日期，周期最长 366 天。",
    saved: "已保存",
    storage: "浏览器无法保存数据，请导出备份并检查存储权限。",
    corrupt:
      "本地数据无法读取，原始数据未覆盖。请先导出备份，再检查浏览器存储。",
    conflict: "提示：部分时间与其他任务重叠，请检查日历安排。",
    selected: "已选日期",
    override: "微调",
    hours: "小时",
    addDateError: "请选择计划周期内的日期。",
    noDate: "请先选择日期。",
    importBackup: "导入备份",
    restoreConfirm: "导入将替换当前任务。请先备份当前数据。是否继续？",
    invalidBackup: "备份格式无效，未修改当前数据。",
    restored: "备份已恢复",
  },
  en: {
    tagline: "Make time for who you want to become",
    language: "Language",
    workspace: "MY WORKSPACE",
    projects: "Goals & plans",
    newTask: "+ New goal",
    note: "Small steps still move you forward. Every moment counts.",
    about: "About Tanvior ↗",
    overview: "Make room for growth.",
    local: "Local rule-based planner · Offline",
    emptyTitle: "Your next chapter starts here",
    emptyText:
      "Choose a goal. Make room for it. Turn your direction into everyday actions.",
    start: "Create your first goal →",
    foot: "Move at your own pace. Drag a card header to arrange your workspace.",
    calendar: "Calendar & schedule",
    today: "Small steps for today",
    privacy:
      "◈ Goal data stays in this browser; export backups regularly. This site uses Umami for visitor analytics.",
    editorTitle: "Give your goal a plan",
    taskName: "Goal name",
    startDate: "Start date",
    endDate: "Expected completion",
    weekly: "Weekly availability (1 hour per slot)",
    adjust: "Adjust individual dates · Add or remove slots",
    adjustHelp: "Select several dates for bulk changes, or adjust one date.",
    selectDate: "Select date",
    allow: "Add slot",
    remove: "Remove slot",
    goal: "Desired outcome / capability",
    baseline: "Current starting point",
    plannerHint:
      "Plans use three rule-based stages: foundations, practice, and review. No AI service is called and outcomes are not guaranteed.",
    generate: "✳ Generate plan (local rules)",
    chooseMonth: "Choose month",
    aboutText:
      "Tanvior brings goals, available time, daily actions, and progress into one workspace. This version uses local planning rules, without AI services or cloud accounts. Export your records regularly.",
    total: "Active goals",
    sessions: "Action time slots",
    average: "Overall progress",
    unit: "",
    noToday:
      "Nothing scheduled today. Make room for yourself or start a new goal.",
    none: "No sessions on this day.",
    target: "Desired capability",
    initial: "Starting point",
    period: "Planning period",
    mark: "Mark",
    unmark: "Unmark",
    delete: "Delete",
    confirm: "Delete this goal and all its progress? This cannot be undone.",
    reason: "Plan and rationale",
    reasonText:
      "Available slots are ordered and divided into foundations, focused practice, and review. Each slot is one hour. Stage boundaries divide the slot count into thirds. The goal describes each action; the baseline is retained for comparison. These rules cannot assess real difficulty; adjust your expectations as needed.",
    milestone: "Expected completion / outcome",
    week: "Week",
    print: "Print / PDF",
    word: "Word (.doc)",
    excel: "Excel (.xls)",
    backup: "JSON backup",
    date: "Date",
    time: "Time",
    task: "Goal",
    action: "Action",
    progress: "Complete %",
    month: "Monthly schedule",
    emptyMonth: "No sessions this month",
    invalid:
      "Use valid dates, with the end on or after the start, within 366 days.",
    saved: "Saved",
    storage:
      "Browser storage is unavailable. Export a backup and check storage permissions.",
    corrupt:
      "Stored data could not be read; it has not been overwritten. Export a backup before checking browser storage.",
    conflict: "Some slots overlap other goals. Please check the calendar.",
    selected: "Selected dates",
    override: "Override",
    hours: "hours",
    addDateError: "Choose a date within the planning period.",
    noDate: "Select a date first.",
    importBackup: "Import backup",
    restoreConfirm:
      "Import replaces your current goals. Back up your data first. Continue?",
    invalidBackup: "Invalid backup; current data was not changed.",
    restored: "Backup restored",
  },
};
let state = { tasks: [], language: "zh" },
  rawBackup = null,
  storageBlocked = false;
function validState(value) {
  return (
    value &&
    ["zh", "en"].includes(value.language) &&
    Array.isArray(value.tasks) &&
    value.tasks.length <= 100 &&
    new Set(value.tasks.map((t) => t.id)).size === value.tasks.length &&
    value.tasks.every((t) => {
      try {
        return (
          typeof t.id === "string" &&
          /^[\w-]+$/.test(t.id) &&
          typeof t.name === "string" &&
          t.name.length <= 80 &&
          typeof t.goal === "string" &&
          typeof t.baseline === "string" &&
          /^#[0-9a-f]{6}$/i.test(t.color) &&
          P.datesBetween(t.start, t.end).length &&
          Array.isArray(t.sessions) &&
          t.sessions.length <= 1101 &&
          t.sessions.every(
            (s) =>
              P.dateKey(P.parseDate(s.date)) === s.date &&
              s.date >= t.start &&
              s.date <= t.end &&
              P.slots.includes(s.time) &&
              typeof s.title === "string" &&
              Number.isInteger(s.progress) &&
              s.progress >= 0 &&
              s.progress <= 100,
          ) &&
          (!t.position ||
            (Number.isFinite(t.position.x) && Number.isFinite(t.position.y)))
        );
      } catch {
        return false;
      }
    })
  );
}
try {
  const raw = localStorage.getItem(KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    if (!validState(parsed)) throw new Error("Invalid schema");
    state = parsed;
  }
} catch {
  storageBlocked = true;
  try {
    rawBackup = localStorage.getItem(KEY);
  } catch {}
}
let selected = state.tasks[0]?.id,
  month = new Date(),
  selectedDate = P.dateKey(),
  zIndex = 1,
  overrides = {},
  selectedDays = new Set();
month.setDate(1);
const t = (key) => copy[state.language][key] ?? key;
const esc = P.escapeXML;
const locale = () => (state.language === "zh" ? "zh-CN" : "en-US");
const weekdays = () =>
  state.language === "zh"
    ? ["日", "一", "二", "三", "四", "五", "六"]
    : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function notice(message) {
  $("#notice").textContent = message;
  $("#notice").hidden = false;
  clearTimeout(notice.timer);
  notice.timer = setTimeout(() => ($("#notice").hidden = true), 6000);
}
function save() {
  if (storageBlocked) {
    notice(t("corrupt"));
    return false;
  }
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch {
    notice(t("storage"));
    return false;
  }
}
function allSessions(tasks = state.tasks) {
  return tasks
    .flatMap((task) =>
      task.sessions.map((session, index) => ({ task, session, index })),
    )
    .sort((a, b) =>
      (a.session.date + a.session.time).localeCompare(
        b.session.date + b.session.time,
      ),
    );
}
function focusTask(id) {
  selected = id;
  render();
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.style.zIndex = ++zIndex;
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}
function render() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title =
    state.language === "zh"
      ? "Tanvior · 让目标成为日常"
      : "Tanvior · Make room for growth";
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.textContent = t(el.dataset.i18n)));
  $("#language").value = state.language;
  $("#today-date").textContent = new Date().toLocaleDateString(locale(), {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  $("#task-count").textContent = state.tasks.length;
  $("#empty").hidden = state.tasks.length > 0;
  const count = allSessions().length;
  const average = count
    ? Math.round(
        allSessions().reduce((sum, x) => sum + x.session.progress, 0) / count,
      )
    : 0;
  $("#summary").innerHTML = [
    [t("total"), state.tasks.length, t("unit")],
    [t("sessions"), count, t("hours")],
    [t("average"), average, "%"],
  ]
    .map(
      ([label, n, unit]) =>
        `<div class="stat"><small>${esc(label)}</small><strong>${n}</strong><span>${esc(unit)}</span></div>`,
    )
    .join("");
  $("#task-list").innerHTML = state.tasks
    .map(
      (task) =>
        `<button class="task-nav ${task.id === selected ? "active" : ""}" data-focus="${esc(task.id)}"><span class="nav-title"><i class="dot" style="background:${task.color}"></i><span class="nav-name">${task.marked ? "★ " : ""}${esc(task.name)}</span></span><progress max="100" value="${P.progress(task)}" aria-label="${esc(task.name)}"></progress><span class="nav-progress">${P.progress(task)}%</span></button>`,
    )
    .join("");
  $("#cards").innerHTML = state.tasks.map(cardHTML).join("");
  renderCalendar();
  renderToday();
}
function cardHTML(task) {
  let week = "";
  const sessions = task.sessions
    .map((s, index) => {
      const monday = P.parseDate(s.date);
      monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
      const key = P.dateKey(monday);
      const heading =
        week !== key
          ? `<h3 class="week-heading">${t("week")} · ${key}</h3>`
          : "";
      week = key;
      return `${heading}<div class="session ${s.date === P.dateKey() ? "is-today" : ""}" style="background:color-mix(in srgb,${task.color} ${8 + s.progress * 0.28}%,white)"><time>${s.date}<br>${s.time}–${String(Number(s.time.slice(0, 2)) + 1).padStart(2, "0")}:00</time><span class="session-title">${esc(s.title)}</span><label><input type="number" min="0" max="100" step="1" value="${s.progress}" data-progress="${task.id}" data-index="${index}" aria-label="${esc(t("progress") + " " + s.date + " " + s.time)}">%</label></div>`;
    })
    .join("");
  const x = Math.max(-100, Math.min(100, task.position?.x || 0)),
    y = Math.max(0, Math.min(400, task.position?.y || 0));
  return `<article id="card-${task.id}" class="task-card ${task.id === selected ? "active" : ""} ${task.marked ? "marked" : ""}" style="left:${x}px;top:${y}px"><div class="card-header" data-drag="${task.id}"><h2><i class="dot" style="background:${task.color}"></i> ${esc(task.name)}</h2><div class="card-actions"><button data-mark="${task.id}">${t(task.marked ? "unmark" : "mark")}</button><button data-delete="${task.id}">${t("delete")}</button></div></div><div class="card-body"><div class="card-meta"><div><small>${t("target")}</small><p>${esc(task.goal)}</p></div><div><small>${t("initial")}</small><p>${esc(task.baseline)}</p></div><div><small>${t("period")}</small><p>${task.start} → ${task.end}</p></div><div><small>${t("milestone")}</small><p>${task.end} · ${esc(task.goal)}</p></div></div><div class="card-progress"><progress value="${P.progress(task)}" max="100" aria-label="${esc(task.name)}"></progress><span>${P.progress(task)}%</span></div><div class="schedule">${sessions}</div><div class="plan-reason"><strong>✳ ${t("reason")}</strong>${t("reasonText")}<br>${task.sessions.length} ${t("hours")} · ${esc(task.baseline)} → ${esc(task.goal)}</div><div class="export-actions">${exportButtons(task.id)}</div></div></article>`;
}
function exportButtons(scope) {
  return ["print", "word", "excel", "backup"]
    .map(
      (kind) =>
        `<button data-export="${kind}" data-scope="${scope}">${t(kind)}</button>`,
    )
    .join("");
}
function renderCalendar() {
  $("#month-label").textContent =
    month.toLocaleDateString(locale(), { year: "numeric", month: "long" }) +
    " ↗";
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate(),
    offset = month.getDay();
  let html =
    weekdays()
      .map((w) => `<span class="weekday">${w}</span>`)
      .join("") + "<span></span>".repeat(offset);
  const sessions = allSessions();
  for (let day = 1; day <= days; day++) {
    const date = P.dateKey(
      new Date(month.getFullYear(), month.getMonth(), day),
    );
    const events = sessions.filter((x) => x.session.date === date);
    const active = events.find((x) => x.task.id === selected) || events[0];
    const shade = active
      ? `background:color-mix(in srgb,${active.task.color} ${12 + active.session.progress * 0.35}%,white);`
      : "";
    html += `<button class="calendar-day ${date === P.dateKey() ? "today" : ""} ${date === selectedDate ? "selected" : ""}" style="${shade}" data-date="${date}" title="${esc(events.map((x) => x.task.name + " " + x.session.time).join("\n"))}" aria-label="${date} ${esc(events.map((x) => x.task.name).join(", "))}">${day}<span class="day-dots">${[
      ...new Map(events.map((x) => [x.task.id, x.task])).values(),
    ]
      .slice(0, 4)
      .map((task) => `<i class="dot" style="background:${task.color}"></i>`)
      .join("")}</span></button>`;
  }
  $("#calendar").innerHTML = html;
  const events = sessions.filter((x) => x.session.date === selectedDate);
  $("#day-events").innerHTML =
    `<span class="eyebrow">${selectedDate}</span>` +
    (events.length
      ? events
          .map(
            (x) =>
              `<button data-focus="${x.task.id}"><i class="dot" style="background:${x.task.color}"></i> ${esc(x.task.name)} · ${x.session.time} · ${x.session.progress}%</button>`,
          )
          .join("")
      : `<p class="muted">${t("none")}</p>`);
}
function renderToday() {
  const events = allSessions().filter((x) => x.session.date === P.dateKey());
  $("#today-sessions").innerHTML = events.length
    ? events
        .map(
          ({ task, session, index }) =>
            `<div class="today-item"><button data-focus="${task.id}"><i class="dot" style="background:${task.color}"></i> ${esc(task.name)} · ${session.time}</button><small>${esc(session.title)}</small><label>${t("progress")} <input type="number" min="0" max="100" step="1" value="${session.progress}" data-progress="${task.id}" data-index="${index}" aria-label="Today ${esc(task.name)} ${session.time}" style="width:65px;margin-top:8px"></label></div>`,
        )
        .join("")
    : `<p class="muted">${t("noToday")}</p>`;
}
function buildWeekly() {
  let html =
    "<span></span>" +
    weekdays()
      .map((w) => `<span>${w}</span>`)
      .join("");
  P.slots.forEach((time) => {
    html += `<span>${time}</span>`;
    for (let day = 0; day < 7; day++)
      html += `<label><input type="checkbox" name="weekly" value="${day} ${time}" aria-label="${weekdays()[day]} ${time}"></label>`;
  });
  $("#weekly-grid").innerHTML = html;
}
function openEditor() {
  $("#task-form").reset();
  const now = new Date(),
    end = new Date();
  end.setDate(end.getDate() + 27);
  $("#task-form").elements.start.value = P.dateKey(now);
  $("#task-form").elements.end.value = P.dateKey(end);
  $("#exception-date").value = P.dateKey(now);
  overrides = {};
  selectedDays = new Set();
  $("#form-error").textContent = "";
  buildWeekly();
  renderOverrides();
  $("#editor").showModal();
}
function renderOverrides() {
  $("#exception-days").innerHTML = [...selectedDays]
    .sort()
    .map(
      (date) =>
        `<label class="exception-chip"><input type="checkbox" checked data-exception-date="${date}">${date}</label>`,
    )
    .join("");
  $("#override-list").innerHTML = Object.entries(overrides)
    .sort()
    .map(
      ([key, value]) =>
        `<div>${key} · ${t(value ? "allow" : "remove")} <button type="button" class="text-button" data-clear-override="${key}" aria-label="Clear ${key}">×</button></div>`,
    )
    .join("");
}
$("#task-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const input = {
    name: form.elements.name.value.trim(),
    goal: form.elements.goal.value.trim(),
    baseline: form.elements.baseline.value.trim(),
    start: form.elements.start.value,
    end: form.elements.end.value,
    weekly: [...form.querySelectorAll("[name=weekly]:checked")].map(
      (el) => el.value,
    ),
    overrides,
  };
  if (!input.name || !input.goal || !input.baseline) {
    $("#form-error").textContent =
      state.language === "zh"
        ? "请输入名称、目标与当前状态。"
        : "Enter a name, outcome and starting point.";
    return;
  }
  if (state.tasks.length >= 100) {
    $("#form-error").textContent =
      state.language === "zh"
        ? "最多保留 100 个目标，请先导出并删除已完成目标。"
        : "Limit: 100 goals. Export and remove completed goals first.";
    return;
  }
  let sessions;
  try {
    P.datesBetween(input.start, input.end);
  } catch {
    $("#form-error").textContent = t("invalid");
    return;
  }
  try {
    sessions = P.schedule(input, state.language);
  } catch (error) {
    $("#form-error").textContent = error.message;
    return;
  }
  const task = {
    ...input,
    id: crypto.randomUUID(),
    color: colors[state.tasks.length % colors.length],
    marked: false,
    sessions,
    position: { x: 0, y: 0 },
  };
  const existing = new Set(
    allSessions().map((x) => x.session.date + " " + x.session.time),
  );
  const conflict = sessions.some((s) => existing.has(s.date + " " + s.time));
  if (storageBlocked) {
    notice(t("corrupt"));
    return;
  }
  state.tasks.push(task);
  selected = task.id;
  save();
  $("#editor").close();
  render();
  if (conflict) notice(t("conflict"));
});
$("#new-task").onclick = openEditor;
$("#empty-new").onclick = openEditor;
$("#language").onchange = (event) => {
  state.language = event.target.value;
  save();
  render();
  if ($("#month-dialog").open) renderMonthTable();
};
$("#about").onclick = () => $("#about-dialog").showModal();
$("#prev-month").onclick = () => {
  month.setMonth(month.getMonth() - 1);
  renderCalendar();
};
$("#next-month").onclick = () => {
  month.setMonth(month.getMonth() + 1);
  renderCalendar();
};
$("#add-date").onclick = () => {
  const date = $("#exception-date").value,
    form = $("#task-form");
  if (
    !date ||
    date < form.elements.start.value ||
    date > form.elements.end.value
  ) {
    notice(t("addDateError"));
    return;
  }
  selectedDays.add(date);
  renderOverrides();
};
function setOverride(value) {
  if (!selectedDays.size) {
    notice(t("noDate"));
    return;
  }
  const form = $("#task-form");
  if (
    [...selectedDays].some(
      (d) => d < form.elements.start.value || d > form.elements.end.value,
    )
  ) {
    notice(t("addDateError"));
    return;
  }
  selectedDays.forEach(
    (date) => (overrides[`${date} ${$("#exception-time").value}`] = value),
  );
  renderOverrides();
}
$("#allow-slot").onclick = () => setOverride(true);
$("#remove-slot").onclick = () => setOverride(false);
document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    const card = event.target.closest(".task-card");
    if (card && !event.target.closest("input")) focusTask(card.id.slice(5));
    return;
  }
  if (button.dataset.close)
    document.getElementById(button.dataset.close).close();
  if (button.dataset.focus) focusTask(button.dataset.focus);
  if (button.dataset.date) {
    selectedDate = button.dataset.date;
    const first = allSessions().find((x) => x.session.date === selectedDate);
    if (first) focusTask(first.task.id);
    else renderCalendar();
  }
  if (button.dataset.mark) {
    const task = state.tasks.find((x) => x.id === button.dataset.mark);
    task.marked = !task.marked;
    save();
    render();
  }
  if (button.dataset.delete && confirm(t("confirm"))) {
    state.tasks = state.tasks.filter((x) => x.id !== button.dataset.delete);
    selected = state.tasks[0]?.id;
    save();
    render();
  }
  if (button.dataset.clearOverride) {
    delete overrides[button.dataset.clearOverride];
    renderOverrides();
  }
  if (button.dataset.export)
    exportData(button.dataset.export, button.dataset.scope);
});
document.addEventListener("change", (event) => {
  const input = event.target;
  if (input.dataset.exceptionDate) {
    if (input.checked) selectedDays.add(input.dataset.exceptionDate);
    else selectedDays.delete(input.dataset.exceptionDate);
  }
  if (input.dataset.progress) {
    if (!input.validity.valid || input.value === "") {
      input.reportValidity();
      return;
    }
    const task = state.tasks.find((x) => x.id === input.dataset.progress),
      value = Number(input.value);
    if (!Number.isInteger(value) || value < 0 || value > 100) return;
    task.sessions[Number(input.dataset.index)].progress = value;
    save();
    render();
  }
});
// Native pointer capture keeps mouse/touch dragging reliable. Interactive header buttons are excluded.
let drag = null;
document.addEventListener("pointerdown", (event) => {
  const handle = event.target.closest("[data-drag]");
  if (!handle || event.target.closest("button") || innerWidth <= 700) return;
  const task = state.tasks.find((x) => x.id === handle.dataset.drag),
    card = handle.closest(".task-card");
  selected = task.id;
  card.style.zIndex = ++zIndex;
  drag = {
    handle,
    card,
    task,
    startX: event.clientX,
    startY: event.clientY,
    x: task.position?.x || 0,
    y: task.position?.y || 0,
  };
  handle.setPointerCapture(event.pointerId);
});
document.addEventListener("pointermove", (event) => {
  if (!drag) return;
  const x = Math.max(-100, Math.min(100, drag.x + event.clientX - drag.startX)),
    y = Math.max(0, Math.min(400, drag.y + event.clientY - drag.startY));
  drag.task.position = { x, y };
  drag.card.style.left = x + "px";
  drag.card.style.top = y + "px";
});
function endDrag() {
  if (drag) {
    save();
    drag = null;
    render();
  }
}
document.addEventListener("pointerup", endDrag);
document.addEventListener("pointercancel", endDrag);
function rowsFor(scope) {
  const entries =
    scope === "month"
      ? allSessions().filter((x) =>
          x.session.date.startsWith($("#export-month").value),
        )
      : allSessions(state.tasks.filter((x) => x.id === scope));
  return [
    [
      t("date"),
      t("time"),
      t("task"),
      t("goal"),
      t("baseline"),
      t("action"),
      t("progress"),
    ],
    ...entries.map(({ task, session }) => [
      session.date,
      session.time,
      task.name,
      task.goal,
      task.baseline,
      session.title,
      String(session.progress),
    ]),
  ];
}
function tableHTML(rows) {
  return `<table><thead><tr>${rows[0].map((v) => `<th>${esc(v)}</th>`).join("")}</tr></thead><tbody>${rows
    .slice(1)
    .map((row) => `<tr>${row.map((v) => `<td>${esc(v)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;
}
function download(content, type, name) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
function exportData(kind, scope) {
  const rows = rowsFor(scope),
    task = state.tasks.find((x) => x.id === scope),
    title =
      scope === "month"
        ? `${t("month")} ${$("#export-month").value}`
        : task?.name || "Tanvior";
  const filename =
    "Tanvior-" + (scope === "month" ? $("#export-month").value : scope);
  if (kind === "backup") {
    download(
      rawBackup || JSON.stringify(state, null, 2),
      "application/json",
      `Tanvior-backup-${P.dateKey()}.json`,
    );
    return;
  }
  const documentHTML = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title></head><body><h1>Tanvior · ${esc(title)}</h1>${task ? `<p>${esc(t("goal"))}: ${esc(task.goal)}</p><p>${esc(t("baseline"))}: ${esc(task.baseline)}</p><p>${esc(t("reasonText"))}</p>` : ""}${tableHTML(rows)}</body></html>`;
  if (kind === "word")
    download("\ufeff" + documentHTML, "application/msword", filename + ".doc");
  if (kind === "excel") {
    const xml = `<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Tanvior"><Table>${rows.map((row) => `<Row>${row.map((value) => `<Cell><Data ss:Type="String">${esc(value)}</Data></Cell>`).join("")}</Row>`).join("")}</Table></Worksheet></Workbook>`;
    download(xml, "application/vnd.ms-excel", filename + ".xls");
  }
  if (kind === "print") {
    document.querySelector(".print-output")?.remove();
    const output = document.createElement("section");
    output.className = "print-output";
    output.innerHTML = `<h1>Tanvior · ${esc(title)}</h1>${task ? `<p>${esc(task.goal)}\n${esc(task.baseline)}\n${esc(t("reasonText"))}</p>` : ""}${tableHTML(rows)}`;
    document.body.append(output);
    // Close the modal so its top-layer content cannot cover the print document.
    const dialog = $("#month-dialog"),
      reopen = dialog.open;
    if (reopen) dialog.close();
    window.print();
    if (reopen) dialog.showModal();
  }
}
function renderMonthTable() {
  $("#month-title").textContent = t("month");
  const rows = rowsFor("month");
  $("#month-table").innerHTML =
    rows.length > 1
      ? tableHTML(rows)
      : `<p class="muted">${t("emptyMonth")}</p>`;
  $("#month-exports").innerHTML = exportButtons("month");
}
function openMonth() {
  $("#export-month").value = P.dateKey(month).slice(0, 7);
  renderMonthTable();
  $("#month-dialog").showModal();
}
$("#open-month").onclick = openMonth;
$("#month-label").onclick = openMonth;
$("#export-month").onchange = renderMonthTable;
// Full-state backups are available even in an empty workspace or when stored data is corrupt.
const backupTools = document.createElement("div");
backupTools.className = "export-actions";
const backupButton = document.createElement("button");
backupButton.dataset.export = "backup";
backupButton.dataset.scope = "all";
backupButton.dataset.i18n = "backup";
const importButton = document.createElement("button");
importButton.dataset.i18n = "importBackup";
const importInput = document.createElement("input");
importInput.type = "file";
importInput.accept = ".json,application/json";
importInput.hidden = true;
backupTools.append(backupButton, importButton, importInput);
$(".sidebar").append(backupTools);
importButton.onclick = () => importInput.click();
importInput.onchange = async () => {
  const file = importInput.files[0];
  if (!file) return;
  try {
    if (file.size > 5_000_000) throw new Error("Too large");
    const value = JSON.parse(await file.text());
    if (!validState(value)) throw new Error("Invalid schema");
    if (!confirm(t("restoreConfirm"))) return;
    state = value;
    storageBlocked = false;
    rawBackup = null;
    selected = state.tasks[0]?.id;
    save();
    render();
    notice(t("restored"));
  } catch {
    notice(t("invalidBackup"));
  } finally {
    importInput.value = "";
  }
};
let introTimer;
function enter() {
  clearTimeout(introTimer);
  $("#intro").classList.add("fade");
  setTimeout(() => ($("#intro").hidden = true), 650);
  try {
    sessionStorage.setItem("tanvior.intro", "seen");
  } catch {}
}
$("#enter").onclick = enter;
try {
  if (sessionStorage.getItem("tanvior.intro")) $("#intro").hidden = true;
} catch {}
if (!$("#intro").hidden) introTimer = setTimeout(enter, 15000);
render();
if (storageBlocked) notice(t("corrupt"));
// Refresh local date highlights when a tab is resumed or crosses midnight.
let lastDate = P.dateKey();
function refreshDate() {
  if (P.dateKey() !== lastDate) {
    lastDate = P.dateKey();
    render();
  }
}
document.addEventListener("visibilitychange", refreshDate);
setInterval(refreshDate, 60000);
