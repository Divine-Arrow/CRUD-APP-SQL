const { DataTypes, Sequelize } = require("sequelize");

const User = Sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
// Other model options go here
});

User.sync();

module.exports = {
    User
}