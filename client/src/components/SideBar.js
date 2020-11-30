import React, {useState, useEffect} from 'react'
 
import {Button} from './common/Button'
 
  // import {v1 as uuidv1} from "uuid"; display-none
 
export const SideBar = (props) => {
 const devAlert=()=>{
alert("not active")
 }
    return (
        <div id={"side-bar"} class="side-bar-start   display-none">
        <div class="side-bar-buttons-container">
 <Button class1={"side-bar-butt icon active"} callBack={devAlert}>

 <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="עומסים" transform="translate(-1388.000000, -158.000000)" stroke="currentColor" stroke-width="2">
            <path d="M1398,171.5 L1398,182 L1389,182 L1389,171.5 L1398,171.5 Z M1411,174 L1411,182 L1402.5,182 L1402.5,174 L1411,174 Z M1411,159 L1411,169.5 L1402.5,169.5 L1402.5,159 L1411,159 Z M1398,159 L1398,167 L1389,167 L1389,159 L1398,159 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>
 
 <span>מצב כללי</span>
</Button>

<Button class1={"side-bar-butt"} callBack={devAlert} ><span>אודות</span>
</Button>

<Button class1={"side-bar-butt"} callBack={devAlert} ><span>תנאי שימוש</span>
</Button>
<Button class1={"side-bar-butt"} callBack={devAlert} ><span>מדריך למשתמש</span>
</Button>

</div>
        </div>
    )
}
