const express = require("express");

const doctorsRouter = require("./doctors");
const router = express.Router();

router.use("/api/v1/doctors", doctorsRouter);

module.exports = router;
