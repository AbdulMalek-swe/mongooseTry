const  mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name : {
        type:String,
        trim:true,
        require:[true,'please provide name'],
        unique:[true,'must be unique'],
        minLength:[5,'name must be 5 length'],
        maxLength:[50,'name not more than 50 letter']
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number, 
        require:true,
        min:[1,'minimum price 1']
    },
    image:{
        type:String,
        require:true
    },
    status:{
       type:String,
       required:true,
       enum:{
        values:['available','not-available'],
        message:"can not get  {VALUE}"
       }
    }
},{
    timestamps:true
})
const Tour=new mongoose.model('Tour',tourSchema);
module.exports =  Tour;