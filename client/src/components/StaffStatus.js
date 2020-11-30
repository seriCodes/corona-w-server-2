import React, {useEffect} from 'react'
import {Button} from './common/Button'
import {toggleDisplayNone,addDisplayNoneToClassElements } from '../functions/reveal-elemnts';

var echarts = require('echarts')
let fontFamily= "Open Sans Hebrew";
let professionTitleColor='black'
let barColor='rgb(98, 139, 133)';
const othersBarLabelFormatter=function (params) {
    // console.log('params othersBarLabelFormatter ')

    // console.log(params) 
    let str= params.value
    console.log(str) 
    if(params.value<0  ){
    //    params.value*=-1;
let result= params.value*-1;
// console.log(result)

       return result
    //    
   }

   return str

};
let saffAmounts={
    nurses:99,
    doc:78,
    others:55, 
}
let othersData= [4,7,10,12,14,19,28,44,33,52,99]

let lineColors={
    nurses:'rgb(47, 185, 69)',
    doc:'#00FFFF',
    others:'rgb(66, 124, 45)', 

}
// let centerHeadline=(<span id="centerHeadline" style={{color:"red", width:'500px', height:'600px', background:"green"}}>
// centerHeadline
//     </span>)
    // console.log('centerHeadline')
    // console.log(centerHeadline)

let labelObj={
    fontSize:15,
    fontFamily:fontFamily,
    color : "gray",
    // alignTo:'labelLine',
    position:'outside',
    align: 'right',
    rich: { 
        professionTitle: {
            color: professionTitleColor,
            fontFamily:fontFamily,
            align: 'center' 
         },
         professionSickAmount:{
            // color: '',
            align: 'center' 
          }
    },  
      formatter:[
          '{professionTitle|{b}}',
      '{professionSickAmount|{c}}',
    ].join('\n'), 
}
function myFunction(){
    alert("dsds")
}
export const StaffStatus = () => { 
    window.addEventListener('click',(e)=> {
        addDisplayNoneToClassElements('other-staff-details-container')
})

      React.useEffect(()=>{
        var myChart= echarts.init(document.getElementById('staff-chart')); 
        window.addEventListener('resize', ()=>{
            myChart.resize(); 
       });
       let total=saffAmounts.nurses+saffAmounts.doc+saffAmounts.others
    //    let labelTags=(
   
    //        <div><span style="color:green}">`+  'f '+'<br/> gg</span></div>
    //    )
    //    console.log('labelTags')
    //    console.log(labelTags)

       let options={
        series: [
            {
                name: 'צוות בריאות בידוד',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                labelLine: {
                    show: true,
                    length: 11,
                    lineStyle: {
                      color: "rgba(153, 30, 30, 1)",
                      width: 6.5
                    },
                },
                label: { 
                    show: true,
                    // position: 'center',
                    // fontSize:70,
                    // fontFamily:fontFamily,
                    // color : "black",
                //     formatter: function (params) {
                //         let str= params.value
                //        //  (params.value+'').bold()
                //        if(params.value<0  ){
                //            // params.value*=-1;
                //            return str + '% \n(דעיכה)'
                //        }
                   
                //        return str+ '%\n(ימים להכפלה)'
                   
                //    },
                // formatter: "dsds",
                // formatter: () => {
                //     return 'sasssss'; // Use sum variable here
                //   },
          
                      
                }, 
                labelLine: {
                    show: true,
                },
                data: [
                    {value: saffAmounts.doc, 
                    name: 'רופאים/אות',
                    itemStyle:{
                        color:lineColors.doc,
                    },
                    label: {
                    ...labelObj, 
                     },
                    },
                    {value: saffAmounts.nurses, name: 'אחים/ות',
                    itemStyle:{
                        color:lineColors.nurses,
                    },
                    label: {
                        ...labelObj, 
                         },
                    }, 
                    {
                        value: saffAmounts.others, 
                        name: 'מקצועות אחרים',
                //    id:3,
                        itemStyle:{
                        color:lineColors.others,
                    },
                    
                    label: {
                        ...labelObj, 
                          },
                    },
                    {
                        value:0,
                        // show:false,
                        // name: centerHeadline.props.children,
                         name: 'סה"כ',
                    // itemStyle:{
                    //     color:lineColors.others,
                    // }, 
                    label: {
                        fontSize:15,
                        fontFamily:fontFamily,
                        // color : "blue",
                        // alignTo:'labelLine',
                        position:'center',
                        align: 'right',
                        rich: { 
                            professionTitle: {
                                color: 'gray',
                                fontFamily:fontFamily,
                                align: 'center' ,
                                fontSize:18,

                             },
                             totalAmount:{
                                fontSize:25,
                                fontWeight:'bolder',
                                color: 'black',
                                align: 'center' 
                              } ,
                       
                        },
                    formatter:[
                        // 	
              
                                `{totalAmount|${total}}`,
                                '{professionTitle|{b}}',
                          ].join('\n'), 

                    },  
                },
                ]
            }
        ]
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
                    // backgroundColor: 'orange',
    
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
                        series: [
                            {
                        radius: ['30%', '40%'],
                            },
                        ],
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
                        series: [
                            {
                                radius: ['30%', '40%'],
                            },
                        ],

                        // backgroundColor: 'green',
                        grid:{
                            height:"60%",
                            width:'5%',
                            left:'40',
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
                        series: [
                            {
                                radius: ['20%', '30%'],
                            },
                        ],

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
   
       myChart.on('click', function (params) {
        // printing data name in console
        console.log('params on  click ');

        console.log(params);
        console.log(params.name);

    });

//     myChart.on('click', {name: 'מקצועות אחרים', }, function () {
// console.log('fdsfsdf')
// // alert('dsdsssssss')
//     });
///////////////////////////////////////////////////////
var otherStaffChart= echarts.init(document.getElementById('other-staff-chart')); 
window.addEventListener('resize', ()=>{
    otherStaffChart.resize(); 
});
let otherStaffChartOptions={
    xAxis: {
        show:false,
    },
    yAxis: {
        axisTick:{
            show:false,
        },
        axisLine:{
            show:false,
        },
        // inverse:true,
         
        // nameLocation:'end',
        position:'right',
        type: 'category',
        data: ["פרמדיקים", "פסיכולוגים/יות", "עוסים", "עובדי מערך לוגיסטי", "עובדי מעבדה", "אנשי כוח עזר", "רוקחים",
         "חובשי רפואת חירום",
          " ריפוי בעיסוק/ \nקלינאי תקשורת"
         , "סקטורים אחרים"
         , "עובדי מינהל ומשק"],
        axisLabel: {
            align:'left',
            padding:[-7 ,0,0,3],
            // align:'center',
            // align:'right',
            verticalAlign:'top',
            // verticalAlign:'bottom',
            borderColor :'blue',
            // borderWidth:5,
            // width:'30%',
            interval:0, // forces labels to display
            },
            // tooltip: {
            //     formatter: function(params, ticket, callback) {
            //         console.log('params gender')
    
            //         console.log(params)
            //         console.log('ticket')
            //         console.log(ticket)
            //         console.log('callback')
            //         console.log(callback)
            //         let value= params.value>0?params.value:params.value*-1
            //         var res=''
            //         //  for (var i = 0, l = params.length; i < l; i++) {
            //              console.log('for gender')
            //             console.log(params['color'])
    
            //             res +=`<span style="color:${params['color']}">` +params.seriesName+" "+params.name+'<br/>'+value  + '% '+' </span> ' ;
            //         // }
            //         setTimeout(function() { 
            //           callback(ticket, res); 
            //         }, 100)
            //         return 'loading';
            //     },
            // },
        },
        grid:{
            containLabel:true ,
        },
        tooltip: {
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

                    res +=`<span style="color:${params['color']}">` +"  מבודדים "+value  +' </span> ' ;
                // }
                setTimeout(function() { 
                  callback(ticket, res); 
                }, 100)
                return 'loading';
            },

            backgroundColor: 'white', 
            textStyle: {           
                fontWeight:'bolder',
                color:barColor,
                fontFamily:fontFamily,

                },
        },
        series: [
            {
                // position:'right',

                name:'מקצועות אחרים פירוט',
                data: othersData.map((item)=>{
return -1*item
                }),
                // data: [-4,-7,-10,-12,-14,-19,-28,-33,-44,-52,-99],
                type: 'bar',
                // stack: 'A',
                // tooltip: {
                //     show:true,
                //     },

                itemStyle:{
                    // color:'green',
             
                    // position:'right',
                    normal: {
                        color:barColor,
                        barBorderRadius: [15, 0,0,15] ,
                    // position:'right', barColor
                        label : {
                            position:'left',
                            show: true,
                            color:'black',
                            formatter:othersBarLabelFormatter,
                        },
                     
                    },
                },
                barWidth:'10',
    
            },
        ],
     


        }
        otherStaffChart.setOption(

            {
                baseOption: { 
                    ...otherStaffChartOptions,
                },
                media: [
                    {
                        query: {
                            minWidth:200,
                        }, 
                        option: {   
                            ...otherStaffChartOptions,
                            // backgroundColor: 'lightblue',
            
                            grid:{
                                height:"50%",
                                width:'50%',
                                right:'28',
                                containLabel: true
                                },
                           },
                        },
                        {
                            query: {
                                minWidth:300,
                            }, 
                      
                        option: {   
                           ...otherStaffChartOptions,
                            // backgroundColor: 'pink',
            
                            grid:{
                                height:"95%",
                                width:'50%',
                                // left:'18',
                                right:'8',
                                // left:'8',

                                top:'10',
                                containLabel: true,
        
                                },
                           },
                        },
                        {
                            query: {
                                minWidth:400,
                            }, 
                            option: {   
                                ...otherStaffChartOptions,
                                // backgroundColor: 'gray',
                    
                                grid:{
                                    height:"90%",
                                    width:'84%',
                                    // right:'90',
                                    left:'58',

                                    containLabel: true,
                                    },
                            },
                        },
                        
                    {
                        query: {
                            minWidth:600,
                        }, 
                        option: {   
                            ...otherStaffChartOptions,
                            // backgroundColor: 'pink',
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
                ...otherStaffChartOptions,
                grid:{
                    height:"60%",
                    width:'82%',
                     left:'30',
                    containLabel: true,
                    },
                        }
                    },

                ],
            } 
           ) 

    })
    
    return (
        <div   class="container staff-status-container">
        <div class="upper-container">
        <span class="chart-title sub-title">
        אנשי צוות בריאות בבידוד 
        </span>
        <Button callBack={(e)=>{
              
            let elem= document.getElementById('other-staff-details-container-id')
            console.log(elem.classList.contains(`display-none`))
            if(!elem.classList.contains(`display-none`)){
             elem.classList.add(`display-none`)
             return
            } 
            addDisplayNoneToClassElements('daily-trend-Line-Chart-container')

         
            elem.classList.remove(`display-none`)

           
}}>        <div class='icon-other-staff-container'>

        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="eva eva-info-outline" fill="currentColor"><g data-name="Layer 2"><g data-name="info"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><circle cx="12" cy="8" r="1"></circle><path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z"></path></g></g>
        </svg>
        </div>
        </Button>

        <div  id= 'other-staff-details-container-id' class='container other-staff-details-container display-none' onClick={(e)=>{e.stopPropagation()}}>
        <div class="upper-container">
אנשי צוות במקצועות אחרים בבידוד

        </div>

        <div id= 'other-staff-chart' class="container other-staff-chart-container chart-container" >
        </div>

    </div>


      </div>

        <div id= 'staff-chart' class="container staff-chart-container chart-container" >
        
        </div>

        </div>
    )
}
// style={{width:'200px', height:'100px',}}