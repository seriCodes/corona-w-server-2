import React, {useEffect} from 'react'
import {v1 as uuidv1} from "uuid";

var echarts = require('echarts')
let fontFamily= "Open Sans Hebrew";
 const weeklyPercentLineLabelFormatter=function (params) {
     let str= params.value
    //  (params.value+'').bold()
    if(params.value<0  ){
        // params.value*=-1;
        return str + '% \n(דעיכה)'
    }

    return str+ '%\n(ימים להכפלה)'

};
// const sickNumberLabelFormatter=9;
// // 

const severeSickYAxisLabelFormatter=function (value, index) {




    if(value<0){
       value*=-1;
        return '%'+ (value) + '-'
    }
    let a= '-'+value
    console.log('formatter')

    console.log(a)
    return value+ '%' 

};
const markLineNewNumberVerified= {
    markLine: {
        symbol: 'none',//removes arrow
        label: {
            
        },
    
       lineStyle:{
        color:'red',
    },
    // symbol:null,
    label:{
        color: 'white',
        backgroundColor: 'red',
            borderRadius: 2,
            padding: 4,
        position:'start',
    },
    data: [
        // {0:
             {
        yAxis:100
    }, 
        // },
],  
},
};

export const WeeklyExpandedIndexes = (props) => {
    const [dataVerifiedTrendWeekly, setDataVerifiedTrendWeekly]=React.useState([])
    const [dataSevereSickWeekly, setDataSevereSickWeekly]=React.useState([])
     const [dataVerifiedOutSevereZones, setdataVerifiedOutSevereZones]=React.useState([])

     React.useEffect(async ()=>{ 
        async function getCharts() {
            let data = await fetch("http://localhost:3001/charts")
            let chartsArr = await data.json(); 
            return chartsArr;

        }
        let result= await getCharts()

        setDataVerifiedTrendWeekly(result.find(element => element.name =='dailyVerifiedTrend').data)

        setDataSevereSickWeekly(result.find(element => element.name =='severeSickWeekly').data)

        setdataVerifiedOutSevereZones(result.find(element => element.name =='newVerifiedOutsideDangerZones').data)
 
    },[]     )
  
    let chartId1=uuidv1()
    let chartId2=uuidv1()
    let chartId3=uuidv1()
    let xAxisData= ["1.4","2.4","3.4","4.4","5.4","6.4","7.4"]
    return (
        <div class="weekly-expanded-indexes-container">
<div class="upper-weekly-container">
<div class="start flex-item ">

</div>
<div class="middle flex-item upper-weekly-headline">
מדדי התפשטות בהסתכלות שבועית

</div> 

<div class="ending flex-item">
<div class="container destination-line">

<div class="line-container destination-line">
<div class="line destination-line">
</div>

<div class="line destination-line">
</div>
</div>
<div class="square destination-line">
</div>יעדי ממשלה

</div>

</div>
</div>
<div class="bottom-weekly-container">
{}
<WeeklyChart 

yAxisLabelFormatter={severeSickYAxisLabelFormatter}
lineLabelFormatter={weeklyPercentLineLabelFormatter}
areaStyleColorStop1={{offset: 0, color: 'rgb(20,206,209)'}}
areaStyleColorStop2={ {offset: 1, color:'rgba(360, 360, 360, 1)'}}
// dataVerifiedTrendWeekly && dataVerifiedTrendWeekly?.length>0 && 
seriesData={ 
    (dataVerifiedTrendWeekly)}

displayYaxisTitle={true}
 yAxesTitle={'אחוז שינוי יומי'}
//    data={[1,2,4,5,2,4,4,]}
    // lineTension={0} 
    // borderWidth={"1.9"} 
    // borderJoinStyle={"bevel"} 
    lineColor={'#00FFFF'} 
    backgroundColor={'white'} 
    xAxisData={xAxisData} 
    position={"start"} 
    id={chartId1} 
    chartType={'line'} 
    title={"מגמת שינוי במאומתים חדשים וקצב הכפלה"} middleElenet={[<i class="fa fa-info-circle" aria-hidden="true"></i>, " % שינוי בממוצע מאומתים חדשים שבועי, ומספר הימים להכפלת הנדבקים (בסוגריים)"]}
    beginAtZero={false}
    backgroundColorStopOne={"white"}
    backgroundColorStopTwo={'white'}
    minInterval={3}
    yTicksInterval={3}
    seriesName={'verified trend'}
    isYaxisLableDisplayed={true}
    chartColor={'#00FFFF'}

    >    
    </WeeklyChart>

<WeeklyChart
yAxesTitle={null}
lineLabelFormatter={null}
chartColor={'rgb(124, 123, 151)'}

seriesName={'severe sick'}
seriesData={dataSevereSickWeekly}

displayYaxisTitle={false} 
backgroundColor={'white'} 

xAxisData={xAxisData} position={"middle"} id={chartId2} chartType={'line'} title={"מספר החולים קשה"}
beginAtZero={true}
backgroundColorStopOne={"rgb(0,206,209)"}
backgroundColorStopTwo={'rgba(360, 360, 360, 1)'}

middleElenet={[   <span class="none-visible">s</span> ]}
yTicksMax={440} yTicksMin={0}  yTicksInterval={123}
yAxisLabelFormatter={null}
isYaxisLableDisplayed={true}
areaStyleColorStop1={{offset: 0, color: 'rgb(83, 156, 120)'}}
areaStyleColorStop2={{offset: 1, color: 'rgb(255, 255,255)'}}
 
></WeeklyChart>



<WeeklyChart
markLine={markLineNewNumberVerified} 
areaStyleColorStop1={{offset: 0, color: 'rgb(0,206,209)'}}
areaStyleColorStop2={{offset: 1, color: 'rgb(0,206,209)'}}
yAxisLabelFormatter={null}
 
yAxesTitle={null}
lineLabelFormatter={null}

seriesName={'new verified'}
seriesData={dataVerifiedOutSevereZones}

 xAxisData={xAxisData} position={"end"} id={chartId3} chartType={'bar'}  
 yTicksMax={1000} yTicksMin={0}  yTicksInterval={500}
title={"מספר המאומתים החדשים מחוץ לאזורי ההתפשטות"} middleElenet={[<i class="fa fa-info-circle" aria-hidden="true"></i>, `הנתונים אינם כוללים מאומתים מישובים אדומים, מוסדות גריאטריים וחוזרים מחו"ל`]}
minInterval={3}
isYaxisLableDisplayed={true}
chartColor={'rgb(128, 229, 115)'}
></WeeklyChart>
</div>


</div>
    )
}
 
export const WeeklyChart = ({markLine,isYaxisLableDisplayed,seriesData, seriesName,minInterval,displayYaxisTitle,yAxesTitle, yTicksInterval,yAxisLabelFormatter,lineTension,borderWidth,borderJoinStyle,borderColor,position,id,chartType,title,xAxisData, middleElenet, beginAtZero, yTicksMax ,yTicksMin,chartColor,
    lineLabelFormatter,areaStyleColorStop1,
    areaStyleColorStop2}) => {
    
 
    useEffect(()=>{

        var myChart= echarts.init(document.getElementById(id));

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
            data: xAxisData,
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
                fontFamily: fontFamily,
                verticalAlign: "top",
                // lineHeight: 38,
                padding: [17, 4, 3, 4],
                
            },
        },
        yAxis: {
            interval:yTicksInterval,
            min:yTicksMin,
            type: 'value',
            scale: true,
            splitLine: {
                show: false
             },
       
            minInterval:minInterval, 
            name: yAxesTitle,
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
            axisLabel: {
                show:isYaxisLableDisplayed,
                formatter:yAxisLabelFormatter, 
              },
            
            axisTick:{
                show:false,

            }, 
           },
        
        series: [{ 
            name: seriesName,
            data: seriesData.map(function (item,i) {
                let dataObj={
                    value: item, 
                };
                
                return  dataObj
                    

            }), 
            barWidth:'10',
            ...markLine,
            
            type: chartType,
            itemStyle:{
                 normal: {
                    color:chartColor,
                    barBorderRadius: [15, 15, 0, 0] ,
                    label : {
                        position:'top',
                        show: true,
                        color:'black',
                        formatter:lineLabelFormatter,
                 
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
                    colorStops: [areaStyleColorStop1, areaStyleColorStop2],
                    global: false // false by default
                }
            },
        }],
       }
       myChart.setOption({ 
        baseOption: { 
            ...options,
        },
      
        media: [
            {
                query: {
                    minWidth:100,
                }, 
                option: {   
                    ...options,
                    // backgroundColor: 'pink',

                    grid:{
                        height:"50%",
                        width:'65%',
                        right:'10',
                        },
                   },
                },
            {
                query: {
                    minWidth:200,
                }, 
                option: {   
                    ...options,
                    // backgroundColor: 'yellow',

                    grid:{
                        height:"50%",
                        // width:'7%',
                        // right:'0',
                        left:'0',
                        },
                   },
                },

            {
                query: {
                    minWidth:300,
                }, 
                option: {   
                    ...options,
                    // backgroundColor: 'gray',

                    grid:{
                        height:"50%",
                        width:'80%',
                        left:'40',
                        },
                   },
                },
            {
            query: {
                minWidth:400,
            }, 
            option: {   
                ...options,
                // backgroundColor: 'orange',

                grid:{
                    height:"50%",
                    width:'77%',
                    right:'20',
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
                        width:'87%',
                        right:'20',
                        },
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

 });  
 window.addEventListener('resize', ()=>{
    myChart.resize();
});
   })

 return (
        <div class={"container weekly-chart-container "+position}>
        <div class="upper-container">
        <span class="chart-title sub-title">{title}  
        </span>
        </div>
        <div class="middle-elenet">
        
        <span class="text"> 
        
        {middleElenet}</span>
        </div>
        <div class="container weekly-canvas-container">
        <div class="weekly-echart-container" id={id} 
         ></div>  
              </div>
        </div>

    )
}
// style={{width:'500px', height:'600px',}}

