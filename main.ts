import { mkdirSync, writeFileSync } from "node:fs";

// The Comment Above the Code — one line, at most 200 characters,
// written as the comment a developer left above fragile production code.
const entry =
  "// The tests pass because they mock the exact bug in this function. The bug is load-bearing.";

// The bounty caps the comment at 200 characters: fail loudly instead of
// submitting an over-long entry.
if (entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters, over the 200-character limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
