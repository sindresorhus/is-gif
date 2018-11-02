import fs from 'fs';
import test from 'ava';
import isGif from '.';

const check = filename => isGif(fs.readFileSync(filename));

test('detect GIF from Buffer', t => {
	t.true(check('fixture.gif'));
	t.false(check('fixture.png'));
});

test('validate the input argument type', t => {
	t.throws(() => {
		isGif('x');
	}, /Expected the `input` argument to be of type `Uint8Array`/);

	t.notThrows(() => {
		isGif(Buffer.from('x'));
	});

	t.notThrows(() => {
		isGif(new Uint8Array());
	});
});

