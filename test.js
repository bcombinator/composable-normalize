import { normalize, compose } from './index'
import test from 'tape'

test('normalize', function (t) {
  t.equals(normalize('HTTP://github.com'), 'http://github.com/')
  t.equals(normalize('http://www.github.com/../a/b/../c/./d'), 'http://www.github.com/a/b/c/d/')
  t.equals(normalize('http://www.github.com:80/bar'), 'http://www.github.com/bar/')
  t.equals(normalize('http://www.github.com/%7Eusername/'), 'http://www.github.com/~username/')
  t.equals(normalize('http://github.com////foo/bar'), 'http://github.com/foo/bar/')
  t.end()
})

test('compose', function (t) {
  const inc = y => y + 1
  const add = x => y => x + y
  t.equals(compose(inc, add(10))(10), 21)
  t.equals(compose(str => `${str}bar`, normalize)('HTTP://github.com////foo/'), 'http://github.com/foo/bar')
  t.end()
})
