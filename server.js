const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const port =process.env.PORT || 8080;

mongoose
.connect(process.env.connection_name)
.then(res=>console.log('connected success'))
.catch(err=>console.log(err.message))


const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String 
});
const Blog = mongoose.model('Blog', blogSchema);
app.get('/user',async(req,res)=>{
    res.json('server going on route /')
})
app.post('/user',async(req,res)=>{
     const name = {title:'abdul malek'}
    await Blog(name).save();
    res.json('complete')
})
app.listen(port,()=>{
    console.log(`server go on port number ${port}`.yellow)
})