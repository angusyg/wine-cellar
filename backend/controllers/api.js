/**
 * @fileoverview Application API controller
 * @module controllers/api
 * @requires {@link external:express}
 * @requires helpers/logger
 * @requires services/users
 */

const { logger } = require('../helpers/logger')();
const userService = require('../services/users');

const controller = {};

/**
 * Logger endpoint handler
 * @method logger
 * @param  {external:Request}  req - Request received
 * @param  {external:Response} res - Response to send
 */
controller.logger = (req, res) => {
  logger[req.params.level](JSON.stringify(req.body));
  res.status(204).end();
};

/**
 * Login endpoint handler
 * @method login
 * @param  {external:Request}   req   - Request received
 * @param  {external:Response}  res   - Response to send
 * @param  {nextMiddleware}     next  - Callback to pass control to next middleware
 */
controller.login = (req, res, next) => {
  userService.login(req.body)
    .then(tokens => res.status(200).json(tokens))
    .catch(err => next(err));
};

/**
 * Logout endpoint handler
 * @method logout
 * @param  {external:Request}  req - Request received
 * @param  {external:Response} res - Response to send
 */
controller.logout = (req, res) => res.status(204).end();

/**
 * Refresh token endpoint handler
 * @method refreshToken
 * @param  {external:Request}  req - Request received
 * @param  {external:Response} res - Response to send
 */
controller.refreshToken = (req, res, next) => {
  userService.refreshToken(req.user, req.refresh)
    .then(token => res.status(200).json(token))
    .catch(err => next(err));
};

module.exports = controller;
