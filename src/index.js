const app = require("./config/express");
const logger = require("./config/logger");
const database = require("./config/database");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info(`Server started at PORT: ${PORT}`));