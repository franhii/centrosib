const crypto = require('crypto');
const bcrypt = require('bcrypt');

const tableNames = require('../tableNames/tableNames');
const orderedTableNames = require('../tableNames/orderedTableNames');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async (knex) => {
  await Promise.all(Object.keys(tableNames).map((name) => knex(name).del()));

  const password = crypto.randomBytes(15).toString('hex');

  const patient = {
    first_name: 'Diego',
    last_name: 'Scardulla',
    phone_number: '585043',
    email: 'diego.scardulla@outlook.com',
    password: await bcrypt.hash(password, 12),
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
};
