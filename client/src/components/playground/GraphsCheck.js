import React from 'react'
import {v1 as uuidv1} from "uuid";
// var Chart = require('chart.js');

var echarts = require('echarts')

export const EchartExp = (props) => {

    let chartId= uuidv1();
    let chartId2= uuidv1();
    let chartId3= uuidv1();
    let options= { 
        axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: 'white',
                color:'black',
            },
        },
    
        xAxis: {
            type: 'category',
            data: ["1.4","2.4","3.4","4.4","5.4","6.4","7.4"],
            name: "תאריך",
            nameLocation :'middle',
            axisTick: 
            {
                show: false,
            },
            // splitLine: {
            //     show: true
            //  },
       
            nameTextStyle: {
                // fontFamily: fontFamily,
                verticalAlign: "top",
                // lineHeight: 38,
                padding: [17, 4, 3, 4],
                
            },
        },
        yAxis: {
            interval:9,
            min:9,
            type: 'value',
            scale: true,
            splitLine: {
                show: false
             },
       
            // minInterval:minInterval, 
            // name: yAxesTitle,
            nameLocation :'middle',
            nameTextStyle: {
                // fontFamily: fontFamily,
                verticalAlign: "bottom",
                // lineHeight: 38,
                padding: [0, 0, 23, 0],
                
            },
            axisLine:{
                show:false,
            },
            axisLabel: {
                show:true,
                formatter:null, 
              },
            
            axisTick:{
                show:false,
    
            }, 
           },
        series: [{ 
            name: 'seriesName',
            data: [-8, -7, -4, 0, 1, -2,-2].map(function (item,i) {
                let dataObj={
                    value: item, 
                };
                
                return  dataObj
                    
    
            }), 
            barWidth:'10',
            // ...markLine,
            
            type: 'line',
            itemStyle:{
                 normal: {
                    // color:chartColor,
                    barBorderRadius: [15, 15, 0, 0] ,
                    label : {
                        position:'top',
                        show: true,
                        color:'black',
                        // formatter:lineLabelFormatter,
                 
                    },
                },
            },
            label:{
                // show:true,
                color:' ',
            },
            areaStyle:{
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    // colorStops: [areaStyleColorStop1, areaStyleColorStop2],
                    global: false // false by default
                }
            },
        }],
       }
     
       React.useEffect(()=>{
   
           echarts.init(document.getElementById(chartId)).setOption({
               xAxis: {
                   type: 'category',
                   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
               },
               yAxis: {
                   type: 'value'
               },
               
               series: [{
                   data: [{name:"test",
                   value:55,
                   label: {
                    show: true,
                    // Text in emphasis.
                    formatter: 'specific no empha 222.',
                    // layout   :'vertical',
                },
                   
                   
                   }, 932, 901, 934, 1290, 1330, 1320],
                   type: 'line'
               }],
               grid:[{
                   height:"40%",
                   width:'50%',
                   right:'90',

                //    left:210,
                   
               },
            
            ],
    });  
   /////
   
   
   var myChart = echarts.init(document.getElementById(chartId2),'light' );
   
   // specify chart configuration item and data
//    var option = {
//        title: {
//            text: 'ECharts entry example'
//        },
//        tooltip: {},
//        legend: {
//            data:['Sales']
//        },
//        xAxis: {
//            data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
//        },
//        yAxis: {},
//        series: [{
//            name: 'Sales',
//            type: 'bar',
//            data: [5, 20, 36, 10, 10, 20]
//        }] 
   
//    };
//    myChart.setOption(option);
   ///////////////
   window.addEventListener('resize', ()=>{
    console.log('checks  AA addEventListener')
    myChart.resize();

});
   window.onresize = function() {
    console.log('checks AAA onresize A')

  };
  

   myChart.setOption({
    baseOption: { // here defines base option
        // title: {...},
        // legend: {...},
        // series: [{...}, {...}, ...],
        ...options,
        backgroundColor: 'blue',

    },

    media: [ // each rule of media query is defined here
        {
            query: {
                minWidth:200,
            },   // write rule here
            option: {       
                // write options accordingly
                // legend: {...},
                ...options,
                // options.series[0].radius='10%',
                series : [ {}, ],
                grid: {
                    height:"230px",
                    width:'150px',
                    right:'',
                }, 
                backgroundColor: 'red', 

            }
        },
        {
            query: {
                minWidth:499,
            },   // the second rule
            option: {       // the second option
                // legend: {...},
                ...options,
                backgroundColor: 'blue',
                series : [{},  ],
                grid:{
                    height:"388px",
                    width:'60px',
                    right:'60',
        
                 //    left:210,
                    
                },
            }
        },
        {                   // default with no rules,
            option: { 
                  // when all rules fail, use this option
                // legend: {...},
                ...options,
                grid:[{
                    height:"50px",
                    width:'50px',
                    right:'90',
        
                 //    left:210,
                    
                },
             
             ],
            }
        }
    ],


    

})
let xAxisData= ["1.4","2.4","3.4","4.4","5.4","6.4","7.4"]


   })

   
// console.log('options.series')
// // options.series[0].radius="10%"
// console.log(options.series[0].radius) 
       return (
           <div>
           <div onClick={(e)=>{e.stopPropagation()}} class="container   " id='exapampleEchart1'>
     
           <div class="upper-container">
           <span class="chart-title sub-title">כותרת גרף מהפרופס
           </span>
                   </div>
           <div class="">
   
           <div id={chartId} 
           style={{width:'500px', height:'600px',}} ></div>
   
           <div id={chartId2} class="echartExp"
           ></div>
   
   
           </div>
               
           </div>
       
                <div onClick={(e)=>{e.stopPropagation()}} class="container   " id='exapampleEchart1'>
     
           <div class="upper-container">
           <span class="chart-title sub-title">כותרת גרף מהפרופס
           </span>
                   </div>
           <div class="">
   
           <div id={chartId} 
           style={{width:'500px', height:'600px',}} ></div>
   
           <div id={chartId2} class="echartExp"
           ></div>
   
   
           </div>
               
           </div>
       
           
           </div>
           )
   }
   

export const GraphsCheck = () => {
    React.useEffect(()=>{
        var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {    
//     type: 'line',

// // The data for our dataset
// data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','test2'],
//     // borderCapStyle:"square",

//     datasets: [{
//         label: 'My First dataset',
//         backgroundColor: '#ffffff',
//         borderColor: 'rgb(0, 99, 132)',
//         data: [15, 10, 5, 2, 20, 30,0, 45]
//     }]
// },

// // Configuration options go here
// options: {}
// });


    })
    return (
        <div class="graphs-container">
        
        <canvas id="myChart"></canvas>

         </div>
    )
}

 
export const GraphsCheckBars = () => {
    const dosome= (a)=>{
        alert("aa " +a)
    }
    React.useEffect(()=>{
        var ctx = document.getElementById('myChartBar');
        // var myChart = new Chart(ctx, {
        //     type: 'bar',
            
        //     data: {
        //         labels: ['Red222', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'Blue',
        //                 'rgba(255, 206, 86,1)',
        //                 'Yellow',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'Purple',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 9,
        //             barPercentage:1.3,
        //         }]
        //     },
        //     options: {
        //         // onHover:  dosome ,
        //         // onClick: ()=>dosome("chart onClick"),

        //         //onMouseout: ()=>dosome("chart onMouseout"), // XX

        //         // events: ['touchmove'],
        //         tooltips: {
        //             // mode: 'y'
        //         },
        
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: false,
        //                 }
        //             }]
        //         },
      
                
        //     }
        // });
        
    })

    return (
        <div class="graphs-container2">
        
        <canvas id="myChartBar"></canvas>

         </div>
    )
}

