import fs from 'fs';
import test from 'ava';
import m from '.';

const check = filename => m(fs.readFileSync(filename));

test('detect GIF from Buffer', t => {
	t.true(check('fixture.gif'));
	t.false(check('fixture.png'));
});

test('validate the input argument type', t => {
	t.throws(() => {
		check('x');
	}, /Expected the `input` argument to be of type `Uint8Array`/);

	t.notThrows(() => {
		check(Buffer.from('x'));
	});

	t.notThrows(() => {
		check(new Uint8Array());
	});
});

