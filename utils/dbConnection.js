
const mongoose = require("mongoose");
exports.db = () => {
    mongoose
        .connect(process.env.MONGO_CONNECTION_STRING)
        .then(res=>console.log('data base connected on server'.red.bold))
        .catch(error=>console.log(error.message))  
    }
