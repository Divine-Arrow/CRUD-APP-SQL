const winston = require("winston");

const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	transports: [
		new winston.transports.File({ filename: "./logs/error.log", level: "error" }),
		new winston.transports.File({ filename: "./logs/combined.log" }),
	],
});

// Dont Log to the console in prod
if (process.env.NODE_ENV !== "production") {
	logger.add(new winston.transports.Console({
		format: winston.format.simple(),
	}));
}

logger.stream = {
	write: (message) => {
		logger.info(message.trim());
	},
};

module.exports = logger;