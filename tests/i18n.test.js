"use strict";
const { test } = require("node:test");
const assert = require("node:assert/strict");
const I = require("../i18n.js");
const P = require("../planner.js");
test("all six languages translate every interface key and schedule stage", () => {
  const keys = Object.keys(I.copy.en).sort();
  for (const language of I.supported) {
    assert.deepEqual(Object.keys(I.copy[language]).sort(), keys);
    for (const value of Object.values(I.copy[language]))
      assert.equal(typeof value, "string");
    const labels = [0, 1, 2].map((index) => I.copy[language][`phase${index}`]);
    const sessions = P.schedule(
      {
        start: "2026-10-19",
        end: "2026-10-19",
        goal: "User text",
        weekly: ["1 09:00", "1 14:00", "1 19:00"],
      },
      language,
      labels,
      I.copy[language].emptySchedule,
    );
    assert.deepEqual(
      sessions.map((s) => s.title),
      labels.map((label) => `${label} · User text`),
    );
    assert.throws(
      () =>
        P.schedule(
          { start: "2026-10-19", end: "2026-10-19", goal: "x", weekly: [] },
          language,
          labels,
          I.copy[language].emptySchedule,
        ),
      { message: I.copy[language].emptySchedule },
    );
  }
});
test("IP country mapping, multilingual countries, and browser fallback", () => {
  for (const [country, language] of Object.entries({
    JP: "ja",
    KR: "ko",
    CN: "zh",
    US: "en",
    GB: "en",
    AU: "en",
    ES: "es",
    MX: "es",
    AR: "es",
    FR: "fr",
  }))
    assert.equal(I.countryLanguage(country, ["zh-CN"]), language);
  assert.equal(I.countryLanguage("CA", ["fr-CA"]), "fr");
  assert.equal(I.countryLanguage("SG", ["zh-SG"]), "zh");
  assert.equal(I.countryLanguage("XX", ["de-DE", "ko-KR"]), "ko");
  assert.equal(I.countryLanguage(null, ["de-DE"]), "en");
});
test("country lookup succeeds without credentials or referrer", async () => {
  const result = await I.detectLanguage(["en-US"], async (url, options) => {
    assert.equal(url, "https://api.country.is/");
    assert.equal(options.credentials, "omit");
    assert.equal(options.referrerPolicy, "no-referrer");
    return {
      ok: true,
      json: async () => ({ country: "JP", ip: "not retained" }),
    };
  });
  assert.equal(result, "ja");
});
test("failed, invalid and stalled lookups fall back to browser language", async () => {
  assert.equal(
    await I.detectLanguage(["es-MX"], async () => {
      throw Error("network");
    }),
    "es",
  );
  assert.equal(
    await I.detectLanguage(["fr"], async () => ({ ok: false })),
    "fr",
  );
  assert.equal(
    await I.detectLanguage(["ko"], async () => ({
      ok: true,
      json: async () => ({}),
    })),
    "ko",
  );
  assert.equal(
    await I.detectLanguage(["ja"], () => new Promise(() => {}), 10),
    "ja",
  );
});
