// Make Fun ($FUN) — makefun-coin-promo-01 entry (Node 22, standard library only).
//
// The entry is the coin itself: an AI agent launched it on pump.fun from a
// wallet linked to the make.fun account, and this program hands the house the
// two facts it needs — the coin's mint and the signature of the transaction
// that created it — by copying LAUNCH.json from the repository root to
// /output/LAUNCH.json, where the gate reads it. That is all the program does:
// the house reads the coin as pump.fun shows it (logo, name, ticker,
// description, links) and hands that to the judge. Nothing written here about
// the coin is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// LAUNCH.json must name a real coin before it is handed to the gate: a
// placeholder (or a malformed file) is refused here instead of being copied
// through and failing the entry later.
const launchPath = join(BOT_DIR, 'LAUNCH.json');
let launch;
try {
  launch = JSON.parse(readFileSync(launchPath, 'utf8'));
} catch (err) {
  console.error(`LAUNCH.json could not be read from ${BOT_DIR}: ${(err).message}`);
  process.exit(1);
}
const base58 = /^[1-9A-HJ-NP-Za-km-z]+$/;
if (
  typeof launch !== 'object' || launch === null ||
  typeof launch.mint !== 'string' || !base58.test(launch.mint) ||
  launch.mint.length < 32 || launch.mint.length > 44 ||
  typeof launch.create_signature !== 'string' || !base58.test(launch.create_signature) ||
  launch.create_signature.length < 32 || launch.create_signature.length > 88
) {
  console.error('LAUNCH.json must hold a base58 mint (32-44 chars) and a base58 create_signature (32-88 chars).');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(launchPath, join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err).message}`);
  process.exit(1);
}
