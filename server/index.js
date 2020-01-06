const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');

const connection = {
  hostname: 'localhost',
  port: 3000
}

const router = require ('./router');

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.listen(()=>console.log(`Server running at ${connection.hostname}:${connection.port}`));