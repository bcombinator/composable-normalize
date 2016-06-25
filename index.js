const {compose, toLower, replace, append, decode} = require('./prelude');

exports.normalize = compose([replace(/([^:]\/)\/+/g, '$1'),
    replace(/\/\.+/g, '/'),
    replace(/(\:80|\:443)/, ''),
    toLower,
    append('/'),
    decode
]);
