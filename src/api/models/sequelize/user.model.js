const { DataTypes } = require("sequelize");
const { db: seqDb } = require("../../../config/database");

const User = seqDb.define('User', {
        /* user_id: {
            type: DataTypes.INTEGER,
            primary: true,
            auto_increment: true,
            allowNull: false
        }, */
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
);

User.sync();

module.exports = User