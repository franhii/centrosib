const dbSetup = require("./api/db/db-setup");
const express = require("express");
const router = require("./api/routes");
<<<<<<< HEAD
const multer = require('multer');
const PORT = process.env.PORT;
=======

const PORT = process.env.PORT || 3003;
const app = express();
// Making the Assets folder public so we can access the images
app.use('/assets', express.static(__dirname + '/assets'));
>>>>>>> ce0ac2b8eb71b9f7011a1dc0fa4cda72802340bb


//CONFIG DE LA DB(CREACION,ETC.)
dbSetup();
<<<<<<< HEAD

//CREATE EXPRESS APP
const app = express();
=======
>>>>>>> ce0ac2b8eb71b9f7011a1dc0fa4cda72802340bb
app.use(express.json());

// MIDDLEWARES


// ROUTES
app.use("/", router);



//SETTINGS
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

