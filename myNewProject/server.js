const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
   
require('./server/routes/person.routes')(app); // This is new


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );
