import React, {useState} from 'react';
import {toggleDisplayNone,addDisplayNoneToClassElements ,toggleAnimateArrowClass} from '../functions/reveal-elemnts';
import {v1 as uuidv1} from "uuid";
import {Button} from './common/Button'

let fontFamily= "Open Sans Hebrew";
var echarts = require('echarts')


let severeColor='rgb(87, 184, 89)'
let respiratoryColor='rgb(47, 176, 215)'
let deadsColor='rgb(47, 106, 69)'

let severeSickWeek=[100,270,405,50,105,80,220,]
let respiratorySickWeek=[0,200,800,705,450,180,502,]
let deadsAmountSickWeek=[0,21,14,15,15,18,12,]

let severeSick={
    tillDay:[0,30,200,250,400,350,300,200,150],
lastWeek:severeSickWeek,
///
lastTwoWeek:[...severeSickWeek,...severeSickWeek], 
lastMonth:[...severeSickWeek,...severeSickWeek,...severeSickWeek,...severeSickWeek],
}
let respiratorySick={
    tillDay:[0,300,800,250,400,750,300,900,650],
lastWeek:respiratorySickWeek,
///
lastTwoWeek:[...respiratorySickWeek,...respiratorySickWeek], 
lastMonth:[...respiratorySickWeek,...respiratorySickWeek,...respiratorySickWeek,...respiratorySickWeek],
};
let deadsAmount={
    tillDay:[90,300,900,250,900,350,800,700,650],
lastWeek:deadsAmountSickWeek,
///
lastTwoWeek:[...deadsAmountSickWeek,...deadsAmountSickWeek], 
lastMonth:[...deadsAmountSickWeek,...deadsAmountSickWeek,...deadsAmountSickWeek,...deadsAmountSickWeek],
};


export const SevereSick = () => {

    let firstData={
        timePeriod:'all-data',

        xAxisData: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'],
        severeSickAmountState:severeSick.tillDay,
        respiratorySickAmountState:respiratorySick.tillDay,
        deadsAmountState:deadsAmount.tillDay,

    }
    const [data,setData]= useState(firstData)

    React.useEffect(()=>{
        var myChart= echarts.init(document.getElementById('severeChart')); 
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

          xAxis: {
            type: 'category',
            data: data.xAxisData,
            name: "תאריך",
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
         yAxis: {    
               scale:true,
               type: 'value',
               scale: true,
               interval:252,
               max:900,
               min:0,//*for forcing the min label to display
                name: 'מספר מקרים',
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
            // color:'#00FFFF',
            showMinLabel:true,//*
        },

        },
        // showSymbol: false,
        series:
      
         [ 
             { 
                
                name: 'חולים קשה',
                data: data.severeSickAmountState.map(function (item,i) {
                    let dataObj={
                        value: item,
                    }; 
                    return  dataObj 
                  }), 
                  type: 'line',
                //   animation:false,

                  hoverAnimation:false,
                symbolSize:25,
                symbol: `path://M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z`
                   // M  0 100 L 350 100 SL 350 250 SL 0 250 z
                ,
                  lineStyle: {
                    color: severeColor,
     
                  },

                  color: severeColor,//a default color for legend icon
 
                  itemStyle:{

                    color: (param) => {//a must for seperating symbol and legend color
                        // console.log('itemStyle param')
                        //  console.log(param)
                     return param.data.value>-1?'white':''
                     
                   },
                      borderColor:severeColor,
                      borderWidth: 3,

                  },
                  label:{
                      show:true,
                      color:'black',
                      position:'inside'
                      ,

                  },
      
            },
            {
                type: 'line', 
                name: `מונשמים`,
                color: respiratoryColor,

                data: data.respiratorySickAmountState.map(function (item,i) {
                    let dataObj={
                        value: item,
                    }; 
                    return  dataObj 
                  }),
 
                  hoverAnimation:false,
                  symbolSize:25,
                  symbol: `path://M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z`
                     // M  0 100 L 350 100 SL 350 250 SL 0 250 z
                  ,
                  lineStyle: {
                    color: respiratoryColor,
     
                  },

                  
                  itemStyle:{
                    color: (param) => {
                        // console.log('itemStyle param')
                        //  console.log(param)
                     return param.data.value>-1?'white':''
                     
                   },
                      borderColor:respiratoryColor,
                      borderWidth: 3,

                  },
                  label:{
                      show:true,
                      color:'black',
                      position:'inside'
                      ,
                  },

          },
          {
            type: 'line', 
            name: `נפטרים`,
           
            data: data.deadsAmountState.map(function (item,i) {
                let dataObj={
                    value: item,
                }; 
                return  dataObj 
              }),
               hoverAnimation:false,
              symbolSize:25,
            //   symbolAnimation:false,
              symbol: `path://M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z`
                 // M  0 100 L 350 100 SL 350 250 SL 0 250 z
              , 
              
              itemStyle:{
                  color: (param) => {
                    // console.log('itemStyle param')
                    //  console.log(param)
                 return param.data.value>-1?'white':''
                 
               },
                //   'white',
                  borderColor:deadsColor,
                  borderWidth: 3,

              },
              label:{
                  show:true,
                  color:'black',
                  position:'inside'
                  ,
              },
              lineStyle: {
                color: deadsColor,
 
              },
              color: deadsColor,

      },

        ],
        }
        myChart.setOption({ 
            baseOption: { 
                ...options,
            },
            media: [
                {
                    query: {
                        minWidth:200,
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
                        backgroundColor: 'purple',
        
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
        switch(e ){
            case 'all-data':
                        // 
                        setData({
                            timePeriod:'all-data',
               
    xAxisData: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'],
    severeSickAmountState:severeSick.tillDay,
    respiratorySickAmountState:respiratorySick.tillDay,
    deadsAmountState:deadsAmount.tillDay,
   })
                        break;
    case 'last-week':
    setData({
        timePeriod:'last-week',

        xAxisData: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1',],
        severeSickAmountState:severeSick.lastWeek,
        respiratorySickAmountState:respiratorySick.lastWeek,
        deadsAmountState:deadsAmount.lastWeek,

                            })
                            break;
    case 'last-two-weeks':
    setData({
        timePeriod:'last-two-weeks',

        xAxisData: ['1', '2', '3', '4', '5', '6', '7','8','9', '10','11','12', '13','14'],
        severeSickAmountState:severeSick.lastTwoWeek,
        respiratorySickAmountState:respiratorySick.lastTwoWeek,
        deadsAmountState:deadsAmount.lastTwoWeek,

                                })
                                break;
    case 'last-month':
        setData({
            timePeriod:'last-month',
            xAxisData:['1', '2', '3', '4', '5', '6', '7','8','9', '10','11','12', '13','14','15', '16', '17', '18', '19', '20', '21','22','23', '24','25','26', '27','28'],
        severeSickAmountState:severeSick.lastMonth,
        respiratorySickAmountState:respiratorySick.lastMonth,
        deadsAmountState:deadsAmount.lastMonth,

        })
        break;
        default:
            alert('cant be here')
    
    
    }
}
let arrowId=uuidv1()
let optionsContainerId=uuidv1()

    return (
        <div class="container severe-container">
        <div class="upper-container">
        <span class="chart-title sub-title">חולים קשה ומונשמים  </span>
        <div class='options-button-container'>
        <Button callBack={(e)=>{
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
        
// 
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


        <div id="severeChart" class="container severe-chart-container chart-container"> </div>
        </div> 
    )
}
