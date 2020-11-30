const chartData = require('../models/chartData');
// const mongoose = require ('mongoose')


console.log('data ran')
const severeSick=[10 , 101, 130, 100, 140, 200]

new chartData({
    name:"severe-sick",
    data:severeSick,
    period: null,   
}).save().then(function(){
    console.log(char.isNew==false)
})



///
const breathAid=[5, 10, 20, 100, 240, 200]

  new chartData({
    name:"breath-aid",
    data:breathAid,
    period: null,   
}).save().then(function(){
    console.log('success saved')
    console.log(char.isNew==false)
})

let passedAway= [0, 10, 3, 5, 6,4,4,5,6,6,2,3,4,4,5,6,5,4,5,2,1,4,];

new chartData({
    name:"passed-away",
    data:passedAway,
    period: null,   
}).save().then(function(){
     console.log(char.isNew==false)
})
//
let dailyTests=[220, 1010, 1030, 10220, 14080, 20000]


new chartData({
    name:"daily-tests",
    data:dailyTests,
    period: null,   
}).save().then(function(){
     console.log(char.isNew==false)
})

new chartData({
    name:"dailyVerifiedTrend",
    data:[-5, -7, -4, 0, 1, -2,-2],
    period: null,   
}).save().then(function(){
     console.log(char.isNew==false)
})


new chartData({
    name:"severeSickWeekly",
    data:[433, 415, 403, 405, 386, 357,353],
    period: null,   
}).save().then(function(){
     console.log(char.isNew==false)
})

new chartData({
    name:"newVerifiedOutsideDangerZones",
    data:[216,517, 176,481,605,644,197],
    period: null,   
}).save().then(function(){
     console.log(char.isNew==false)
})
new chartData({
    name:"dataAccumulatedVerified", 
    period:{
        'all-data':[0,73800,80000,85000,90000,90200,95000,100000,150000,200000,],        
        'last-week':[73800,90000,90200,95000,177000,190000,200001],   
        'last-two-weeks':[59800,65000,70000,73000,73600,73800,80000,85000,90000,90200,95000,100000,150000,150001],     
        'last-month':[59800,65000,70000,73000,73600,73800,80000,85000,90000,90200,95000,100000,150000,150001,160001,165501,171501,179501,182501,182901,183101,183901,184101,187101,223101,263101,293101,303101],   
    }, 
}).save().then(function(){
     console.log(char.isNew==false)
})
new chartData({
    name:"dataNewRecovered", 
    period:{
        'all-data':[10,10000,30400,50100,85000,100200,103000,135210,146909,170000,],        
        'last-week':[0,550,750,100,700,120,200,],   
        'last-two-weeks':[160, 550,750,100,300,105,0,550,750,100,700,120,200,],     
        'last-month':[1600, 5500,7500,1000,3000,1005,0,5500,7500,1000,7000,1200,2000,1600, 5500,7500,1000,3000,1005,0,5500,7500,1000,7000,1200,2000,1200,2000],   
    }, 
}).save().then(function(){
     console.log(char.isNew==false)
})

new chartData({
    name:"dataNewVerified", 
    period:{
        'all-data':[555,1000,2400,2100,1500,1200,2000,5521,7699,9000,],    

        'last-week':[555,665,240,400,700,707,203,],   

        'last-two-weeks':[555,665,240,400,700,707,203,555,665,240,400,700,707,203,], 

        'last-month':[5550,6650,2400,4000,7000,7007,2003,5505,6065,2400,4000,7000,7007,2003,5550,6650,2400,4000,7000,7007,2003,5505,6065,2400,4000,7000,7007,2003,],   
    }, 
}).save().then(function(){
     console.log(char.isNew==false)
})


//////////////////
// chartData.remove({}, function(err) { 
//     console.log('collectifon remov2egfd') 
//  });

// export {severeSick, breathAid}