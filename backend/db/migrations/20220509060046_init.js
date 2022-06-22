const tableNames = require('../../src/libs/tableNames');
const { references } = require('../../src/libs/tableUtils');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async (knex) => {
  // Doctors tables
  await knex.schema.createTable(tableNames.doctor, (table) => {
    table.increments();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('professional_statement', 4000).notNullable();
    table.string('image_url', 255).notNullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable(tableNames.specialization, (table) => {
    table.increments();
    table.text('specialization_name', 100).notNullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable(tableNames.doctor_specialization, (table) => {
    table.increments();
    references(table, 'doctor');
    references(table, 'specialization');
    table.timestamps(true, true);
  });

  await knex.schema.createTable(tableNames.doctor_availability, (table) => {
    table.increments();
    references(table, 'doctor');
    table.string('day_of_the_week', 10).notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();
    table.string('is_available', 1).notNullable();
    table.string('reason_of_unavailability', 500);
    table.timestamps(true, true);
  });

  // Patient / User table
  await knex.schema.createTable(tableNames.patient, (table) => {
    table.increments();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('password', 255).notNullable();
    table.string('phone_number', 15);
    table.string('roles', 50).defaultTo('user');
    table.string('email', 320).notNullable().unique();
    table.timestamps(true, true);
  });

  // Historial médico
  await knex.schema.createTable(tableNames.anamnesis_type, (table) => {
    table.increments();
    table.string('type_name', 126).notNullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable(tableNames.anamnesis_catalog, (table) => {
    table.increments();
    table.string('catalog_name', 256).notNullable();
    references(table, 'anamnesis_type');
    table.timestamps(true, true);
  });

  await knex.schema.createTable(tableNames.anamnesis, (table) => {
    table.increments();
    references(table, 'patient');
    table.string('notes', 1024);
    table.timestamps(true, true);
  });
  await knex.schema.createTable(tableNames.anamnesis_visit, (table) => {
    table.increments();
    references(table, 'anamnesis');
    references(table, 'anamnesis_catalog');
    table.timestamps(true, true);
  });

  // Turnos
  //
  await knex.schema.createTable(tableNames.appointment_status, (table) => {
    table.increments();
    table.string('status', 20);
    table.timestamps(true, true);
  });

  await knex.schema.createTable(tableNames.appointment, (table) => {
    table.increments();
    references(table, 'patient');
    references(table, 'doctor');
    references(table, 'appointment_status');
    table.time('probable_start_time').notNullable();
    table.time('actual_end_time');
    table.date('appointment_taken_date').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.anamnesis_visit,
      tableNames.anamnesis_catalog,
      tableNames.anamnesis_type,
      tableNames.anamnesis,
      tableNames.appointment,
      tableNames.appointment_status,
      tableNames.patient,
      tableNames.doctor_specialization,
      tableNames.doctor_availability,
      tableNames.specialization,
      tableNames.doctor,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
};
