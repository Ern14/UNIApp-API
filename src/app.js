import express from 'express';
import config from './config';
import routes from './Routes/Routes'

const secretKey = require('./Settings/Keys');

const app = express();

const cors = require('cors');

app.use(cors());
//Configuración del puerto
app.set('port', config.port);
app.set('key',secretKey.key)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

export default app;
