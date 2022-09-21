const Tour = require("../models/TourSchema");

exports.getToursService = async (query) =>{
    const result = await Tour.find({}).skip().limit(5).select(query).sort('price')
    
     return result;
}

exports.createToursService = async (data) =>{
    const result = await Tour(data).save();
     console.log('thisi si service i create so i am happy');
     return result;
}