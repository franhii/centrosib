const express = require("express");

const doctorRouter = require("./doctor");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(["Doctores"]);
});

router.use("/", doctorRouter);

module.exports = router;
