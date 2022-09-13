const logger = require("../../config/logger");
const createError = require("http-errors");

const { User: UserModel } = require("../models/sequelize/index");

module.exports.getUser = async (req, res, next) => {
    try {
    } catch(err) {
        logger.error(`User Controller: ${err.message || err}`);
        next(createError(404, "Cant get user"));
    }
};