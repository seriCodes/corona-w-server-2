import React from 'react'
 import * as Drop from 'tether-drop';
 var withinviewport = require('withinviewport');

 export const ComponenetTest = () => {
    return (
        <div class="drop-content pick-me">
        ComponenetTest
        </div>
    )
}


export  function DropTether() {
    const [render1,setNewRender1]=React.useState(false)
    let test=(
        <span>testtest</span>
    )

    // document.querySelector('.drop-content');

    var dropInstance
    window.addEventListener('DOMContentLoaded', (event) => {
let a= document.querySelector('.drop-content')
// console.log("object a")
// console.log( a.toJSON())

setTimeout(()=>{
        },1000)
try {
    // try catch must be herre b/c the content is initially throwing a an error
    dropInstance = new Drop({
        target: document.querySelector('.drop-target'),
// content: `${{test}}`,
        // content: document.querySelector('.drop-content'),
// content: `${{test}}`, ,
content:document.querySelector('.drop-content'),
        //  content:' <span>sss</span>',
        // ComponenetTest
        // content: test,
        // content: 'only text',
        // content: '<div class="drop-content"> <div class="hover-card-mask"> <img src="https://github.com/HubSpot/drop/blob/master/docs/welcome/images/elias-kitesurfing.png?raw=true"/> </div><div class="hover-card-image"> <img src="https://github.com/HubSpot/drop/blob/master/docs/welcome/images/elias-kitesurfing.png?raw=true"/> </div><div class="drop-content-inner"> <div class="avatar"> <img src="https://github.com/HubSpot/drop/blob/master/docs/welcome/images/elias.png?raw=true"/> </div><div class="name"> Elias Torres </div><div class="title"> VP Engineering, HubSpot </div></div></div>',
        classes: 'drop-theme-arrows',
        // classes: 'drop-popup',
         
        position:'bottom center',
        // position: 'right middle',

        // position:'top left',

        // openOn: 'click',
        // closeOn: 'click',

        // openOn: 'always',
        constrainToWindow:true,
        classes:"red-drop",
        // openOn: null,
        // openOn: 'hover',
        openOn: 'click',
        remove:true,//essential to close the dropdown!!!

  /*      tetherOptions:{
            // attachment: 'middle center',
            // targetModifier: 'visible'
            // targetModifier: 'scroll-handle',
            // targetModifier: 'visible',
            // constraints: [
            //     {
            //     //   to: 'scrollParent',
            //     //   pin: true,
            //     },
            // ],
//                 attachment: 'top center',
// targetAttachment: 'middle center',
// constraints: [{
//     to: 'window',
//     attachment: 'together element'
// }] 
attachment: 'top center',
targetAttachment: 'middle center',
constraints: [{
to: 'window',
attachment: 'together element'
}
]

            
            },*/
            
      })
    
} catch (error) {
    // alert(error)
}
        
    });
      


    const toggleDrop=(a)=>{
        // alert(a)
        // dropInstance.toggle()
        console.log('dropInstance')
        console.log(dropInstance)
        console.dir(dropInstance)

/////////////
// let elems=document.getElementsByClassName("drop-element")
// // console.log(elem)

// console.log('withinviewport(elem')
// // withinviewport(elem)
// // console.log(withinviewport(elem))
// if(elems[0] && !withinviewport(elems[0])){

// }
// dropInstance.options.position="right middle"
// setNewRender1(!render1)

/////
        // dropInstance.isOpened()?dropInstance.close():alert("close")
//         if(dropInstance.isOpened()){
//             // alert("open")
//         }else{
//             // alert("close")
//         }
//         // dropInstance.open()
// console.log('dropInstance.isOpened()')
// console.log(dropInstance.isOpened())

//         // dropInstance.close()

            }
          return (
        <div onClick={()=>toggleDrop('sss')} class="graphs-container drop-target">
        <ComponenetTest></ComponenetTest>
         
        </div>
    )
}
//   <div class="drop-content">ddddddddddddddd</div>          




 
