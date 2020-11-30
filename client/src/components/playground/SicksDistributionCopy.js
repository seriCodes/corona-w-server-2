import React, {useState} from 'react';
let fontFamily= "Open Sans Hebrew";
var echarts = require('echarts')



let verifiedPercentage={
    men:[1,2,3,4,4,2,6,8,12,13],
    women:[1,5,7,4,2,6,7,16,13],
}
let deadPercentage={
    men:[1,2,3,4,14,2,4,18,2,3],
    women:[1,5,7,4,2,6,7,16,13],
}
let respiratoryAidPercentage={
    men:[1,5,3,5,4,2,2,8,12,3],
    women:[1,5,9,4,2,6,7,16,12],
}
let severePercentage={
    men:[1,8,3,4,5,2,6,7,12,8],
    women:[3,5,7,1,2,9,7,16,9],
}
 

export const SicksDistributionCopy = () => {

    let firstData={
       
            men:verifiedPercentage.men,
            women:verifiedPercentage.women,
    
    }
const [data,setData]= React.useState(firstData)
    
    React.useEffect(()=>{
        var myChart= echarts.init(document.getElementById('sicksDistributionChartCopy')); 
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
        show:false,
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
        {
            name: '收入',
            type: 'bar',
            stack: 'bbb',
            label: {
                show: true
            },
            data: data.men.map(function (item,i) {
                console.log('item  data.men.map')
                console.log(item)
                let dataObj={
                    value: item,
                }; 
                return  dataObj 
              }),
        },
        {
            name: '支出',
            type: 'bar',
            stack: 'bbb',
            label: {
                show: true,
                position: 'left'
            },
            data: data.women,
        }
    ]


         },
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
                    backgroundColor: 'lightblue',
    
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
                    backgroundColor: 'white',
    
                    grid:{
                        height:"50%",
                        width:'57%',
                        right:'58',
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
                backgroundColor: 'blue',
    
                grid:{
                    height:"50%",
                    width:'57%',
                    right:'90',
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
                    backgroundColor: 'green',
                    grid:{
                        height:"50%",
                        width:'70%',
                        right:'90',
                        containLabel: true,
                        },
                },
                },
            {
                query: {
                    minWidth:700,
                }, 
                option: {   
                    backgroundColor: 'orange',
                    ...options,
                    grid:[{
                        height:"50%",
                        width:'72%',
                        right:'90',
                        containLabel: true,
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
                    containLabel: true,
                },
            ],
              }
          }
        ],
    
    })
      

    })
    //////////////
    const changeDataPeriod=(e)=>{
         switch(e.target.value){
    case 'verified':
                
                setData({type:'bar'})
                break;
    case 'dead':
                
                setData({type:'pie'})

                break;
    case 'breath-aid':
                
                break;
    case 'severe':
                
                break;

    default:
                alert('cant be here')
        }
        
        }

    return (
        <div class="container sicks-distribution-container-play">
        <div class="upper-container">
        <span class="chart-title sub-title">פיזור מאומתים לפי גיל ומגדר  
        </span>

        <select onChange={(e)=>changeDataPeriod(e)} class="data-period-selector">
        <option value={"verified"}>מאומתים</option>
        <option value={"dead"}>נפטרים</option>
        <option value={"breath-aid"}>מונשמים</option>
        <option value={"severe"}>מצב קשה</option>
        </select>
        
        </div>
        <div id="sicksDistributionChartCopy" class="container epidemic-chart-container">
           </div>

        </div>
    )
}

export const YValuesExample = () => {

    React.useEffect(()=>{
        let myChart= echarts.init(document.getElementById('yValuesExample')); 
        console.log('yValuesExample ')

        console.log(myChart)
        window.addEventListener('resize', ()=>{
            myChart.resize(); 
       });

      let  options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['fg', 'ff', 'hh']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false,
                    },
                    data: ['h', 'hh', 'h', 'gg', 'dds', 'ee', 'kk']
                }
            ],
            series: [
                {
                    name: 'kkkkk',
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: [233, 170, 240, 244, 200, 220, 210]
                },
                {
                    name: 'nnn',
                    type: 'bar',
                    stack: 'bbb',
                    label: {
                        show: true
                    },
                    data: [440, 302, 341, 374, 390, 450, 420]
                },
                {
                    name: ',kj',
                    type: 'bar',
                    stack: 'bbb',
                    label: {
                        show: true,
                        position: 'left'
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        
            
        };
        myChart.setOption( options );

        })

        return (
            <div class="container sicks-distribution-container-play2">
            <div id="yValuesExample">
            </div>
            </div>

        )
}

 
export const EchartWork = () => {

    React.useEffect(()=>{
        let myChart= echarts.init(document.getElementById('plswork'));

        // let options= { 
        //     xAxis: {
        //         type: 'category',

        //     },
        //     yAxis:[
        //         {
        //             scale:true,
        //     type: 'value',
        //     series: [
        //         { 
        //             type: 'line',

        //             symbolSize:10,
        //             symbol: 'circle',

        //     name: 'מאומתים מצטבר',
        //     data:[2,4,5,6,7].map(function (item,i) {
        //         let dataObj={
        //             value: item,
        //         }; 
        //         return  dataObj 
        //       }), 

        //         },]

                        
        //         }]       
        // }
     let   options = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        myChart.setOption({ 
            baseOption: { 
                ...options,
                backgroundColor: 'blue',
                grid:[{
                    height:"20%",
                    width:'50%',
                    right:'',
        
                 //    left:210,
                    
                },
             
             ],
                    },
        })  
    })
    return (
        <div class="container sicks-distribution-container-play3">
        76
        <div id="plswork">46
        </div>
        ,;l',l';,l
        </div>
)
}


