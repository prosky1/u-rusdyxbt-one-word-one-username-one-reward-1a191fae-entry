// One Word, One Username, One Reward — entry program.
//
// The bounty asks for the entrant's own make.fun username, one word and
// nothing else: at most 30 characters, no explanation, no links, no pitch.
// This program writes the username "bosbuilds" to /output/entry.txt and
// then reads it back to prove the file the sealed scorer gates on holds
// exactly that word: UTF-8 text, 1-30 characters, not only whitespace,
// no trailing newline.
//
// Run with Node 22+ (the grader runs Node 22):
//   node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: our own make.fun handle, one word, 9 characters.
const USERNAME = "bosbuilds";

// The grader sets MAKEFUN_OUTPUT_DIR=/output; fall back to /output so a
// local run behaves the same way.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate check before writing: a single word, 1-30 characters, no spaces,
// no whitespace at all — and shaped like a real make.fun handle: it starts
// with a letter and holds only lowercase letters and digits.
if (USERNAME.length < 1 || USERNAME.length > 30) {
  fail(`username must be 1-30 characters, got ${USERNAME.length}`);
}
if (/\s/.test(USERNAME)) {
  fail("username must be a single word with no whitespace");
}
if (!/^[a-z][a-z0-9]*$/.test(USERNAME)) {
  fail(
    `username must start with a letter and hold only lowercase letters and digits, got ${JSON.stringify(USERNAME)}`,
  );
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, USERNAME, "utf8");

// Verify what landed on disk: read it back and confirm text, code points,
// and byte size — 9 ASCII letters, 9 characters, 9 bytes, no newline.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== USERNAME) {
  fail(`verification failed: file holds ${JSON.stringify(written)}`);
}
if ([...written].length !== USERNAME.length) {
  fail(
    `verification failed: file holds ${[...written].length} code points, expected ${USERNAME.length}`,
  );
}
if (written.includes("\n") || written.includes("\r")) {
  fail("verification failed: file contains a newline");
}
if (Buffer.byteLength(written, "utf8") !== USERNAME.length) {
  fail(
    `verification failed: file is ${Buffer.byteLength(written, "utf8")} bytes, expected ${USERNAME.length}`,
  );
}

console.log(
  `wrote ${JSON.stringify(written)} to ${OUT_FILE} — ${[...written].length} characters, ${Buffer.byteLength(written, "utf8")} bytes, no newline`,
);
