import express from 'express';
import config from './config';
import routes from './Routes/Routes'

const app = express();

const cors = require('cors');

app.use(cors());
//Configuración del puerto
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

export default app;