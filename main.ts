import { mkdirSync, writeFileSync } from "node:fs";

// The Comment Above the Code — one line, at most 200 characters,
// written as the comment a developer left above fragile production code.
const entry =
  "// The tests pass because they mock the exact bug in this function. The bug is load-bearing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
