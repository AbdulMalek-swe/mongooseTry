const Tour = require("../models/TourSchema");

exports.getToursService = async () =>{
    const result = await Tour.find({});
    
     return result;
}

exports.createToursService = async (data) =>{
    const result = await Tour(data).save();
     console.log('thisi si service i create so i am happy');
     return result;
}