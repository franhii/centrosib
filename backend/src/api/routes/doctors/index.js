const express = require('express');
const Doctor = require('../../models/doctors/doctor');
const doctorRouter = require('./doctor');
const router = express.Router();

// Get all the doctors
router.get('/', async (req, res, next) => {
  try {
    const doctor = await Doctor.query().withGraphFetched('[specialization]');
    res.json(doctor);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.use('/', doctorRouter);

module.exports = router;
