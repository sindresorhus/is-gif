import fs from 'node:fs';
import test from 'ava';
import isGif from './index.js';

const check = filename => isGif(fs.readFileSync(filename));

test('detect GIF from Buffer', t => {
	t.true(check('fixture.gif'));
	t.false(check('fixture.png'));
});
