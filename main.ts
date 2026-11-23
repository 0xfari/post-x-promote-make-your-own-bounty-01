// Post on X: Promote Your Own Bounty.
// The entry is the post itself: one post of your own on X quoting or linking
// make.fun's make-your-own-bounty post, with a photo of its own attached.
// This program only carries POST.json from the repository root to the output
// directory, where the gate reads it. Nothing this program writes is scored.

// The post is the entry: this file only moves POST.json, the house reads the post itself.
import { copyFileSync, mkdirSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

// A placeholder url still copies cleanly; the gate refuses it until Fari's real post lands in POST.json.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

let post: unknown;
try {
  post = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (!post || typeof (post as { url?: unknown }).url !== 'string' || (post as { url: string }).url.length === 0) {
  console.error('POST.json must be a JSON object with a non-empty url string.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}
copyFileSync(sourcePath, targetPath);
