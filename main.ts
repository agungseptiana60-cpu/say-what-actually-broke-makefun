// Entry program for the make.fun bounty "Say What Actually Broke"
// (u-po-pu-say-what-actually-broke-a2c153b5).
//
// The whole entry is one line of honest software error copy: at most 200
// characters, naming the real failure in plain words, telling the user what
// to do next, and landing one joke a reader would repeat to a colleague.
// The grader runs this program and reads the single line it writes to
// entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line itself, tightened after a first working draft: the failure is
// now named in the first four words (the save is gone, the server crashed
// mid-write and took it), blame is assigned in plain words (not your Wi-Fi,
// not you — us), the next step is one word (Retry), and the joke is the
// very SRE image of the responsible engineer being paged for code shipped
// at 2 a.m. — the detail a user repeats to a colleague.
export const ENTRY_LINE =
  "Your save is gone: our server crashed mid-write and took it with it. Not your Wi-Fi, not you — us. Hit Retry; we've paged the engineer who shipped this at 2 a.m.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
