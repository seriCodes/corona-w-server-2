import React, {useState} from 'react';
import {Button} from './common/Button'
import {v1 as uuidv1} from "uuid";
import {toggleDisplayNone,addDisplayNoneToClassElements ,toggleAnimateArrowClass} from '../functions/reveal-elemnts';

let fontFamily= "Open Sans Hebrew";
var echarts = require('echarts')
 
// let dataAccumulatedVerified=[ ]
// let dataNewRecovered=[0,10000,30400,50100,85000,100200,103000,135210,146909,170000,];
let dataNewVerified=[555,1000,2400,2100,1500,1200,2000,5521,7699,9000,];

var chart
let firstData={
    timePeriod:'all-data',
    typeNewVerified:'bar',
    typeNewRecovery:'line',
    typeAccumulatedVerified:'line',
    defaultChart:'line',
    recoverdTitle:"מצטבר",
    recoveredAxis:0,
    recoveredBackground:"transparent",
    xAxisData: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'], 
    ////// add to seData
    dataAccumulatedVerified: [],
    
    dataNewRecovered:[],
    dataNewVerified:[],
    newPatientsYaxisMax:12000,
    minRightYAxis:0,
    stepSizeRightYAxis: 2400, 
    maxLeftYAxis:369000,
    minLeftYAxis:0,
    intervalAccumulatedYaxis: 75000, 
    intervalNewYaxis: 2400, 

}
var accumulatedVerifiedUpdater;
var dataNewRecoveredUpdater;
var dataNewVerifiedUpdater;

export const EpidemicChart = () => {
     // const [dataAccumulatedVerified, setAccumulatedVerified]=React.useState([])
    const [data,setData]= useState(firstData)
 
    React.useEffect(async ()=>{ 
        async function getCharts() {
            console.log('getCharts')
             let data = await fetch("http://localhost:3001/charts")
               let chartsArr = await data.json(); 
             return chartsArr;
          }
         let result= await getCharts()
         console.log(result)

         accumulatedVerifiedUpdater= result.find(element => element.name =='dataAccumulatedVerified') 

         dataNewRecoveredUpdater= result.find(element => element.name =='dataNewRecovered') 

         dataNewVerifiedUpdater= result.find(element => element.name =='dataNewVerified') 
//  console.log('accumulatedVerifiedUpdater')
//  console.log(accumulatedVerifiedUpdater) 

    // setAccumulatedVerified(accumulatedVerified)
    // accumulatedVerifiedUpdater=accumulatedVerifiedUpdater
    setData({...data,
        dataAccumulatedVerified:accumulatedVerifiedUpdater.period["all-data"],
        dataNewRecovered:dataNewRecoveredUpdater.period["all-data"],
        dataNewVerified:dataNewVerifiedUpdater.period["all-data"],
    })
    // severeSick= result.find(element => element.name =='severe-sick') 
 
    // setSevereSick(severeSick.data)
    // passedAway= result.find(element => element.name =='passed-away')
    // setPassedAway(passedAway.data)
    // dailyTests= result.find(element => element.name =='daily-tests')
    // console.log('dailyTests')
    // console.log(dailyTests)

    // setDailyTests(dailyTests.data)

 
},[])

// let a = dataAccumulatedVerified.period && dataAccumulatedVerified.period['all-data']
// console.log(a)

 
// console.log('data-state')

// console.log(data)

    React.useEffect(()=>{
 
        var myChart= echarts.init(document.getElementById('epidemicChart'));
        window.addEventListener('resize', ()=>{
            myChart.resize(); 
       });
   
       let options= { 
        legend: { 
            align :'right',
            // type: "scroll"
            right :15,
            selectedMode :false,
            textStyle:{
                fontFamily,
                padding:[0,-8,0,10]
            },
            icon:'circle',

          },

        tooltip: {
            trigger: 'axis',
            formatter: function(params, ticket, callback) {
                console.log('params epi')

                // console.log(params)
                // console.log('ticket')
                // console.log(ticket)
                // console.log('callback')
                // console.log(callback)

                var res=''
                 for (var i = 0, l = params.length; i < l; i++) {
                    console.log(params[i]['color'])

                    res +=`<span style="color:${params[i]['color']}">`+params[i].value  + ' ' +params[i].seriesName+'<br/> </span> ' ;
                }
                setTimeout(function() { 
                  callback(ticket, res); 
                }, 100)
                return 'loading';
            },
        axisPointer: {
                type: 'cross'
            },
            backgroundColor: 'white',            
            textStyle: {
                color: 'black',
                fontWeight:'bolder',
                fontFamily:fontFamily,
                
            },
        },
        axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: 'white',
                color:'black',
            },
        },
         xAxis: {
            type: 'category',
            data: data.xAxisData,
            name: "תאריך הבדיקה",
            nameLocation :'middle',
            axisTick: 
            {
                show: false,
            },
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "top",
                 padding: [17, 4, 3, 4],
                
            },
            axisLine:{
                onZero:true,
                onZeroAxisIndex:0,
                onZeroAxisIndex:1,
        },
         },
        yAxis:[
         {
 
            scale:true,
            type: 'value',
            scale: true,
            interval:75000,
            max:375000,
            min:0,//*for forcing the min label to display
             name: 'מספר מקרים מצטבר',
            nameLocation :'middle',
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "bottom",
                // lineHeight: 38,
                color:"",
                padding: [0, 0, 44, 0],
      },
            axisLine:{
                show:false,
            },
            axisTick:{
                show:false,

            },
            axisLabel:{
                color:'#00FFFF',
                showMinLabel:true,//*
            },
            splitLine:{
                // show:false,
                //  interval:'4',
            },
        },
        {
            splitLine:{
                // show:false,

                // interval:5,
           },
            type: 'value',
            scale: true,
            interval:data.intervalNewYaxis,
            max:data.newPatientsYaxisMax,
             name: 'מספר מקרים חדשים',
            // nameLocation :'end',
            // nameLocation :'start',
            nameLocation :'middle',
            // 

            nameTextStyle: {
                fontFamily: fontFamily,
                // verticalAlign: "bottom",
                verticalAlign:'top',
                // verticalAlign:'middle',
                // lineHeight: 28,
                padding: [44, 0, 0, 0],
            },
            axisLine:{
                show:false,
            },
            axisTick:{
                show:false,
            },
            axisLabel:{
                color:'rgb(53, 106, 69)',
            }
        },
            ],
            series: [
                { 
                    symbolSize:10,
                    symbol: 'circle',

            name: 'מאומתים מצטבר',
            data: data.dataAccumulatedVerified.map(function (item,i) {
                let dataObj={
                    value: item,
                }; 
                return  dataObj 
              }), 
            type: 'line',
            itemStyle:{
                color:'#00FFFF',
            },
            label:{
                // show:true,
                color:'',
            },
            areaStyle:{
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgb(0,206,209)' // color at 0% position
                    }, {
                        offset: 1, color:'rgba(360, 360, 360, 1)' // color at 100% position
                    }],
                    global: false // false by default
                }
            },
        },
    {
        name: `מאומתים חדשים`,
  
        yAxisIndex: 1,
        itemStyle:{
            normal: {
                barBorderRadius: [15, 15, 0, 0] ,
                color:'rgb(53, 106, 69)',         
               },
        }, 
        data: data.dataNewVerified.map(function (item,i) {
            console.log('item  data.dataNewVerified')

                console.log(item)
            let dataObj={
                value: item,
            }; 
            return  dataObj 
          }),
          type: 'bar',
          barWidth:'10',

    },
    /////////
    {
        symbolSize:10, 
        symbol: 'circle',
        type: data.typeNewRecovery,
        barWidth:'10',
        name: `מחלימים ${data.typeNewRecovery=="bar"?'חדשים':'מצטבר'}`,
        itemStyle:{
            normal: {
                barBorderRadius: [15, 15, 0, 0] ,
 
            color:'gray',
            },
        },
        yAxisIndex:data.recoveredAxis,

        data: data.dataNewRecovered.map(function (item,i) {
            let dataObj={
                value: item,
            }; 
            return  dataObj 
          }),

    },
],
        grid:{
            height:"30%",
            width:'60%',
            right:0,
            
        },
        
};
myChart.setOption({ 
    baseOption: { 
        ...options,
    },
    media: [
        {
            query: {
                minWidth:300,
            }, 
            option: {   
                ...options,
                // backgroundColor: 'red',

                grid:{
                    height:"50%",
                    width:'57%',
                    right:'58',
                    },
               },
            },
        {
        query: {
            minWidth:500,
        }, 
        option: {   
            ...options,
            // backgroundColor: 'blue',

            grid:{
                height:"50%",
                width:'67%',
                right:'90',
                },
        },
        },
        {
            query: {
                minWidth:600,
            }, 
            option: {   
                ...options,
                // backgroundColor: 'green',
                grid:{
                    height:"50%",
                    width:'70%',
                    right:'90',
                    },
            },
            },
        {
            query: {
                minWidth:700,
            }, 
            option: {   
                // backgroundColor: 'orange',
                ...options,
                grid:[{
                    height:"50%",
                    width:'72%',
                    right:'90',
                    },
            ],
            },
            },

        { 
            option: { 
                // backgroundColor: 'purple',

              grid:[{
                height:"50%",
                width:'100%',
                right:'20',
            },
        ],
          }
      }
    ],

})
  
})
    const changeDataPeriod=(e)=>{
        //  console.log(e.value)
console.log(accumulatedVerifiedUpdater)
        //  alert(e.value)
        // switch(e.target.value){
            switch(e){
    case 'all-data':
                // 
                setData({
                    timePeriod:'all-data',

                    newPatientsYaxisMax:12000,
                    typeNewVerified:'bar',
                    typeNewRecovery:'line',
               typeAccumulatedVerified:'line',
               recoverdTitle:"מצטבר",
               recoveredAxis:0,
                    barPercentage:0.23,
                recoveredBackground:"transparent",
                xLables: ['january', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'],
                dataAccumulatedVerified:accumulatedVerifiedUpdater.period["all-data"],
                dataNewRecovered:dataNewRecoveredUpdater.period["all-data"],
                dataNewVerified:dataNewVerifiedUpdater.period["all-data"],
                xAxisData: firstData.xAxisData,
                intervalNewYaxis:2400,
            })
                 break;
    case 'last-week':
                // 
                setData({
                    timePeriod:'last-week',

                    newPatientsYaxisMax:1100,
                    intervalNewYaxis:220,
                    typeNewVerified:'bar',
                    typeNewRecovery:'bar',
                    typeAccumulatedVerified:'line',
                    recoverdTitle:"חדשים",
                    recoveredAxis:1,

                    barPercentage:0.23,
                    recoveredBackground:"gray",
                    xLables: ['1', '2', '3', '4', '5', '6', '7',],

                    dataAccumulatedVerified:accumulatedVerifiedUpdater.period["last-week"],
                    dataNewRecovered:dataNewRecoveredUpdater.period["last-week"],
                    dataNewVerified:dataNewVerifiedUpdater.period["last-week"],
                    
                    maxRightYAxis:1200,
                    minRightYAxis:0,
                    stepSizeRightYAxis: 240,
            
                    maxLeftYAxis:369000,
                    minLeftYAxis:0,
                    stepSizeLeftYAxis: 73800,
                    xAxisData:['1.1','2.1','3.1','4.1','5.1','6.1','7.1'],
                })
                console.log('last-week')

                break;
    case 'last-two-weeks':
        setData({
            timePeriod:'last-two-weeks',

            newPatientsYaxisMax:1200,

            intervalNewYaxis:240,

            typeNewVerified:'bar',
            typeNewRecovery:'bar',
            typeAccumulatedVerified:'line',
            recoverdTitle:"חדשים",
            recoveredAxis:1,
            recoveredBackground:"gray",

            barPercentage:0.23,
            xLables: ['1', '2', '3', '4', '5', '6', '7','8','9', '10','11','12', '13','14'],

            dataAccumulatedVerified:accumulatedVerifiedUpdater.period["last-two-weeks"],
            dataNewRecovered:dataNewRecoveredUpdater.period["last-two-weeks"],

            dataNewVerified:dataNewVerifiedUpdater.period["last-two-weeks"],
            
            maxRightYAxis:1900,
            minRightYAxis:0,
            stepSizeRightYAxis: 380,

            maxLeftYAxis:369000,
            minLeftYAxis:0,
            stepSizeLeftYAxis: 73800,
            xAxisData:['1.1','2.1','3.1','4.1','5.1','6.1','7.1','8.1','9.1','10.1','11.1','12.1','13.1','14.1'],
        })
        // console.log('last-two-weeks')

        break;
    case 'last-month':
        setData({
            timePeriod:'last-month',

            newPatientsYaxisMax:4700,

            intervalNewYaxis:940,

            typeNewVerified:'bar',
            typeNewRecovery:'bar',
            typeAccumulatedVerified:'line',
            recoverdTitle:"חדשים",
            recoveredAxis:1,
            recoveredBackground:"gray",
            xLables: ['1', '2', '3', '4', '5', '6', '7','8','9', '10','11','12', '13','14','15', '16', '17', '18', '19', '20', '21','22','23', '24','25','26', '27','28'],

            dataAccumulatedVerified:accumulatedVerifiedUpdater.period["last-month"],
            dataNewRecovered:dataNewRecoveredUpdater.period["last-month"],

 dataNewVerified:dataNewVerifiedUpdater.period["last-month"],
            
            maxRightYAxis:9700,
            minRightYAxis:0,
            stepSizeRightYAxis: 1940,

            maxLeftYAxis:370000,
            minLeftYAxis:0,
            stepSizeLeftYAxis: 74000,

            xAxisData:['1.1','2.1','3.1','4.1','5.1','6.1','7.1','8.1','9.1','10.1','11.1','12.1','13.1','14.1','15.1','16.1','17.1','18.1','19.1','20.1','21.1','22.1','23.1','24.1','25.1','26.1','27.1','28.1'],
        
        })
        console.log('last-month')

        break;

    default:
        alert('cant be here')
        }
        
        }
 let arrowId=uuidv1()
 let optionsContainerId=uuidv1()

     return (
        <div class="container epidemic-container">
        <div class="upper-container">
        <span class="chart-title sub-title">עקומה אפידמית  
        </span> 
      
        <div class='options-button-container'>
        <Button 
        callBack={(e)=>{
            // let arrowContainer=document.getElementById(arrowId)
            toggleAnimateArrowClass(arrowId)
            let elem= document.getElementById(optionsContainerId)
            console.log(elem.classList.contains(`display-none`))
            if(!elem.classList.contains(`display-none`)){
             elem.classList.add(`display-none`)

             return
            } 
            addDisplayNoneToClassElements('options-container')
 
            elem.classList.remove(`display-none`)
 
        }} class1='selector-button-container prevent-propagation'>
<div class="selector-button-container-items">
        <span class='selector-button-text'>
        {
data.timePeriod=='all-data'?"עד עכשיו":data.timePeriod=='last-week'?"שבוע אחרון":data.timePeriod=='last-two-weeks'?"שבועיים אחרונים":data.timePeriod=='last-month'?"חודש אחרון":"error"
                      
           }
        </span> 

        <div id={arrowId} class=' selector-button-icon'>
        <span class="arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"></rect><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"></path></g></g></svg>
        
        </span>
        
        </div>
        </div>
        </Button>

        
        <div id={optionsContainerId} class='options-container display-none'>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("all-data")
    }}  value={"all-data"}>עד עכשיו
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("last-week")}} value={"last-week"}>שבוע אחרון
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("last-two-weeks")}}  value={"last-two-weeks"}>שבועיים אחרונים
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("last-month")}} 
            value={"last-month"}>חודש אחרון
        </Button>
        </div>
     
        </div>
      
        </div>
        <div class="middle-elenet">
        
        <span class="text"> 
        
        {[<i class="fa fa-info-circle" aria-hidden="true"></i>, `הנתונים אינם מספר הנדבקים היום הינו כפול מהמספר לפני 47 ימים
        `]}</span>
        </div>

        <div id="epidemicChart" class="container epidemic-chart-container chart-container">  
        </div>
        </div>

    )
}
