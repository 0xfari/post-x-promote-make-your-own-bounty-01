# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/0xfari/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/0xfari/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Post on X: Promote Your Own Bounty — the entry is one post of your own on X quoting or linking make.fun's make-your-own-bounty post, with a photo of its own attached. Places go by the post's replies + reposts + quotes; the top 50 share $250.

## The entry

`POST.json` at the repository root names the post:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` copies `POST.json` to `/output/POST.json` — that is all the program does. The house reads the post itself from X and counts its replies, reposts and quotes.

> The placeholder above is not a real post address. Fari posts from his own public X account (@0xfariii) and the real URL goes into `POST.json` before submit.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=9z46ypvf&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
