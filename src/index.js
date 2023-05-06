import app from "./app";
import './database/connection.js';

app.listen(app.get('port'));

console.log("Listening on port: ", app.get('port'));