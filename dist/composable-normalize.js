(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define('composableNormalize', factory) :
        (global.composableNormalize = factory());
}(this, function() {
    'use strict';

    // decode :: String -> String
    var decode = decodeURIComponent;

    // _compose :: (b -> c) -> (a -> b) -> (a -> c)
    var _compose = function(f, g) {
        return function() {
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];

            return f(g.apply(void 0, args));;
        }
    };

    // compose :: [(d -> e) -> (c -> d) -> (b -> c) -> (a -> b)] -> (a -> e)
    var compose = function(fns) {
        return fns.reduce(_compose);
    };

    // replace :: Regex -> String -> String -> String
    var replace = function(pattern, substr) {
        return function(str) {
            return str.replace(pattern, substr);
        };
    };

    // toLower :: String -> String
    var toLower = function(str) {
        return str.toLowerCase();
    };

    // append :: String -> String -> String
    var append = function(a) {
        return function(b) {
            return b.concat(a);
        };
    };

    var dedupeSlashes = /([^:]\/)\/+/g;
    var dedupeDots = /\/\.+/g;
    var defaultPorts = /(\:80|\:443)/;

    var main = compose([
        replace(dedupeSlashes, '$1'),
        replace(dedupeDots, '/'),
        replace(defaultPorts, ''),
        toLower,
        append('/'),
        decode
    ]);

    return main;

}));
