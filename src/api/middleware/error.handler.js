const createError = require("http-errors");
const logger = require("../../config/logger");
const joi = require("joi");


const findErrorRoot = (error) => {
	if(error instanceof joi.ValidationError) {
		return createError(418, error.details[1]?.message || "");
	} else {
		return createError(errorObj.status, errorObj.message);
	}
}

const notFound = (req, resp, next) => {
	next(createError(404, "Route Not Available"));
};

const handler = (err, req, res, next) => {

	// check the error source
	const errorObj = findErrorRoot(err);
	

	// Log the error
	logger.error(`Err Handler: ${errorObj.message}`);

	// send the error to the client
	return res.status(errorObj.status || 500).json({
		code: errorObj.status || 500,
		message: errorObj.message || "Something went wrong"
	});
};

module.exports = { handler, notFound };