import express from 'express';
import config from './config';
import usersRoutes from './routes/usuarios.routes';

const app = express();


//Configuración del puerto
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usersRoutes);

export default app;