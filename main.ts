import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single funny line, written to /output/entry.txt.
// Gate: UTF-8 text, 1 to 140 characters, not only whitespace.
const line =
  "I asked AI to write my wedding vows \u2014 it said 'I do' to the terms and conditions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
