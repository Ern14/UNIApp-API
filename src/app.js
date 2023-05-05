import express from 'express';
import config from './config';

const app = express();
let port;

//Configuración del puerto
app.set('port', config.port);

export default app;