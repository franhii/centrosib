const express = require('express');
const yup = require('yup');
const Patient = require('../models/patients/patient');
const bcrypt = require('bcrypt');
require('dotenv').config();

const jwt = require('../../libs/jwt');

const router = express.Router();
const errorMessages = {
  invalidLogin: 'Invalid login.',
  emailInUse: 'Email in use.',
};

const schema = yup.object().shape(
  {
    first_name: yup
      .string()
      .trim()
      .min(2)
      .required('Please enter a first name.'),
    last_name: yup.string().trim().min(2).required('Please enter a last name.'),
    email: yup.string().trim().email().required('Please enter an email.'),
    password: yup
      .string()
      .min(8)
      .max(100)
      .required('Please enter your password.')
      .matches(/[^A-Za-z0-9]/, 'Password must contain a special character.')
      .matches(/[A-Z]/, 'Password must contain an uppercase letter')
      .matches(/[a-z]/, 'Password must contain a lowercase letter')
      .matches(/[0-9]/, 'Password must contain a number'),
    phone_number: yup
      .string()
      .trim()
      .notRequired()
      .nullable()
      .matches(/^[0-9]*$/, 'Phone number must contain only numbers.')
      .when('phone_number', {
        is: (value) => value?.length,
        then: (rule) =>
          rule.min(8, 'Phone must have 8 characters minimun').max(15),
      }),
  },
  [['phone_number', 'phone_number']]
);
router.get('/refresh', async (req, res, next) => {
  const { email, first_name, last_name } = req.body;
  try {
    const user = await Patient.query().where({ email });
    if (!user) {
      const error = new Error('Invalid User');
      res.status(401);
      throw error;
    }
    const payload = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      roles: [user.role],
      email: user.email,
    };
    const refreshToken = await jwt.refresh(payload);
    res.json({
      payload,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
});
router.post('/signin', async (req, res, next) => {
  const { password, email } = req.body;
  try {
    await schema.validate({
      first_name: 'name',
      last_name: 'last_name',
      email,
      password,
    });

    const user = await Patient.query().where({ email }).first();
    if (!user) {
      const error = new Error(errorMessages.invalidLogin);
      res.status(401);
      throw error;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      const error = new Error(errorMessages.invalidLogin);
      res.status(401);
      throw error;
    }

    const payload = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email,
      roles: [user.role],
    };
    const token = await jwt.sign(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  const { first_name, last_name, password, email, phone_number } = req.body;
  try {
    const createUser = {
      first_name,
      last_name,
      password,
      email,
      phone_number,
    };

    await schema.validate(createUser, { abortEarly: false });
    const existingUser = await Patient.query().where({ email }).first();
    if (existingUser) {
      const error = new Error(errorMessages.emailInUse);
      res.status(403);
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const insertedUser = await Patient.query().insert({
      first_name,
      last_name,
      password: hashedPassword,
      email,
    });

    delete insertedUser.password;
    const payload = {
      id: insertedUser.id,
      first_name,
      last_name,
      email,
    };
    const token = await jwt.sign(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
