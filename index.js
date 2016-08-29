'use strict'

import { compose, toLower, replace, append, decode } from '@bcombinator/prelude'

const dedupeSlashes = /([^:]\/)\/+/g
const dedupeDots = /\/\.+/g
const defaultPorts = /(:80|:443)/

const normalize = compose(
  replace(dedupeSlashes, '$1'),
  replace(dedupeDots, '/'),
  replace(defaultPorts, ''),
  toLower,
  append('/'),
  decode
)

export { normalize, compose }
