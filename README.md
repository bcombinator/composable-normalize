![](https://img.shields.io/badge/purely%20functional-%CE%BB-blue.svg?style=flat-square)
[![API stability](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)
# composable-normalize
Experiment  to normalize URLs w/ functional programming

## Usage

```js
import normalize from 'composable-normalize';

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
- [x] Remove default http/https ports
- [x] Adds trailing slash

## Todos
- [ ] Add Tests
- [ ] Publish to npm
