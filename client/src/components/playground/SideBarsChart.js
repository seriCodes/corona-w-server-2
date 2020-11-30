import React, {useState} from 'react';
let fontFamily= "Open Sans Hebrew";
var echarts = require('echarts')

export const SideBarsChart = () => {
    React.useEffect(()=>{
        let dom1=document.getElementById('SideBarId')
        console.log('dom1')

        console.log(dom1)
        var myChart= echarts.init(dom1); 


        let options=  {
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

        myChart.setOption( {
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
        }
        )
        })
    return (
        <div class="sicks-distribution-container-play2">
        sSideBarvvvvvvvvv vvvvvvvvv
              <div id="SideBarId" style={{"width":'300px', "height":"400px",}}>
        </div>
.kjkkkkkh
        </div>
    )
}
