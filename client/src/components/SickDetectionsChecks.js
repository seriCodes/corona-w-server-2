import React from 'react';
// import {CircleIconButtons} from './common/CircleIconButtons'

var echarts = require('echarts')
let fontFamily= "Open Sans Hebrew";
const labelFormatter=function (params) {
    let str= params.value
   //  (params.value+'').bold()
   if(params.value<0  ){
       // params.value*=-1;
       str*=-1;
       return str + '% '
   }

   return str

};
export const SickDetectionsChecks = () => {
    React.useEffect(()=>{
        var myChart= echarts.init(document.getElementById('sick-detection-chart')); 
        window.addEventListener('resize', ()=>{
            myChart.resize(); 
       });
       let options={
        xAxis: {
            type: 'category',
            data: ['1.1','2.1','3.1','4.1','5.1','6.1','7.1'],
            name: "תאריך",
            nameLocation :'middle',
            axisTick: 
            {
                show: false,
            },
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "top",
                lineHeight: 38,
                // padding: [17, 4, 3, 4],
                
            },
       
        },
        yAxis:[
        
        {
            interval:10000,
            min:0,
            type: 'value',
            scale: true,
            splitLine: {
                show: false
             },
             name: 'מספר בדיקות',
             nameLocation :'middle',
             nameTextStyle: {
                 fontFamily: fontFamily,
                 verticalAlign: "bottom",
                 // lineHeight: 38,
                 padding: [0, 0, 42, 0],
                 
             },
             axisLine:{
                 show:false,
             },
             axisTick:{
                show:false,

            }, 

 
        },
        // {
        //     type: 'category',

        // },
    ],

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
                type: 'none'
            },
            backgroundColor: 'white',            
            textStyle: {
                color: 'black',
                fontWeight:'bolder',
                fontFamily:fontFamily,
                
            },
     
        },
        series: [
            {
                stack:'a',
                 name: 'בדיקות',
                 type:'bar',
                 data: [19200, 40032, 20010, 30034, 18090, 30330, 43020].map(function (item,i) {
                     let dataObj={
                         value: item, 
                     };
                     
                     return  dataObj
                         
     
                 }), 
                 // data: [820, 932, 901, 934, 1290, 1330, 1320],
                 barWidth:'10',
                 itemStyle:{
                     normal: {
                         barBorderRadius: [15, 15, 0, 0] ,
                         color:'#00FFFF',
                     },
                 }, 
                 label:{
                 show:true,
                 position:'top',
                 color:'black',
     
             }
             },
        {
            // yAxisIndex: 1,

            show:false,
            stack:'a',
            name: 'מאומתים',
            type:'bar',
            // data: ['8%', "6%", 20010, 30034, 18090, 30330, 43020]
            
            // data: ['8%', "6%", "6%", "6%", "6%", "6%", "6%"]
            
            data: [-5, -7, -3, -2, -4, -1, -8].map(function (item,i) {
                let dataObj={
                    value: item, 
                };
                
                return  dataObj
                    

            }), 
           
            barWidth:'10',
            itemStyle:{
                normal: {
                    barBorderRadius: [15, 15, 0, 0] ,
                    color:'green',
                },
            }, 
            label:{
                // height:9,
                // width :7,
                padding: [3, 4],
            show:true,
            position:'top',
            color:'black',
            backgroundColor:'white',
            borderColor:'green',
            borderWidth:2,
            borderRadius:4,
            formatter:labelFormatter,

        }
        },
     
        ],
       };

       myChart.setOption({
        baseOption: { 
            ...options,
        },
        media: [
            {
                query: {
                    minWidth:2,
                }, 
                option: {   
                    ...options,
                    // backgroundColor: 'red',
    
                    grid:{
                        height:"50%",
                        width:'50%',
                        right:'58',
                        },
                   },
                },
            {
                query: {
                    minWidth:300,
                }, 
                option: {   
                    ...options,
                    // backgroundColor: 'yellow',
    
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
                    width:'57%',
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
    
        return (
            <div class="container detection-Chart-container " >
      
            <div class="upper-container">
            <span class="chart-title sub-title">בדיקות לאיתור נדבקים 
            </span>
                    </div>


                    <div class="middle-elenet">
        
                    <span class="text"> 
                    
                    {[<i class="fa fa-info-circle" aria-hidden="true"></i>, `הנתונים אינם כוללים מידע על בדיקות לאבחון החלמה
                    `]}</span>
                    </div>

          
                    <div class="container chart-container" id='sick-detection-chart'>
             </div>
                
            </div>
        )
    }
    
