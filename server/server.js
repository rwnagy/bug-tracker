const express = require('express');
const router = require('express').Router();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000; 
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

var dev_db_url = "mongodb+srv://Login:Password@cluster0.cnkxz.mongodb.net/bug-tracker?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connected");
})


const bugsRouter = require('./routes/bugs');
const devsRouter = require('./routes/devs');
const prioRouter = require('./routes/prio');


app.use('/bugs', bugsRouter);
app.use('/devs', devsRouter);
app.use('/prio', prioRouter);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});