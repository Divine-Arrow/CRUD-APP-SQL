const Sequelize = require("sequelize");
const logger = require("./logger");

const sequelize = new Sequelize('first_sequelize', 'postgres', 'adminsss', {
    host: "localhost",
    dialect: "postgres"
});



module.exports.connect = () => {
    sequelize.authenticate()
    .then(res => logger.info("Connected to DB"))
    .catch(err => logger.error(`DB Error: ${err?.parent || "Error while connecting to DB"}`));
    
    const postgresClient = database.connect();
    return postgresClient;
}