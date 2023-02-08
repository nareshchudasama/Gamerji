const mongoose = require('mongoose');
// require('dotenv').config('../');
// const mongoUrl = process.env.MONGO_DATABASE_URL;

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/Users')
.then(()=>console.log('Successfully Connected'))
.catch((err)=>console.log(err))
