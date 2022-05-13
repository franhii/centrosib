const dbSetup = require("./db/db-setup");
const express = require("express");
const Doctor = require("./models/doctor");

dbSetup();

const app = express();
const PORT = 3003;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(express.json());

app.get("/doctor/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.query()
      .findById(id)
      .withGraphFetched("specialization");
    res.json(doctor);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
