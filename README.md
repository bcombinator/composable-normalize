![](https://nodei.co/npm/composable-normalize.png)

![](https://img.shields.io/badge/functional-%CE%BB-blue.svg?style=flat-square)
[![API stability](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![npm version](https://img.shields.io/npm/v/composable-normalize.svg?style=flat-square)](https://www.npmjs.com/package/composable-normalize)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
# composable-normalize
Experiment  to normalize URLs w/ functional programming

## Install
```sh
npm i --save-dev composable-normalize
```

## Usage

```js
import {normalize} from 'composable-normalize'

normalize('HTTP://www.Github.com/')
//=> 'http://www.github.com/'

normalize('http://www.github.com/../a/b/../c/./d')
// => 'http://www.github.com/a/b/c/d/'

normalize('http://www.github.com:80/bar')
// => 'http://www.github.com/bar/'

normalize('http://www.github.com/%7Eusername/')
// => 'http://www.github.com/~username/'
```

also as a bonus you can do functional composition right to left :fire:

```js
import {normalize, compose} from 'composable-normalize'

compose(str => `${str}bar`, normalize)('HTTP://github.com////foo/')
// => 'http://github.com/foo/bar'
```

## Current Features

- [x] Dedupe slashes
- [x] Dedupe dots
- [x] Decode
- [x] Lowercase scheme
- [x] Remove default http/https ports
- [x] Adds trailing slash

## Todos
- [x] Add Tests
- [x] Publish to npm
- [ ] Add Options?
