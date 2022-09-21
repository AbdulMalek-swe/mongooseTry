const colors = require('colors')
const dotenv = require('dotenv').config();
const { db } = require('./utils/dbConnection');
const app =require('./app');
 
const port = process.env.PORT || 8080;

  db();
  
    app.listen(port, () => {
        console.log(`server go on port number ${port}`.yellow)
    })
 
 