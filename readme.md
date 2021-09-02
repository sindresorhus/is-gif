# is-gif

> Check if a Buffer/Uint8Array is a [GIF](https://en.wikipedia.org/wiki/Graphics_Interchange_Format) image

## Install

```
$ npm install is-gif
```

## Usage

```js
import {readChunk} from 'read-chunk';
import isGif from 'is-gif';

const buffer = await readChunk('unicorn.gif', {length: 3});

isGif(buffer);
//=> true
```

## API

### isGif(input)

Returns a boolean of whether `input` is a GIF image.

#### input

Type: `Buffer | Uint8Array`

It only needs the first 3 bytes.

## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array
