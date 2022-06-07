const dbSetup = require("./api/db/db-setup");
const express = require("express");
const router = require("./api/routes");
const multer = require('multer');
const PORT = process.env.PORT;


//CONFIG DE LA DB(CREACION,ETC.)
dbSetup();

//CREATE EXPRESS APP
const app = express();
app.use(express.json());

// MIDDLEWARES


// ROUTES
app.use("/", router);



//SETTINGS
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

