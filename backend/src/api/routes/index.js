const express = require('express');

const doctors = require('./doctors');
const patients = require('./patients');
const auth = require('../auth/auth.routes');
const router = express.Router();

router.use('/doctors', doctors);
router.use('/patients', patients);
router.use('/auth', auth);

module.exports = router;
