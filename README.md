# functional-normalize-url
Fun experiment  to normalize URLs w/ functional programming

## Usage

```js
const normalize = require('functional-normalize-url');

normalize('http://hello.com//there/../buddy/..');
//=> "http://hello.com/there/buddy/"
```

## Current Features

- [x] Dedupe slashes
- [x] Dedupe dots
- [x] Decode
- [x] Lowercase scheme
- [x] Remove default http|https ports
- [x] Adds trailing slash
