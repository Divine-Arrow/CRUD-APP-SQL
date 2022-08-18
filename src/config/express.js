const express = require("express");
const morgan = require("morgan");

const userRoute = require("../api/routes/user.route");
const Error = require("../api/middleware/error.handler");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", userRoute);

// to handle the * aka 404 routes
app.use(Error.notFound);

// Error Handling
app.use(Error.handler);

module.exports = app;