const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, (err)=>{
  if(err){
  console.log(err);
}else{
  console.log(`db is connected`)
}
})

const app = express();
app.use(helmet());
app.use(bodyParser.json());

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  height: String,
  abc: String,
  array: [String],
  dateAdded: {type: Date, default: Date.now}
})


const port = process.env.PORT || 5050;
app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})