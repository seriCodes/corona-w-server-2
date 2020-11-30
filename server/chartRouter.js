const chartData = require('./models/chartData');
const MarioChar = require('./models/MarioChar');

 const express = require('express')
 const router = new express.Router()
console.log('chart router');

// var charts= new chartData({
//     name:"1224"
// })
// charts.save().then(function(){
//     console.log('success saved')
//     console.log(char.isNew==false)
// })
// console.log('chart router 2'); 

///middleware
const getAllChartsData = async (req, res, next) => {
    try {
        console.log('getAllChartsData')
        const data = await chartData.find({});
        res.body = data;
        next();
    } catch (e) {
        res.status(400).send(e.message)
        console.log('e.message')
    }
}

///router
router.get('/charts',getAllChartsData ,async (req, res) => {
    console.log('router homepage')
    console.log(res.body)

    res.status(200).send(res.body);
})

// MarioChar.remove({}, function(err) { 
//     console.log('collection removed') 
//  });


 module.exports = router

