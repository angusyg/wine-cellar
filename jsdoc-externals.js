/**
 * Callback function to pass control to the next matching middleware
 * @callback nextMiddleware
 * @global
 * @param {string|external:Error} [route|Error] - Next route to activate or Error to pass to next error handler middleware
 */

/**
 * Checks if user has permission to call endpoint
 * @callback checkPermission
 * @param  {external:Request}          req  - Request received
 * @param  {external:Response}         res  - Response to be send
 * @param  {nextMiddleware}   next - Callback to pass control to next middleware
 */

/**
 * The built-in class for creating error object
 * @external Error
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */

/**
 * The path module provides utilities for working with file and directory paths.
 * @external path
 * @see https://nodejs.org/api/path.html
 */

/**
 * The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
 * @external fs
 * @see https://nodejs.org/api/fs.html
 */

/**
 * ORM Module to add classes to MongoDB Javascript with support for NeDB database
 * @external camo
 * @see https://www.npmjs.com/package/camo
 */

/**
 * Fast, unopinionated, minimalist web framework for Node.js
 * @external express
 * @see http://expressjs.com/
 */

/**
 * The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
 * @external Request
 * @see http://expressjs.com/en/4x/api.html#req
 */

/**
 * The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
 * @external Response
 * @see http://expressjs.com/en/4x/api.html#res
 */

/**
 * Lib to help to hash passwords.
 * @external bcrypt
 * @see https://github.com/kelektiv/node.bcrypt.js
 */

/**
 * Node.js body parsing middleware, to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 * @external body-parser
 * @see https://github.com/expressjs/body-parser
 */

/**
 * Node.js compression middleware.
 * @external compression
 * @see https://github.com/expressjs/compression
 */

/**
 * Extremely fast node.js logger, inspired by Bunyan. It also includes a shell utility to pretty-print its log files
 * @external pino
 * @see https://github.com/pinojs/pino
 */

/**
 * High performance debug logging.
 * @external pino-debug
 * @see https://github.com/pinojs/pino-debug
 */

/**
 * A wrapper for Pino to provide Bunyan's multiple stream API
 * @external pino-multi-stream
 * @see https://github.com/pinojs/pino-multi-stream
 */

/**
 * A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers.
 * @external debug
 * @see https://github.com/visionmedia/debug
 */

/**
 * The util module is primarily designed to support the needs of Node.js' own internal APIs. However, many of the utilities are useful for application and module developers as well.
 * @external util
 * @see https://nodejs.org/api/util.html
 */

/**
 * Continuation-local storage works like thread-local storage in threaded programming, but is based on chains of Node-style callbacks instead of threads.
 * @external continuation-local-storage
 * @see https://github.com/othiym23/node-continuation-local-storage
 */

/**
 * JsonWebToken implementation for node.js
 * @external jsonwebtoken
 * @see https://github.com/auth0/node-jsonwebtoken
 */

/**
 * An express middleware to log with pino.
 * @external express-pino-logger
 * @see https://github.com/pinojs/express-pino-logger
 */

/**
 * Simple, fast generation of RFC4122 UUIDS.
 * @external uuid/v4
 * @see https://github.com/kelektiv/node-uuid
 */

/**
 * Helmet helps to secure Express apps by setting various HTTP headers.
 * @external helmet
 * @see https://github.com/helmetjs/helmet
 */

/**
 * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 * @external cors
 * @see https://github.com/expressjs/cors
 */
