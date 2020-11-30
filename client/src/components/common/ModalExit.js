import React from 'react'
import {ModalStyler} from '../../functions/ModalStyler'

export const ModalExit = (props) => {
    const ModalStylerObj= new ModalStyler()

    return (
        <div class="Modal-X-button">
        <span class="small-close-Modal" onClick={(e)=>
            {
                // alert("X-button")
                // e.stopImmediatePropagation()

                // e.stopPropagation()
                // alert(idWrapper)
                ModalStylerObj.toggleModal(props.id,e,props.openClass,props.closeClass)
                
    }}>&times;</span>
    </div>
    )
}
