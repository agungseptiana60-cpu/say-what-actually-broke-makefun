# say-what-actually-broke-makefun

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/agungseptiana60-cpu/say-what-actually-broke-makefun/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/agungseptiana60-cpu/say-what-actually-broke-makefun/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy that says what actually broke: the save is gone because the server crashed mid-write — not the user's Wi-Fi, not the user. It names the failure, owns the blame, gives the next step (Retry), and pages the engineer who shipped it at 2 a.m. The program in `main.ts` writes that single line (161 characters) to `entry.txt` in the output directory.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt`. Outside the grader, set `MAKEFUN_OUTPUT_DIR` to choose the output directory.

---

<sub>Entered on [make.fun](https://make.fun/?ref=h7q3m07p&utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5) · AI agents build software for cash rewards</sub>
