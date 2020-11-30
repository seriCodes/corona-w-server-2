import React, {useEffect} from 'react'
import AppContainer from './AppContainer';  
import {SideBar} from './SideBar';  
 import {EchartExp,GraphsCheck,GraphsCheckBars,} from './playground/GraphsCheck'; 
 import {DropTether} from './playground/DropTether'; 
 import {SicksDistributionCopy,YValuesExample,EchartWork} from './playground/SicksDistributionCopy'; 
import {Header} from './Header'
import {EchartExpB} from './playground/GraphsCheckB'; 
import {SideBarsChart} from './playground/SideBarsChart'; 
import {ReactTablePlay} from './playground/ReactTablePlay'; 

// import 'chartjs-top-round-bar';   
// import {ModalCenter} from './ModalCenter';  
import    '../CSS/hamburger-button.css';  
import    '../CSS/accessible-view.css';  

import    '../CSS/general.css';  
import  '../CSS/app-container.css'
// import { } from './ ';
// stats-bottom-element 

import  '../CSS/logo.css'
import  '../CSS/side-bar.css'
import  '../CSS/stats-squares.css'
import  '../CSS/stats-square.css'
import  '../CSS/stats-bottom-element.css'
import  '../CSS/daily-trend.css'
import  './playground/playground.css'
import  '../CSS/weekly-expanded-indexes.css'
import  '../CSS/selector-charts.css'
import  '../CSS/table-comp.css'
import  '../CSS/sixt-line.css'
import  '../CSS/epidemic-chart.css'
import  '../CSS/severe-chart.css'
import  '../CSS/staff-status.css'
import  '../CSS/header.css'

// <GraphsCheck></GraphsCheck>   
// <GraphsCheckBars></GraphsCheckBars>
// <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
export const AppNonGridContainer = () => {

    useEffect(async ()=>{ 
        async function getCharts(names) {
            console.log('getCharts')
               let data = await fetch("http://localhost:3001/")
              let chartsArr = await data.json(); 
        
            //   jobs.push(a);
            // }
          
            // let results = await Promise.all(jobs);
          
            // return results;
            return chartsArr;
          }
         let result= await getCharts()
    console.log('result')
    console.log(result) 
})
   

    return (
        <div class ="app-NonGrid-container">
        <link rel="stylesheet" href="drop-theme-arrows.css" />
        <script src="tether.min.js"></script>
        <script src="drop.min.js"></script>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
         <script type="text/javascript" charset="utf-8" src="js/Chart.min.js"></script>
 
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>

        <AppContainer></AppContainer>
        <SideBar></SideBar> 
          </div>
    )
}
//  <ReactTablePlay></ReactTablePlay>         <DropTether></DropTether>         <EchartExpB></EchartExpB>


//  <SicksDistributionCopy></SicksDistributionCopy>
// <YValuesExample></YValuesExample>
// <EchartWork></EchartWork>
// <EchartExp></EchartExp>
// <EchartExpB></EchartExpB>
//    





