import React, {useEffect} from 'react'
import {Button} from './common/Button'
import {postitionPopUpInsideviewport,addDisplayNoneToClassElements } from '../functions/reveal-elemnts';
import {v1 as uuidv1} from "uuid";
import * as Drop from 'tether-drop';

var withinviewport = require('withinviewport');


let fontFamily= "Open Sans Hebrew";
 
export const DailyTrend = (props) => {
    let trendLineTarget= uuidv1(); 

    let trendLineChart= uuidv1(); 

//     window.addEventListener('click',(e)=> {
//         addDisplayNoneToClassElements('daily-trend-Line-Chart-container')
// })
// console.log('props.data11') 
// console.log(props.data)

window.addEventListener('DOMContentLoaded', (event) => { 
try {
//     console.log('object trendLineTarget trendLineTarget')

// console.log("drop-target", document.querySelector(`.drop-target.${trendLineTarget}`))
// console.log(document.querySelector(`.drop-content.${trendLineChart}`))
/* drop content might apear unwillingly ithout explanation. eliminated it without explanation */
let dropInstance
 = new Drop({
target: document.getElementById(trendLineTarget),
content:document.getElementById(trendLineChart),

// content:document.querySelector(`.drop-content#${trendLineChart}`),
classes: 'drop-theme-arrows',
// position:'top right',
position:'top center',
constrainToWindow:true,
classes:"",
openOn: 'click',
remove:true,//essential to close the dropdown!!!
})
} catch (error) {
console.log('error thrown in tether drop',error)
}
});


    return (
        <div class="daily-trend-container">
    
        <div class={`drop-target ${trendLineTarget}`} id={trendLineTarget}>
            <span class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="eva eva-bar-chart-2" fill="currentColor"><g data-name="Layer 2"><g data-name="bar-chart-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect><path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"></path><path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"></path><path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"></path></g></g></svg> </span>
            <span>מגמת שינוי יומית</span>

            </div>


<DailyTrendLineChart data={props.data} id={trendLineChart}></DailyTrendLineChart>
        </div>
    )
}

var echarts = require('echarts')


export const DailyTrendLineChart = (props) => {
 
let seriesName, minInterval, xAxisData,title,yAxisTitle,seriesData
({minInterval,xAxisData,title,yAxisTitle,seriesData,seriesName,}=props.data
);
let chartId= uuidv1();
 
    React.useEffect(()=>{

     var myChart= echarts.init(document.getElementById(chartId));
     window.addEventListener('resize', ()=>{
         myChart.resize(); 
    });
   
       let options= { 
        tooltip: {
            trigger: 'axis',
            formatter: function(params, ticket, callback) {
                // console.log('params')

                // console.log(params)
                // console.log('ticket')
                // console.log(ticket)
                // console.log('callback')
                // console.log(callback)

                var res=''
                 for (var i = 0, l = params.length; i < l; i++) {
                    res +=params[i].value  + ' ' +params[i].seriesName ;
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
                color: '#00FFFF',
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
            data: xAxisData,
            name: "תאריך",
            nameLocation :'middle',
            axisTick: 
            {
                show: false,
            },
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "top",
                // lineHeight: 38,
                padding: [17, 4, 3, 4],
                
            },
        },
        yAxis: {
            type: 'value',
            scale: true,

            minInterval:minInterval, 
            name: yAxisTitle,
            nameLocation :'middle',
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "bottom",
                // lineHeight: 38,
                padding: [0, 0, 23, 0],
                
            },
            axisLine:{
                show:false,
            },
            axisTick:{
                show:false,

            }

        },
        series: [{ 
            name: seriesName,
            data: seriesData.map(function (item,i) {
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
                color:' ',
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
        }],
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
                    minWidth:450,
                }, 
                option: {   
                    ...options,
                    grid:[{
                        height:"50%",
                        width:'70%',
                        right:'20',
                        },
                ],
                },
                },
            {
            query: {
                minWidth:600,
            }, 
            option: {   
                ...options,
                grid:[{
                    height:"50%",
                    width:'60%',
                    right:'20',
                    },
            ],
            },
            },
            {
                query: {
                    minWidth:700,
                }, 
                option: {   
                    ...options,
                    grid:[{
                        height:"50%",
                        width:'35%',
                        right:'20',
                        },
                ],
                },
                },

            { 
                option: { 
 
                  grid:[{
                    height:"50%",
                    width:'50%',
                    right:'20',
                },
            ],
              }
          }
        ],

     }
         

 );   
})

    return (
        <div onClick={(e)=>{e.stopPropagation()}} class={`container daily-trend-Line-Chart-container  ${props.id}`} id={props.id}>
  
        <div class="upper-container">
        <span class="chart-title sub-title">מגמת שינוי יומית - {title}
        </span>
                </div>
        <div class="container">

        <div id={chartId} class="daily-trend-chart" 
        ></div>
 


        </div>
            
        </div>
    )
}
// style={{width:'100px', height:'100px',}} 
