const app = require("./config/express");
const logger = require("./config/logger");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info(`Server started at PORT: ${PORT}`));