import express from 'express';
import config from './config';
import routes from './Routes/Routes'
import cookieParser from 'cookie-parser';

const secretKey = require('./Settings/Keys');

const app = express();

const cors = require('cors');


//Configuración del puerto
app.set('port', config.port);
app.set('key',secretKey.key)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api',routes);

export default app;
