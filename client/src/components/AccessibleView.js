import React from 'react'
import {Button} from './common/Button'

export const AccessibleView = () => {

    const makeAccessibleView=()=>{
alert("todo")
    }
    return (
        <Button  class1="button-default-view "  callBack={makeAccessibleView}>
            <span>תצוגה נגישה
            </span>
        </Button>
    )
}
