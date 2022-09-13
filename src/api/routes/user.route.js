const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/status", (req, res) => res.sendStatus("OK"));
router.get("/temp/:userId", (req, res) => res.sendStatus("PARAM API HIT"));

router.get("/user/:userId", userController.getUser);
router.post("/user", userController.registerUser);
// router.patch("/user/:userId", userController.updaterUser);

module.exports = router;