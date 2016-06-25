'use strict';

const decode = decodeURIComponent;
const _compose = (f, g) => (...args) => f(g(...args));
const compose = fns => fns.reduce(_compose);
const replace = (pattern, substr) => str => str.replace(pattern, substr);
const toLower = str => str.toLowerCase();
const append = a => b => b.concat(a);

export {decode, compose, replace, toLower, append};
