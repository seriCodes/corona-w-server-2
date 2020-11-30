import React , {useEffect}from 'react'
import {ContainersStructure} from "../ContainersStructure";

export const StickyPicture = (props) => {
    const ContainersStructureObj= new ContainersStructure()

    useEffect(()=>{
        let stickyElement= document.getElementById(props.id)
        ContainersStructureObj.keyValueStyleMaker(stickyElement,{
            position: "sticky",
            top: 0,
            left:0,
            backgroundImage:"url('https://assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png')",
            'backgroundSize':"100%",
            'backgroundRepeat':'no-repeat',
            // "background-color": "yellow",
            padding: "50px",
            "height":"17rem",
            // "100%",
            "font-size": "20px",
          
        })
        setInterval(()=>{
            // let currentAd= new URL(stickyElement.style.backgroundImage)
            // console.log('currentAd', currentAd)
            let randomNum0To5=parseInt(Math.random()*5);
// console.log("randomNum",parseInt(randomNum))
            switch(randomNum0To5 ){
 case 0:
                stickyElement.style.backgroundImage="url('https://assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png')"
break;
            
            case 1: stickyElement.style.backgroundImage="url(https://talpiot-hitech.com/wp-content/uploads/2019/02/לוגו-סופי.png)"
            break;
            case 2: stickyElement.style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/he/thumb/4/4b/Vegan_friendly_logo.svg/768px-Vegan_friendly_logo.svg.png)"
            break;
            case 3: stickyElement.style.backgroundImage="url(https://dsz7vodgjx60a.cloudfront.net/wp-content/uploads/2015/09/bil-jordanlogo.jpg)"
            break;
            default: 

            }
            // 
         },4000)
    })


    return (
        <div id={props.id}>
    {props.text} 
        </div>
    )
}
