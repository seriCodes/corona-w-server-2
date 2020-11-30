import React, {useEffect} from 'react'
import {ContainersStructure  } from "../ContainersStructure";
import {v1 as uuidv1} from "uuid";

export const CircleIconButtons = (props) => {
    let idIcon=uuidv1()
    const ContainersStructureObj= new ContainersStructure()
//     let text
//     if(props.text!=undefined){
//     text=""
// }
    useEffect(() => {
        const  ButtonTag=document.getElementById( idIcon)
        ButtonTag.innerHTML=props.icon
         ContainersStructureObj.keyValueStyleMaker(ButtonTag,{
            'borderRadius': "50%",
            // 'height':"52px",
            // 'width':"52px",
            // 'lineHeight':"32px",
            background: props.background,
            'fontSize':"25px",
            'color':"#172b4d",
            'fontWeight':"700",
            'fontFamily':"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif",
            'display':"inline-flex",
            'justifyContent':"center",
            'overflow':"hidden",
            'cursor':"pointer",
            'userSelect':"none",
            
            "border-style":"solid",
            "border-color": "white",
            "border-width": "0.15px",
            // "text-decoration": "none",
            width: "3.5rem",
              height: "3.5rem",
              "align-items": "center",
              display: "flex",

              "justify-content": "space-around",
              color: "white",



         })
       
    }) 
    return (
         <div >
         <div id={idIcon}> {} </div>   
          
         <div>{
         //   if(props.text!=undefined){
// return props.text
props.text   
}
      
        </div>  
        </div>
     )
}
