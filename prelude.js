'use strict'

// decode :: String -> String
const decode = decodeURIComponent

// _compose :: (b -> c) -> (a -> b) -> (a -> c)
const _compose = (f, g) => (...args) => f(g(...args))

// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
const compose = fns => fns.reduce(_compose)

// replace :: Regex -> String -> String -> String
const replace = (pattern, substr) => str => str.replace(pattern, substr)

// toLower :: String -> String
const toLower = str => str.toLowerCase()

// append :: String -> String -> String
const append = a => b => b.concat(a)

export { decode, compose, replace, toLower, append }
