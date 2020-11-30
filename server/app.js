require('dotenv').config()
require('./data/charts')

const mongoose = require ('mongoose')
// const MarioChar = require('./models/mariochar')
const chartData = require('./models/chartData')
const chartRouter = require('./chartRouter')

const cors =require('cors');


/////
const path = require('path');
const express = require('express');
// const favicon = require('express-favicon');

const app = express();
console.log('__dirname')
console.log(__dirname)

const buildPath = path.join(__dirname, '../client', 'build');
console.log('buildPath')
console.log(buildPath)

const port = process.env.PORT || 3000;

// app.use(favicon(buildPath + '/favicon.ico'));
app.use(express.static(buildPath));
app.use(cors());
app.use(chartRouter);

// app.use(express.json({limit:"50mb"}));

// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });

app.get('/*', function (req, res) {
  // app.get('*', function (req, res) {
    // app.get('/', function (req, res) {    
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => console.log(`server is up on port ${port}...`));
///////////
// 

try {
const uri = process.env.ATLAS_URI;
console.log('uri')
console.log(uri)
    mongoose.connect(uri, { useNewUrlParser: true });
} catch (error) {
    console.log('initial connection error')
 
    console.log(error)
    handleError(error);
  }
  
mongoose.connection.once('open', function(){
    console.log('connection made')
 })

mongoose.connection.on('error', err => {
  logError(err);
});





async function getData(){
    console.log('getData 1604')
     let result = await chartData.find({});
    console.log('result db')

    console.log(result)
    }
    
    getData()
    

