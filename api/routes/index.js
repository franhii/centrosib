const express = require("express");

const doctorsRouter = require("./doctors");
const router = express.Router();

router.use("/api/v1/doctors", doctorsRouter);
router.use("/", (req, res) => {
	res.json({Estado: "Conectado papichurro"})
});

module.exports = router;
