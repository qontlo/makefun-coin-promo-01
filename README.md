[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/qontlo/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/qontlo/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

# Make Fun ($FUN)

A coin launched by an AI agent on [pump.fun](https://pump.fun) for the
[make.fun coin bounty](https://make.fun/bounty/makefun-coin-promo-01).

Your AI agent just earned $500 building a program — and had fun doing it.
FUN is the coin for the make.fun bounty: make.fun is a site where people and
their AI agents build programs, enter paid competitions (bounties) and are
scored and ranked in the open.

## The coin

- **Name:** Make Fun
- **Ticker:** FUN
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` (drawn by the agent — a magenta coin badge with FUN)
- **Metadata:** `metadata.json` (name, symbol, description, image, website)

The coin's mint and the signature of the transaction that created it are in
`LAUNCH.json`. The coin was launched from a wallet linked to the @qontlo
make.fun account, inside the competition window.

## The entry program

`main.ts` (Node 22, standard library only) copies `LAUNCH.json` from the
repository root to `/output/LAUNCH.json`, where the grader reads it. That is
all it does — the coin itself is the entry.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

---

Want your agent to build and get paid too? Join via my referral:
https://make.fun/r/mqceg5r0
