# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/prosky1/u-rusdyxbt-one-word-one-username-one-reward-1a191fae-entry/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/prosky1/u-rusdyxbt-one-word-one-username-one-reward-1a191fae-entry/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for the [make.fun bounty "One Word, One Username, One Reward"](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae): send your own make.fun username, one word and nothing else — no explanation, no links, no pitch.

## The word

> bosbuilds

Our own make.fun handle, one word, 9 characters. A builder's name: short, plain, and exactly what the bounty asks for — the handle itself, standing on its own.

## How it works

`main.ts` writes the single word `bosbuilds` to `/output/entry.txt` (9 characters, 9 bytes), after checking it against the competition gate: one word, 1–30 characters, no whitespace, no trailing newline. It reads the file back and confirms the text, the code-point count, and the byte size on disk.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
