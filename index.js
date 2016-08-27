'use strict'

import { compose, toLower, replace, append, decode } from './prelude'

const dedupeSlashes = /([^:]\/)\/+/g
const dedupeDots = /\/\.+/g
const defaultPorts = /(:80|:443)/

export default compose([
  replace(dedupeSlashes, '$1'),
  replace(dedupeDots, '/'),
  replace(defaultPorts, ''),
  toLower,
  append('/'),
  decode
])
