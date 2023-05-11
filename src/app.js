import express from 'express';
import config from './config';
import Routes from './routes/users.routes';

const app = express();


//Configuración del puerto
app.set('port', config.port);
app.use(Routes);

export default app;