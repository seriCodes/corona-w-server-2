import React from 'react'


export const StatsSquare = (props) => {

    let amountFromMidNight=(
        <div class="amount">
        {props.amountFromMidNight} <span class="amount-period"> {props.timePeriod}   </span>  
         </div>
    
    )
    let totalAmount=(
        <div class="amount">
        {props.total} <span>סה"כ </span> 
         </div>
    
    )
let bottomElement= (
    <div class="bottom-element">
    {props.bottomElement}  
             </div>
    
)
    return (
        <div class="stats-square-container">

        <div class="title">
       {props.title} 
        </div>
        <div class="sum">
        {props.sum} 
         </div>

         <div class="difference">
       
         {
            props.amountFromMidNight && amountFromMidNight
         } 
         {
            props.total && totalAmount

         }
         </div>
{
    props.bottomElement && bottomElement
}

        </div>
    )
}
//     
