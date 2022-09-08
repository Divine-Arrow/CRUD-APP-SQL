const express = require("express");

const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));
router.get("/temp/:userId", (req, res) => res.send("PARAM API HIT"));

module.exports = router;