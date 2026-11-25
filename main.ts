// Delete 'moist' From the Dictionary.
// Writes exactly the word "moist" (5 bytes, no trailing newline)
// to /output/entry.txt — the single word to erase forever.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "moist", "utf8");
