import React , {useState,useEffect} from 'react';
// import { } from './ ';
// import { } from './ ';
import {Header} from './Header';
import {StatsSquaresContainer} from './StatsSquaresContainer';
import {WeeklyExpandedIndexes} from './WeeklyExpandedIndexes';
import {EpidemicChart} from './EpidemicChart';
import {SevereSick} from './SevereSick';
import {SicksDistribution} from './SicksDistribution';


import {EpidemicSpread} from './EpidemicSpread';
import {StaffStatus} from './StaffStatus';
import {HospitalStatusTable} from './HospitalStatusTable';
import {SickDetectionsChecks} from './SickDetectionsChecks';

// import {languageSetter,languageGetter,textSetter} from '../Functions/Language'

//  import {makeElementsAnimationOnScroll,makeModalVisibleAfterScroll, toggleElementsInViewPort} from '../functions/scrollFunctions';  
 




function AppContainer(props) {

    document.addEventListener('DOMContentLoaded', () => { 
 
 
 

 })
    
    return (
        <div class ="app-container">
        <div class="emptyHeaderHolder"></div> 
        <Header></Header>
      <StatsSquaresContainer></StatsSquaresContainer>
<WeeklyExpandedIndexes></WeeklyExpandedIndexes>
 <div class="fourth-line">
 <EpidemicChart></EpidemicChart>
 <SevereSick></SevereSick>
 </div>
 <div class="fith-line">
 <SicksDistribution></SicksDistribution>
 <EpidemicSpread></EpidemicSpread>
 </div>
 <div class="sixth-line">
 <StaffStatus></StaffStatus>

 {
    <HospitalStatusTable></HospitalStatusTable>

 }
 <SickDetectionsChecks></SickDetectionsChecks>
 
 </div>


 </div>
    );
}

export default AppContainer;
//            <div class="blueRow"> </div>
// <UpperHeader></UpperHeader> 
//         <div class="whiteRow">  </div>






 // <div class="not-grid-item"> <CenterHeader></CenterHeader> </div>
       
//        </div>  
//        </div>  

// <CenterHeader></CenterHeader>  
// 

// <div  class ='main-area-container'> 

//               {props.children} 
     
// <div class="show-on-scroll not-visible">ddd</div>
//      </div> 

 

//     <footer class='footer-area-container'
// style={{ 
//     borderStyle:"groove",
//    borderColor: "purple",
//    borderWidth: "17px", }}>  

// </footer> 
