import React from 'react'
import {StatsSquare} from './StatsSquare';
import {StatsBottomElement} from './StatsBottomElement'
import {DailyTrend} from './DailyTrend'

export const StatsSquaresContainer = () => {
     const [dataBreathAid, setBreathAid]=React.useState("")
    const [dataSevereSick, setSevereSick]=React.useState("")
    const [dataPassedAway, setPassedAway]=React.useState("")
    const [dataDailyTests, setDailyTests]=React.useState([])


    // 
    let breathAid;
    let severeSick;
    let passedAway;
    let dailyTests;
    React.useEffect(async ()=>{ 
        async function getCharts() {
            console.log('getCharts')
             let data = await fetch("http://localhost:3001/charts")
               let chartsArr = await data.json(); 
             return chartsArr;
          }
         let result= await getCharts()
 
    breathAid= result.find(element => element.name =='breath-aid') 
 
    setBreathAid(breathAid.data)
    
    severeSick= result.find(element => element.name =='severe-sick') 
 
    setSevereSick(severeSick.data)
    passedAway= result.find(element => element.name =='passed-away')
    setPassedAway(passedAway.data)
    dailyTests= result.find(element => element.name =='daily-tests')
    console.log('dailyTests')
    console.log(dailyTests)

    setDailyTests(dailyTests.data)



    // dailyTests
},[])


let firstStatsBottomElement=(<StatsBottomElement subText1={'בינוני'} amount1={'666'} subText2={'קשה'} amount2={'777'}>  </StatsBottomElement>)
let xAxisData=['1.1','1.2','1.3','1.4','1.5','1.6'];
let respiratorsChart={
    xAxisData,
    title:"מונשמים",
    yAxisTitle:"כמות מונשמים",
seriesData:dataBreathAid || [ ],
minInterval:113,
seriesName:'מונשמים',
}
let severeChart={
    xAxisData,
    title:"חולים קשה",
    yAxisTitle:"כמות חולים קשה",
seriesData:dataSevereSick || [],
minInterval:113,
seriesName:'חולים קשה',

}
let passedAwayChart={
    xAxisData,
    title:"נפטרים ",
    yAxisTitle:"כמות נפטרים",
seriesData: dataPassedAway || [],
minInterval:1,
seriesName:'נפטרים ',
}
let sicknesTestAmountChart={
    xAxisData,
    title:"בדיקות",
    yAxisTitle:"כמות בדיקות יומיות",
    seriesData:dataDailyTests,
    minInterval:19880,
seriesName:'בדיקות יומיות',
}

let secondStatsBottomElement=(
    <StatsBottomElement subText1={'בית/קהילה'} amount1={'6646'} subText2={'מלון'} amount2={'777'}  subText3={'בי"ח'} amount3={'325'}> </StatsBottomElement>
    )

 let firstSquare=( <StatsSquare title={"מאומתים חדשים לאתמול"} sum={"555"} amountFromMidNight={+44} timePeriod={"מחצות"} total={'300,004'}
      ></StatsSquare>
        )
        let secondSquare=( <StatsSquare title={"חולים פעילים"} timePeriod={"מחצות"} sum={"3000"} amountFromMidNight={-49} total={'300,004'} bottomElement={secondStatsBottomElement}></StatsSquare>
            )
    let thirdSquare=( <StatsSquare
        title={"חולים קשה"} sum={190}  timePeriod={"מחצות"} amountFromMidNight={+2} 
          bottomElement={<DailyTrend data={severeChart}> </DailyTrend>}></StatsSquare>
                )
                let fourthSquare=( <StatsSquare
                    title={"מונשמים"} sum={130}  timePeriod={"מחצות"} amountFromMidNight={+6} 
                    bottomElement={<DailyTrend data={respiratorsChart}> </DailyTrend>}></StatsSquare>
                    )
 let fithSquare=( <StatsSquare
    title={"נפטרים מצטבר"} sum={2730}  
    bottomElement={<DailyTrend data={passedAwayChart}> </DailyTrend>}></StatsSquare>
                        )
 let sixthSquare=( <StatsSquare 
    title={"אחוז בדיקות חיוביות אתמול"} sum={'2.6%'} timePeriod={"בדיקות אתמול"} amountFromMidNight={+6000} sum={130} bottomElement={<DailyTrend data={sicknesTestAmountChart}> </DailyTrend>}></StatsSquare> )

 return (
        <div class="stats-squares-container">
        <div class="big-screen row">

        {firstSquare}

        {secondSquare}
        {thirdSquare}
        {fourthSquare}
        {fithSquare}
        {sixthSquare}

        </div>
        <div class="medium-screen">
        
        <div class="row">
        {firstSquare}

        {secondSquare}
        {thirdSquare}

</div>
<div class="row">
{fourthSquare}
{fithSquare}
{sixthSquare}

</div>

        </div>

        <div class="small-screen">
        <div class="row">
        {firstSquare}

        {secondSquare}
        </div>
        <div class="row">
        {thirdSquare}
        {fourthSquare} 
        </div>
        
     
        <div class="row">
        {fithSquare}
        {sixthSquare} 
        </div>
        
        
        
        
        </div>


        </div> 
    )
}
