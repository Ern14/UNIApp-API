import app from "./app";
const cors = require('cors');

app.use(cors());

app.listen(app.get('port'));

console.log("Listening on port: ", app.get('port'));