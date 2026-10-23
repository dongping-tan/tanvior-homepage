(function (root) {
  "use strict";
  const slots = ["09:00", "14:00", "19:00"];
  function dateKey(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }
  function parseDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error("Invalid date");
    const date = new Date(`${value}T12:00:00`);
    if (Number.isNaN(+date) || dateKey(date) !== value)
      throw new Error("Invalid date");
    return date;
  }
  function datesBetween(start, end) {
    const date = parseDate(start),
      last = parseDate(end),
      result = [];
    if (date > last || (last - date) / 86400000 > 366)
      throw new Error("Date range must be within one year");
    while (date <= last) {
      result.push(dateKey(date));
      date.setDate(date.getDate() + 1);
    }
    return result;
  }
  function schedule(input, language = "zh") {
    const dates = datesBetween(input.start, input.end);
    const entries = dates.flatMap((date) =>
      slots
        .filter((time) => {
          const key = `${date} ${time}`;
          return (
            input.overrides?.[key] ??
            input.weekly.includes(`${parseDate(date).getDay()} ${time}`)
          );
        })
        .map((time) => ({ date, time, progress: 0 })),
    );
    if (!entries.length)
      throw new Error(
        language === "zh"
          ? "请至少选择一个可用时间块。"
          : "Select at least one available time slot.",
      );
    return entries.map((entry, index) => {
      const phase = Math.min(2, Math.floor((index * 3) / entries.length));
      const labels =
        language === "zh"
          ? ["基础梳理", "专项实践", "复盘与验收"]
          : ["Build foundations", "Focused practice", "Review and assess"];
      return { ...entry, title: `${labels[phase]} · ${input.goal}`, phase };
    });
  }
  function progress(task) {
    return task.sessions.length
      ? Math.round(
          task.sessions.reduce((sum, x) => sum + x.progress, 0) /
            task.sessions.length,
        )
      : 0;
  }
  function escapeXML(value) {
    return String(value).replace(
      /[<>&"']/g,
      (c) =>
        ({
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          '"': "&quot;",
          "'": "&apos;",
        })[c],
    );
  }
  const api = {
    slots,
    dateKey,
    parseDate,
    datesBetween,
    schedule,
    progress,
    escapeXML,
  };
  if (typeof module !== "undefined") module.exports = api;
  else root.Planner = api;
})(globalThis);
