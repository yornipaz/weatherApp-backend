const express = require('express');
const cors = require('cors');
const morgan= require('morgan');
const { dbConnection } = require('./helpers/db/config');
const routes = require('./routes/auth')
require('dotenv').config();


const app = express();
dbConnection();

app.use( cors() );
app.use( express.json() );
app.use(morgan('dev'))

app.use( '/api/auth',require('./routes/auth')  );


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});

