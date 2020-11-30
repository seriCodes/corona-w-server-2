import React from 'react'

export const StatsBottomElement = (props) => {
    return (
        <div class="stats-bottom-element-container">
            <div class="col">
            <div class="sub-text">
            {props.subText1}
            </div>
            <div  class="amount">
            {props.amount1}

            </div>
            </div>
            <div class="col">
            <div class="sub-text">
            {props.subText2}
            </div>
            <div  class="amount">
            {props.amount2}

            </div>
                    </div>
                 <div class="col">

                 <div class="sub-text">
                 {props.subText3}
                 </div>
                 <div  class="amount">
                 {props.amount3}
     
                 </div>
                   </div>
        </div>
    )
}
