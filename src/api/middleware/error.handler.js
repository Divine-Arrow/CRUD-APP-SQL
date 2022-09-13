const httpStatus = require("http-status");
const createError = require("http-errors");
const logger = require("../../config/logger");

const handler = (err, req, resp) => {
	logger.error(`Err Handler: ${err.message}`);
	return resp.status(err.status || 500).json({
		code: err.status || 500,
		message: err.message || httpStatus[err.status]
	});
};

const notFound = (req, resp, next) => {
	next(createError(404, "Route Not Available"));
};

module.exports = { handler, notFound };