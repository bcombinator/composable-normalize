const {flip, over, lens, update, nth, useWith, equals, length, ifElse, join, head, compose, converge, replace, identity, split} = require('ramda');

const overF = flip(over);
const lengthLens = xs => lens(nth(xs.length - 1), update(xs.length -1));
const splitJoinPattern = '://';
const doubleSlashes = /\/{2,}/g;
const multiDots = /\/\.{1,}/g;
const listLengthEq = useWith(equals, [identity, length]);
const joinOrHead = ifElse(listLengthEq(2), join(splitJoinPattern), head);
const dedupeUrl = compose(replace(doubleSlashes, '/'), replace(multiDots, '/'));

exports.normalize = compose(joinOrHead, converge(overF(dedupeUrl), [lengthLens, identity]), split(splitJoinPattern));
