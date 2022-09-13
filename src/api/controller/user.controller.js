const createError = require("http-errors");

const dataValidator = require("../middleware/data.validator");
const logger = require("../../config/logger");
const UserModel = require("../models/sequelize/user.model");

module.exports.getUser = async (req, res, next) => {
    try {
        const { userId } = await dataValidator.getUser({userId: req.params.userId});
        if(!userId || isNaN(userId)) throw({ status: 418, message: "Invalid Field userId" });
        const userList = await UserModel.findByPk(userId);
        if(!userList) throw({ status:404, message: "User not found" });
        res.json({ data: userList })
    } catch(err) {
        next(err);
    }
};

module.exports.registerUser = async (req, res, next) => {
    try {
        const { first_name, last_name } = req.body;
        const userList = await UserModel.create({ first_name, last_name });
        res.json({data: userList})
    } catch(err) {
        logger.error(`User Controller: ${err.message || err}`);
        next(createError(404, "Cant get user"));
    }
};

module.exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params;
        const { first_name, last_name } = req.body;
        const userList = await UserModel.udpate({ first_name, last_name });
        res.json({data: userList})
    } catch(err) {
        logger.error(`User Controller: ${err.message || err}`);
        next(createError(404, "Cant get user"));
    }
};