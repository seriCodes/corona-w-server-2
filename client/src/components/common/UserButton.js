import React, {useEffect} from 'react'
import {UserButtonStyler  } from "./UserButtonStyler";

export const UserButton = (props) => {
    const UserButtonStylerObj= new UserButtonStyler()

    useEffect(() => {
        const UserButtonTag=document.getElementById("UserButton-Wrapper")

        UserButtonStylerObj.makeCircle(UserButtonTag)
       
    })
    
    


    
    return (
        <div id="UserButton-Wrapper">
         <span>{props.name} {props.children}</span>   
        </div>
    )
}
