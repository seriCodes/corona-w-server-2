import React , {useState} from 'react'
import screenSize from '../../responsive/screenSize'
 import {v1 as uuidv1} from "uuid";
 import {ContainersStructure} from "../ContainersStructure";

export const EmptyLayoutContainer = (prop) => {
    const ContainersStructureObj= new ContainersStructure()
    const screenSizeObj= new screenSize()
    const[windowWidthState,setwindowWidthState]= useState(screenSizeObj.getWindowWidthbreakpoints(window.innerWidth)) 

let id= uuidv1(); 
    React.useEffect(() => { 
        var container = document.getElementById(id); 
   let width;
        switch(windowWidthState){
            case 'Small':
                width=0
                 break;
                case 'Medium':
                    width=5
                break;
            
                case 'Large':
                    width=20
                break;
                default:
                    }
            
        ContainersStructureObj.keyValueStyleMaker(container,{"backgroundColor":prop.backgroundcolor,
    "width":`${width}%`}) 
    })
    let reportWindowSize= ()=>{
        // console.log(window.innerWidth) 
        if(screenSizeObj.getWindowWidthbreakpoints(window.innerWidth)!=windowWidthState){
            setwindowWidthState(screenSizeObj.getWindowWidthbreakpoints(window.innerWidth))
           
            console.log("getWindowWidthbreakpoints",screenSizeObj.getWindowWidthbreakpoints(window.innerWidth))
       }
    // console.log(isBigScreen)
    } 
    window.addEventListener('resize', reportWindowSize); 
let elementClasses= `column ${prop.class}`
    //  {props.side}
    return (
        <div class={elementClasses} id={id}>
            {prop.children}
            {prop.el}
        </div>
    )
}
