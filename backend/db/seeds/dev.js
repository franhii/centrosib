const crypto = require('crypto');
const bcrypt = require('bcrypt');

const tableNames = require('../../src/libs/tableNames');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async (knex) => {
  // Deletes all previous inserts
  await Promise.all(Object.keys(tableNames).map((name) => knex(name).del()));

  const password = crypto.randomBytes(15).toString('hex');

  const patient = {
    first_name: 'Diego',
    last_name: 'Scardulla',
    phone_number: '585043',
    email: 'diego.scardulla@outlook.com',
    password: 'Hello123!',
  };

  const [createdUser] = await knex(tableNames.patient)
    .insert(patient)
    .returning('*');
  console.log(
    'Uer created:',
    {
      password,
    },
    createdUser
  );

  //Deletes all existing entries
  await knex('doctor').del();

  // Insert New entries
  await knex('doctor').insert([
    {
      id: 1,
      first_name: 'Juan',
      last_name: 'Lopez',
      professional_statement: 'El mejor doctor',
      image_url: '../../assets/juan.jpg',
    },
    {
      id: 2,
      first_name: 'Rodrigo',
      last_name: 'Rodriguez',
      professional_statement: 'Otro buen doctor ✌ ☝ 🤚 👌 👍',
      image_url: '../../assets/rodrigo.jpg',
    },
  ]);

  await knex('specialization').del();
  await knex('specialization').insert([
    {
      id: 1,
      specialization_name: 'Odontología General',
    },
    {
      id: 2,
      specialization_name: 'Ortodoncia',
    },
    {
      id: 3,
      specialization_name: 'Implantes',
    },
    {
      id: 4,
      specialization_name: 'Estética',
    },
  ]);

  await knex('doctor_specialization').del();
  await knex('doctor_specialization').insert([
    {
      doctor_id: 1,
      specialization_id: 2,
    },
    {
      doctor_id: 1,
      specialization_id: 4,
    },
    {
      doctor_id: 2,
      specialization_id: 1,
    },
    {
      doctor_id: 2,
      specialization_id: 3,
    },
  ]);
};
