const express = require('express');
const Patient = require('../../models/patients/patient');
const patientRouter = require('./patient');
const router = express.Router();

// Get all the doctors
router.get('/', async (req, res, next) => {
  try {
    const patient = await Patient.query().select(
      'id',
      'first_name',
      'last_name',
      'phone_number',
      'email',
      'created_at',
      'updated_at'
    );
    res.json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.use('/', patientRouter);

module.exports = router;
