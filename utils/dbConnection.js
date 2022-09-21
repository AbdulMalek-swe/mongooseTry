
const mongoose = require("mongoose");
exports.db = () => {
    mongoose
        .connect(process.env.DB_CONNECTION)
        .then(res=>console.log('data base connected on server'.red.bold))
        .catch(error=>console.log(error.message))  
    }
