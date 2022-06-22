const express = require('express');
const router = express.Router();
const Patient = require('../../models/patients/patient');
const bcrypt = require('bcrypt');

// Get a single user
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const patient = await Patient.query().findById(id);
    res.json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
