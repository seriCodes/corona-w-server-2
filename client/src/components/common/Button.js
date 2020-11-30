import React from 'react'

export const Button = (props) => {
    return (
        <div value={props.value} id={props.id} className={"button"+" "+props.class1+" " +props.class2+" " +props.class3} onClick={
            (e)=>{ 
                e.stopPropagation()
            props.callBack()
            // (e) 
        }
        }
        style={props.style}
        onMouseOver={props.onMouseOver}
        customInformation={props.customInformation} 
       title={props.title} 
       value={props.value}>
       
            {props.children}
        </div>
    )
}
