const {compose, toLower, replace, append, decode} = require('./prelude');

const dedupeSlashes = /([^:]\/)\/+/g;
const dedupeDots = /\/\.+/g;
const defaultPorts = /(\:80|\:443)/;

exports.normalize = compose([
    replace(dedupeSlashes, '$1'),
    replace(dedupeDots, '/'),
    replace(defaultPorts, ''),
    toLower,
    append('/'),
    decode
]);
