# ramda-normalize-url
Fun experiment  to normalize URLs w/ ramda

## Usage

```js
const normalize = require('ramda-normalize-url');

normalize('http://hello.com//there/../buddy/..');
//=> "http://hello.com/there/buddy/"
```

## Current Features

- [x] Dedupe slashes
- [x] Dedupe dots
