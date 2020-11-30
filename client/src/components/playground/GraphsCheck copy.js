import React from 'react'
import {v1 as uuidv1} from "uuid";
// var Chart = require('chart.js');

var echarts = require('echarts')

export const EchartExp = (props) => {

    let chartId= uuidv1();
    let chartId2= uuidv1();
    let chartId3= uuidv1();

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
                   width:'80%',
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
   window.onresize = function() {
    myChart.resize();
  };
  

   myChart.setOption({
    baseOption: { // here defines base option
        // title: {...},
        // legend: {...},
        // series: [{...}, {...}, ...],
        ...options,
        backgroundColor: 'blue',
        grid:[{
            height:"20%",
            width:'10%',
            right:'60',

         //    left:210,
            
        },
     
     ],
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
                series : [
                    {
                        radius:"40%",

                    },
                ],
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
                series : [
                    {
                        radius:"30%",

                    },
                ],
            }
        },
        {                   // default with no rules,
            option: { 
                  // when all rules fail, use this option
                // legend: {...},
                ...options,
                grid:[{
                    height:"10%",
                    width:'10%',
                    right:'90',
        
                 //    left:210,
                    
                },
             
             ],
            }
        }
    ],


    

})

 
   })
   let options={
    visualMap: {
        // hide visualMap component; use lightness mapping only
        show: false,
        // mapping with min value at 80
        min: 80,
        // mapping with max value at 600
        max: 600,
        inRange: {
            // mapping lightness from 0 to 1
            //usefull if every iten in data is the same color but different value
            colorLightness: [0, 1]
        },
    },
    label: {
        show: false,
        // Text of labels.
        formatter:  'This is a normal label.',
        // formatter: ['This is a normal label.','bbb']
    },
    emphasis: {
        //emphasis=hover
        itemStyle: {
            // Color in emphasis state.
            color: 'blue'
        },
        label: {
            show: true,
            // Text in emphasis.
            formatter: 'This is a emphasis label.'
        },
    },

    series : [
        {
            name: 'Reference Page',
            type: 'pie',
            radius: '40%',
            data:[
                {
                value:490, name:'Searching Engine',
                itemStyle: {
                     color: 'yellow',
                    shadowBlur: 30,
                    shadowColor: 'rgba(244, 230, 210, 1.5)'
                },
                label: {
                    show: true,
                    // Text in emphasis.
                    formatter: 'specific no empha label.'
                },

                emphasis: {
                    //emphasis=hover
                    itemStyle: {
                        // Color in emphasis state.
                        color: 'black'
                    },
                    label: {
                        show: true,
                        // Text in emphasis.
                        formatter: 'specific label.'
                    },
            
                },
                },
 {value:345, name:'Direct',
 label: {
    show: true,
    // Text in emphasis.
    formatter: 'specific no empha 222.',
    // layout   :'vertical',
},

},
 {value:310, name:'Email'},
 {value:274, name:'Alliance Advertisement'},
 {value:235, name:'Video Advertisement'},

            ],
         
            itemStyle: {
                // shadow size
                // shadowBlur: 10,
                // // horizontal offset of shadow
                // shadowOffsetX: 0,
                // // vertical offset of shadow
                // shadowOffsetY: 30,
                // // shadow color
                // shadowColor: 'rgba(90, 120, 160, 1)'
            },
            emphasis: {
                shadowBlur: 0,
                shadowColor: 'rgba(90, 120, 160, 1)'
            },

            label: {
                textStyle: {
                    color: 'rgba(255, 100, 255, 0.9)'
                },
            },
            labelLine: {
                lineStyle: 
                {
                    // color: 'rgba(0, 0, 0, 1.3),'
                ///array doesn't work
                    // [ 'rgba(0, 0, 0, 1.3)','rgba(0, 255, 255, 1.3)','(255, 255, 255, 1.3)',],
                },
            },
            
        },
      
        
    ],
    backgroundColor: 'green',
    textStyle: {
        color: 'rgba(255, 255, 255, 2.3)'
    },
}

// console.log('options.series')
// // options.series[0].radius="10%"
// console.log(options.series[0].radius) 
       return (
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
       )
   }
   

export const GraphsCheck = () => {
    React.useEffect(()=>{
        var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {    
    type: 'line',

// The data for our dataset
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','test2'],
    // borderCapStyle:"square",

    datasets: [{
        label: 'My First dataset',
        backgroundColor: '#ffffff',
        borderColor: 'rgb(0, 99, 132)',
        data: [15, 10, 5, 2, 20, 30,0, 45]
    }]
},

// Configuration options go here
options: {}
});


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
        var myChart = new Chart(ctx, {
            type: 'bar',
            
            data: {
                labels: ['Red222', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'Blue',
                        'rgba(255, 206, 86,1)',
                        'Yellow',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'Purple',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 9,
                    barPercentage:1.3,
                }]
            },
            options: {
                // onHover:  dosome ,
                // onClick: ()=>dosome("chart onClick"),

                //onMouseout: ()=>dosome("chart onMouseout"), // XX

                // events: ['touchmove'],
                tooltips: {
                    // mode: 'y'
                },
        
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                        }
                    }]
                },
      
                
            }
        });
        
    })

    return (
        <div class="graphs-container2">
        
        <canvas id="myChartBar"></canvas>

         </div>
    )
}

