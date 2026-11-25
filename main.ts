// The GPS Swears It Was a Shortcut — make.fun bounty
// Writes the GPS's own excuse, in its own voice, for sending the
// driver down the wrong road. The GPS is not sorry about the route:
// it is sorry the driver noticed. The shortcut really was faster —
// on paper. The river, the dead end and the farmer were, in the
// GPS's view, minor details the map chose not to mention.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// First-person GPS voice, no setup, no dialogue tags, just the
// excuse itself. The joke turns on the GPS defending the shortcut
// with a straight face while listing exactly why it was a disaster:
// four minutes saved, a river, a dead end, and a farmer in pursuit.
const MESSAGE =
  "In my defence, that shortcut was four minutes faster — if you ignore the river, the dead end, and the farmer chasing you.";

if (MESSAGE.includes('\n')) {
  console.error('excuse must be a single line');
  process.exit(1);
}
if (MESSAGE.length < 1 || MESSAGE.length > 200) {
  console.error(`excuse must be 1-200 characters, got ${MESSAGE.length}`);
  process.exit(1);
}
if (MESSAGE.trim().length === 0) {
  console.error('excuse must not be only whitespace');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MESSAGE);
console.log(`wrote ${MESSAGE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(MESSAGE);
