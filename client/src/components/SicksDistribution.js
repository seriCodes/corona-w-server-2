import React, {useState} from 'react';
import {toggleDisplayNone,addDisplayNoneToClassElements ,toggleAnimateArrowClass} from '../functions/reveal-elemnts';
import {v1 as uuidv1} from "uuid";
import {Button} from './common/Button'
let fontFamily= "Open Sans Hebrew";
var echarts = require('echarts')

const barLabelFormatter=function (params) {
   if(params.value<0  ){
       params.value*=-1;
   }
   let str= params.value
   return str+ '%'
};

let verifiedPercentage={
    men:[1,2,3,4,4,2,6,8,12,13],
    women:[1,5,7,4,2,6,7,16,13,5],
}
let deadPercentage={
    men:[1,2,3,4,14,2,4,18,2,3],
    women:[1,5,7,4,2,6,7,16,13,3],
}
let respiratoryAidPercentage={
    men:[1,5,3,5,4,2,2,8,12,3],
    women:[1,5,9,4,2,6,7,16,12,2],
}
let severePercentage={
    men:[1,8,3,4,5,2,6,7,12,8],
    women:[3,5,7,1,2,9,7,16,9,7],
}
 
let menColor='#00FFFF';
let womenColor='rgb(47, 185, 69)'

export const SicksDistribution = () => {

    let firstData={ 
        timePeriod:'verified',

            men:verifiedPercentage.men,
            women:verifiedPercentage.women, 
    }
const [data,setData]= React.useState(firstData)
    
    React.useEffect(()=>{
        var myChart= echarts.init(document.getElementById('sicksDistributionChart')); 
        window.addEventListener('resize', ()=>{
            myChart.resize(); 
       });
       let optionsTEm= { 
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
          yAxis: {
            type: 'value',
            // data: [0,10,20],
            name: 'סה"כ %',
            nameLocation :'middle',
            axisTick: 
            {
                // show: false,
            },
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "top",
                 padding: [17, 4, 3, 4],
                
            },
            axisLine:{
                // onZero:true,
                // onZeroAxisIndex:0,
                // onZeroAxisIndex:1,
        },

         },
         xAxis: {
            type: 'category',
            data: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90+"],
            name: 'קבוצת גיל',
            nameLocation :'middle',
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "bottom",
                // lineHeight: 38,
                color:"",
                padding: [0, 0, 44, 0],
      },
      
      axisTick:{
        show:true,
    },
    series: [
        {
            name: '利润',
            type: 'bar',
            label: {
                show: true,
                position: 'inside'
            },
            data: [4, 4, 5, 6, 6, 5, 2]
        },
        // {
        //     name: '收入',
        //     type: 'bar',
        //     // stack: 'bbb',
        //     label: {
        //         show: true
        //     },
        //     data: data.men.map(function (item,i) {
        //         console.log('item  data.men.map')
        //         console.log(item)
        //         let dataObj={
        //             value: item,
        //         }; 
        //         return  dataObj 
        //       }),
        // },
        // {
        //     name: '支出',
        //     type: 'bar',
        //     // stack: 'bbb',
        //     label: {
        //         show: true,
        //         position: 'left'
        //     },
        //     data: data.women,
        // }
    ]


         },
       }

       let options={
        legend: { 
            align :'right',
            // type: "scroll"
            right :15,
            selectedMode :false,
            textStyle:{
                fontFamily,
                padding:[0,-8,0,0]
            },
            icon:'circle',
          },
        xAxis: {
            type: 'value',
            name: 'קבוצת גיל',
            // show:false,
            // nameLocation :'bottom',
            // nameLocation :'top',
            nameLocation :'center',
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "bottom",
                lineHeight: -38,
                color:"",
                // padding: [0, 0, 44, 0],
      },
      axisLine:{
          lineStyle:{
            opacity:0,
          } 
      }
        },
        yAxis: {
            type: 'category',
            data: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90+"],
            axisLabel: {
                interval:0, // forces labels to display
                },
          

            splitLine:{
                show: true,
            },
        },
        tooltip: {
            // trigger: 'bar',
            formatter: function(params, ticket, callback) {
                console.log('params gender')

                console.log(params)
                console.log('ticket')
                console.log(ticket)
                console.log('callback')
                console.log(callback)
                let value= params.value>0?params.value:params.value*-1
                var res=''
                //  for (var i = 0, l = params.length; i < l; i++) {
                     console.log('for gender')
                    console.log(params['color'])

                    res +=`<span style="color:${params['color']}">` +params.seriesName+" "+params.name+'<br/>'+value  + '% '+' </span> ' ;
                // }
                setTimeout(function() { 
                  callback(ticket, res); 
                }, 100)
                return 'loading';
            },
            backgroundColor: 'white', 
            textStyle: {           
            fontWeight:'bolder',
            },
        axisPointer: {
            type: 'cross',
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: 'blue',
                color:'white',
                textStyle: {
                    color: 'white',
                    fontWeight:'bolder',
                    fontFamily:fontFamily,
                },
            },
        },
            
    },
        series: [{
            name:'גברים',
            data: data.men,
            type: 'bar',
            stack: 'A',
            itemStyle:{
                normal: {
                color:menColor,
                barBorderRadius: [0, 15,15, 0] ,
                label : {
                    position:'right',
                    show: true,
                    color:'black',
                    formatter:barLabelFormatter,

                },
                },
            },
            // barWidth:'10',

        },
    
        {
            name:'נשים',
            data: data.women.map(function (item,i) {
                item*=-1;
            return item
            }
            ),
            type: 'bar',
            barWidth:'7',//set on the last 'bar' series in the...

            stack: 'A',
            itemStyle:{
                normal: {
                color:womenColor,
                barBorderRadius: [15,0, 0,  15] ,
                label : {
                    position:'left',
                    show: true,
                    color:'black',
                    formatter:barLabelFormatter,

                },
                }
            },

        },
    ]
    }
       myChart.setOption({
        baseOption: { 
            ...options,
        },
        media: [
            {
                query: {
                    minWidth:10,
                }, 
                option: {   
                    ...options,
                    // backgroundColor: 'lightblue',
    
                    grid:{
                        height:"50%",
                        width:'87%',
                        right:'58',
                        containLabel: true
                        },
                   },
                },
            {
                query: {
                    minWidth:200,
                }, 
                option: {   
                    ...options,
                    // backgroundColor: 'lightblue',
    
                    grid:{
                        height:"50%",
                        width:'50%',
                        right:'58',
                        containLabel: true
                        },
                   },
                },
                {
                    query: {
                        minWidth:300,
                    }, 
              
                option: {   
                    ...options,
                    // backgroundColor: 'white',
    
                    grid:{
                        height:"65%",
                        width:'87%',
                        left:'28',
                        containLabel: true,

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
                            height:"60%",
                            width:'84%',
                            // right:'90',
                            containLabel: true,
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
                            height:"60%",
                            width:'85%',
                            left:'30',
                            containLabel: true,
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
                            height:"60%",
                            width:'82%',
                            // right:'90',
                            containLabel: true,
                            },
                            {
 option: { 
                    // backgroundColor: 'purple',
    
                  grid:[{
                    height:"50%",
                    width:'100%',
                    right:'20',
                    containLabel: true,
                },
            ],
              }
                            },
                    ],
                    },
                },
        ],
       })   
    })
    //////////////
    const changeDataPeriod=(e)=>{
         switch(e ){
    case 'verified':
                
                setData({
                    timePeriod:'verified',

                    men:verifiedPercentage.men,
                    women:verifiedPercentage.women,
                })
                break;
    case 'dead':
                
                setData({
                    timePeriod:'dead',

                    men:deadPercentage.men,
                    women:deadPercentage.women,
                })
                break;
    case 'breath-aid':
        setData({
            timePeriod:'breath-aid',

            men:respiratoryAidPercentage.men,
            women:respiratoryAidPercentage.women,
        })          
              break;
    case 'severe':
        setData({
            timePeriod:'severe',

            men:severePercentage.men,
            women:severePercentage.women,
        })
                        break;

    default:
                alert('cant be here')
        }
        
        }
        let arrowId=uuidv1()
        let optionsContainerId=uuidv1()
        
    return (
        <div class="container sicks-distribution-container">
        <div class="upper-container">
        <span class="chart-title sub-title">
        פיזור מאומתים לפי גיל ומגדר  
        </span>

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
data.timePeriod=='verified'?"מאומתים":data.timePeriod=='dead'?"נפטרים":data.timePeriod=='breath-aid'?"מונשמים":data.timePeriod=='severe'?"מצב קשה":"error"
                      
           }
        </span> 

        <div id={arrowId} class=' selector-button-icon'>
        <span class="arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"></rect><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"></path></g></g></svg>
        
        </span>        </div>
        </div>

        </Button>

        
        <div id={optionsContainerId} class='options-container display-none'>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("verified")
    }}  value={"all-data"}>מאומתים
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("dead")}} value={"last-week"}>נפטרים
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("breath-aid")}}  value={"last-two-weeks"}>מונשמים
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("severe")}} 
            value={"last-month"}>מצב קשה
        </Button>
        </div>
     
        </div>
      

 
        </div>
        <div id="sicksDistributionChart" class="container age-gender-chart-container chart-container">
           </div>

        </div>
    )
}
