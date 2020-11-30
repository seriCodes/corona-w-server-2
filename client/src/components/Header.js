import React from 'react';
import {HamburgerButton} from './HamburgerButton';
import {Logo} from './Logo';
import {AccessibleView } from './AccessibleView';
import {Button} from './common/Button';

import {toggleEndClass, toggleAppContainerWidth } from '../functions/reveal-elemnts';


// import { Link } from 'react-router-dom';

// ../entitiesImplementation/headerLinks';

//         



export const Header = () => {
    console.log('headerLinks')

    
 
    return (
        <header class="main-header-container">

        <div class="header-start">
<Button callBack={()=>{
    toggleEndClass("side-bar", 'side-bar-end')
    toggleAppContainerWidth('side-bar-open')

}
}>
        <HamburgerButton></HamburgerButton>
        </Button>
          <Logo></Logo> 
          </div>

 

 <div class="header-ending">

 <div  class="title-container">
 <a  class="title" href="#">נגיף הקורונה בישראל - תמונת מצב כללית</a>

 <div  class="sub-title"> 
 <span  class="">עדכון אחרון: </span>
 
 <span >21 באוקטובר 2020
            |
            2:22</span> 

            </div> 
            </div> 

            <AccessibleView></AccessibleView>

            </div>

    </header>
    )
}
