import React, {useEffect} from 'react'
// var Chart = require('chart.js');

export const StaffStatus = () => {
    React.useEffect(()=>{

        var ctx = document.getElementById( 'staff-chart' ).getContext('2d');
        var chart = new Chart(ctx, {    
            type:'pie',
        // The data for our dataset
        data: {
            labels: ['אחיות', 'רופאים', 'מקצועות אחרים'],
            // borderCapStyle:"square",
        
            datasets: [{
                // label: 'My First dataset',

                backgroundColor: ['green','red','blue'],
                borderColor: ['green','red','blue'],
                data: [230, 103, 435],
                hoverBorderWidth:10,
                // borderAlign:'inner',

            }]
        },
        
        // Configuration options go here
        options: {
            cutoutPercentage:50,

        }
        });
        
    })
    
    return (
        <div   class="container staff-status-container">
  
        <div class="upper-container">
        <span class="chart-title sub-title">אנשי צוות בריאות בבידוד  
        </span>
                </div>
        <div class="container ">
        <canvas id= 'staff-chart' >
        </canvas> 
        </div>
            
        </div>
    )
}
