const dbSetup = require("./api/db/db-setup");
const express = require("express");
const router = require("./api/routes");

const PORT = process.env.PORT;

dbSetup();
const app = express();
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
