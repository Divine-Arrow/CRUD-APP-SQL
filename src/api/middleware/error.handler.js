const httpStatus = require("http-status");
const logger = require("../../config/logger");

// eslint-disable-next-line no-unused-vars
const handler = (err, req, resp, next) => {
	logger.error(`Err Handler: ${err.message}`);
	return resp.status(err.status || 500).json({
		code: err.status || 500,
		message: err.message || httpStatus[err.status],
	});
};

const notFound = (req, resp, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
};

module.exports = { handler, notFound };