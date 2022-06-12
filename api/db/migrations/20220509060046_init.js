const tableNames = require('./tableNames/tableNames')
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
		table
			.integer('doctor_id')
			.references('id')
			.inTable(tableNames.doctor)
			.notNullable()
			.onDelete('cascade');
		table
			.integer('specialization_id')
			.references('id')
			.inTable(tableNames.specialization)
			.notNullable()
			.onDelete('cascade');
		table.timestamps(true, true);
	});

	await knex.schema.createTable(tableNames.doctor_availability, (table) => {
		table.increments();
		table
			.integer('doctor_id')
			.references('id')
			.inTable(tableNames.doctor)
			.notNullable()
			.onDelete('cascade');
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
		table.integer('phone_number', 15).notNullable();
		table.string('email', 320).notNullable().unique();
		table.timestamps();
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
		table
			.integer('anamnesis_type_id')
			.references('id')
			.inTable(tableNames.anamnesis_type)
			.notNullable()
			.onDelete('cascade');
		table.timestamps(true, true);
	});

	await knex.schema.createTable(tableNames.anamnesis, (table) => {
		table.increments();
		table
			.integer('patient_id')
			.references('id')
			.inTable(tableNames.patient)
			.notNullable()
			.onDelete('cascade');
		table.string('notes', 1024);
		table.timestamps(true, true);
	});
	await knex.schema.createTable(tableNames.visit_anamnesis, (table) => {
		table.increments();
		table
			.integer('anamnesis_id')
			.references('id')
			.inTable(tableNames.anamnesis)
			.notNullable()
			.onDelete('cascade');
		table
			.integer('anamnesis_catalog_id')
			.references('id')
			.inTable(tableNames.anamnesis_catalog)
			.notNullable()
			.onDelete('cascade');
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
		table
			.integer('patient_id')
			.references('id')
			.inTable(tableNames.patient)
			.notNullable()
			.onDelete('cascade');
		table
			.integer('doctor_id')
			.references('id')
			.inTable(tableNames.doctor)
			.notNullable()
			.onDelete('cascade');
		table
			.integer('appointment_status_id')
			.references('id')
			.inTable(tableNames.appointment_status)
			.notNullable()
			.onDelete('cascade');
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
	await Promise.all([
		tableNames.anamnesis,
		tableNames.anamensis_type,
		tableNames.anamensis_catalog,
		tableNames.anamnesis_visit,
		tableNames.patient,
		tableNames.appointment,
		tableNames.appointment_status,
		tableNames.doctor,
		tableNames.doctor_specialization,
		tableNames.doctor_availability,
		tableNames.specialization
	])
	// //Drop anamnesis table ( Historial Médico)
	// await knex.schema.dropTable('visit_anamnesis');
	// await knex.schema.dropTable('anamnesis_catalog');
	// await knex.schema.dropTable('anamnesis_type');
	// await knex.schema.dropTable('anamnesis');
	//
	// // Drop table uppointment (Turnos)
	// await knex.schema.dropTable('appointment');
	// await knex.schema.dropTable('appointment_status');
	//
	// // Drop patient table
	// await knex.schema.dropTable('patient');
	//
	// // Drop doctor table
	// await knex.schema.dropTable('doctor_specialization');
	// await knex.schema.dropTable('doctor_availability');
	// await knex.schema.dropTable('specialization');
	// await knex.schema.dropTable('doctor');
};
