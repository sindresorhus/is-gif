import fs from 'fs';
import test from 'ava';
import m from '.';

const check = filename => m(fs.readFileSync(filename));

test('detect GIF from Buffer', t => {
	t.true(check('fixture.gif'));
	t.false(check('fixture.png'));
});

test('detect GIF from String', t => {
	t.false(m('string'));
});
