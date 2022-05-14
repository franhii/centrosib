/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  //Deletes all existing entries
  await knex("doctor").del();

  // Insert New entries
  await knex("doctor").insert([
    {
      id: 1,
      first_name: "Juan",
      last_name: "Lopez",
      professional_statement: "El mejor doctor",
      image_url: "../../assets/juan.jpg",
    },
  ]);

  await knex("specialization").del();
  await knex("specialization").insert([
    {
      id: 1,
      specialization_name: "Odontología General",
    },
    {
      id: 2,
      specialization_name: "Ortodoncia",
    },
    {
      id: 3,
      specialization_name: "Implantes",
    },
    {
      id: 4,
      specialization_name: "Estética",
    },
  ]);

  await knex("doctor_specialization").del();
  await knex("doctor_specialization").insert([
    {
      doctor_id: 1,
      specialization_id: 2,
    },
    {
      doctor_id: 1,
      specialization_id: 4,
    },
  ]);
};
