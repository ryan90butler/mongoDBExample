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

const userModel = mongoose.model('Users', userSchema);

app.post(`/api/newUser`, (req, res)=>{
  const me = new userModel({
    name: "Ryan",
    age: 27,
    height: "6 0",
    abc: `I'm an example that the key names don't matter`,
    array: ['superman', 'batman']
  })
  me.save((err)=>{
    if(err){
      console.log(err)
    }
  });
  res.send('this worked');
})


const port = process.env.PORT || 5050;
app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})