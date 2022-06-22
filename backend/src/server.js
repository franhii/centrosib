const dbSetup = require('./db');
const express = require('express');
const api = require('./api/routes');
const cors = require('cors');

const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const middlewares = require('./libs/middlewares');

const PORT = process.env.PORT || 3003;
const app = express();

//Middlewares
const allowedOrigins = ['http://127.0.0.1:3001', 'http://localhost:3001'];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.'));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());

// Making the Assets folder public so we can access the images
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.json({ Estado: 'Conectado' });
});

dbSetup();
app.use('/api/v1', api);

// Error handling middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
