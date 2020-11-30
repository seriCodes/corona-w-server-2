import React, {useEffect} from 'react'
import {Button} from './common/Button'
import {toggleDisplayNone,addDisplayNoneToClassElements } from '../functions/reveal-elemnts';
import {v1 as uuidv1} from "uuid";

// var Chart = require('chart.js');

var echarts = require('echarts')


export const DailyTrend = (props) => {
    let trendLineChart= uuidv1(); 

    window.addEventListener('click',(e)=> {
        addDisplayNoneToClassElements('daily-trend-Line-Chart-container')
})

    return (
        <div class="daily-trend-container">
            <Button callBack={(e)=>{
              
                let elem= document.getElementById(trendLineChart)
                console.log(elem.classList.contains(`display-none`))
                if(!elem.classList.contains(`display-none`)){
                 elem.classList.add(`display-none`)
                 return
                } 
                addDisplayNoneToClassElements('daily-trend-Line-Chart-container')

             
                elem.classList.remove(`display-none`)

               
 }}>
            <span class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="eva eva-bar-chart-2" fill="currentColor"><g data-name="Layer 2"><g data-name="bar-chart-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect><path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"></path><path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"></path><path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"></path></g></g></svg> </span>
            <span>מגמת שינוי יומית</span>

            </Button>


<DailyTrendLineChart id={trendLineChart}></DailyTrendLineChart>
        </div>
    )
}

export const DailyTrendLineChart = (props) => {

    let chartId= uuidv1();

    React.useEffect(()=>{

    var ctx = document.getElementById( chartId ).getContext('2d');
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
        <div onClick={(e)=>{e.stopPropagation()}} class="container daily-trend-Line-Chart-container display-none" id={props.id}>
  
        <div class="upper-container">
        <span class="chart-title sub-title">עקומה אפידמית  
        </span>
                </div>
        <div class="container">
        <canvas id={chartId} >
        </canvas> 
        </div>
            
        </div>
    )
}
