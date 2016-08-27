(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.composableNormalize = global.composableNormalize || {})));
}(this, (function (exports) { 'use strict';

// decode :: String -> String
var decode = decodeURIComponent

// _compose :: (b -> c) -> (a -> b) -> (a -> c)
var _compose = function (f, g) { return function () {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	return f(g.apply(void 0, args));
; }	}

// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
var compose = function () {
	var fns = [], len = arguments.length;
	while ( len-- ) fns[ len ] = arguments[ len ];

	return fns.reduce(_compose);
}

// replace :: Regex -> String -> String -> String
var replace = function (pattern, substr) { return function (str) { return str.replace(pattern, substr); }; }

// toLower :: String -> String
var toLower = function (str) { return str.toLowerCase(); }

// append :: String -> String -> String
var append = function (a) { return function (b) { return b.concat(a); }; }

var dedupeSlashes = /([^:]\/)\/+/g
var dedupeDots = /\/\.+/g
var defaultPorts = /(:80|:443)/

var normalize = compose(
  replace(dedupeSlashes, '$1'),
  replace(dedupeDots, '/'),
  replace(defaultPorts, ''),
  toLower,
  append('/'),
  decode
)

exports.normalize = normalize;
exports.compose = compose;

Object.defineProperty(exports, '__esModule', { value: true });

})));