const express = require('express')
const mongoose = require('mongoose')
const reg = require('./routes/regRoute');
const login = require('./routes/loginRoute');
const adminRoutes = require('./routes/adminRoute');
require('dotenv').config()
// console.log(reg)
// console.log(login)
const app = express();


process.env.JWT_SECRET;

app.use('/admin', adminRoutes);


app.use(express.json());
app.use(reg);
app.use(login);
const url = `mongodb+srv://rahul:rahul@cluster0.sdohe.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


const PORT = 3000;
 
app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
        console.log("Server listening on Port", PORT);
  })        