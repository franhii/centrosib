const dbSetup = require("./api/db/db-setup");
const express = require("express");
const router = require("./api/routes");

const PORT = process.env.PORT || 3003;
const app = express();
// Making the Assets folder public so we can access the images
app.use('/assets', express.static(__dirname + '/assets'));

dbSetup();
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
