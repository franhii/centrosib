const express = require('express');
const router = express.Router();
const Doctor = require('../../db/models/doctor');

// Get a single doctor
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.query()
      .findById(id)
      .withGraphFetched('[specialization, doctor_specialization]');
    res.json(doctor);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const doctor = await Doctor.query().insertGraph(req.body);
    res.json(doctor);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
