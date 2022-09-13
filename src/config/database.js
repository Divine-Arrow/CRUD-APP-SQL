const Sequelize = require("sequelize");
const logger = require("./logger");

const db = new Sequelize('localdb', 'postgres', 'admin', {
    host: "localhost",
    dialect: "postgres"
});

module.exports = { 
    db,
    connect: () => {
        db.authenticate()
        .then(res => logger.info("Connected to DB" ))
        .catch(err => logger.error(`DB Error: ${err?.parent || "Error while connecting to DB"}`));
    }
};