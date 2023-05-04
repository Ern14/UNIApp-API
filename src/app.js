import express from 'express';

const app = express();
let port;

//Configuración del puerto
app.set('port', port || 3000);

export default app;