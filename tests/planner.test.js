"use strict";
const { test } = require("node:test");
const assert = require("node:assert/strict");
const P = require("../planner.js");
test("local calendar dates include leap day and reject impossible dates", () => {
  assert.deepEqual(P.datesBetween("2028-02-28", "2028-03-01"), [
    "2028-02-28",
    "2028-02-29",
    "2028-03-01",
  ]);
  for (const date of ["2026-02-30", "bad", "2026-13-01"])
    assert.throws(() => P.parseDate(date));
  assert.throws(() => P.datesBetween("2026-03-01", "2026-02-01"));
  assert.throws(() => P.datesBetween("2026-01-01", "2028-01-01"));
});
test("recurring slots respect inclusive boundaries and date overrides", () => {
  const sessions = P.schedule({
    start: "2026-10-19",
    end: "2026-10-26",
    goal: "Read",
    weekly: ["1 09:00"],
    overrides: { "2026-10-19 09:00": false, "2026-10-20 14:00": true },
  });
  assert.deepEqual(
    sessions.map((s) => [s.date, s.time]),
    [
      ["2026-10-20", "14:00"],
      ["2026-10-26", "09:00"],
    ],
  );
  assert.ok(sessions.every((s) => s.progress === 0));
});
test("empty schedule is rejected and stages are deterministic", () => {
  assert.throws(() =>
    P.schedule({
      start: "2026-10-19",
      end: "2026-10-19",
      goal: "x",
      weekly: [],
    }),
  );
  const sessions = P.schedule(
    {
      start: "2026-10-19",
      end: "2026-10-19",
      goal: "x",
      weekly: ["1 09:00", "1 14:00", "1 19:00"],
    },
    "en",
  );
  assert.deepEqual(
    sessions.map((s) => s.phase),
    [0, 1, 2],
  );
  assert.equal(
    P.progress({ sessions: [{ progress: 100 }, { progress: 0 }] }),
    50,
  );
  assert.equal(P.progress({ sessions: [] }), 0);
});
test("export values are escaped, including user supplied markup", () => {
  assert.equal(P.escapeXML("<script>\"&'"), "&lt;script&gt;&quot;&amp;&apos;");
});
