# functional-normalize-url
Fun experiment  to normalize URLs w/ functional programming

## Usage

```js
const normalize = require('composable-normalize');

normalize('http://hello.com//there/../buddy/..');
//=> 'http://hello.com/there/buddy/'

normalize('HTTP://www.Github.com/');
//=> 'http://www.github.com/'

normalize('http://www.github.com/../a/b/../c/./d');
// => 'http://www.github.com/a/c/d'

normalize('http://www.github.com:80/bar');
// => 'http://www.github.com/bar'

normalize('http://www.github.com/%7Eusername/');
// => 'http://www.github.com/~username'
```

## Current Features

- [x] Dedupe slashes
- [x] Dedupe dots
- [x] Decode
- [x] Lowercase scheme
- [x] Remove default http|https ports
- [x] Adds trailing slash
