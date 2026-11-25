// Delete 'moist' From the Dictionary.
// Writes exactly the word "moist" (5 bytes, no trailing newline)
// to /output/entry.txt — the single word to erase forever.
// After writing, the file is read back and its exact bytes are
// verified to be "moist"; a mismatch throws and exits non-zero,
// so a failed or corrupted write can never pass silently.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "moist";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
if (readFileSync(`${outDir}/entry.txt`, "utf8") !== WORD) {
  throw new Error("entry.txt read-back mismatch: expected exactly \"moist\"");
}
