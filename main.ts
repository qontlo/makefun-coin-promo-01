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

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err).message}`);
  process.exit(1);
}
