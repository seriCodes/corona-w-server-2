// export function toggleDisplayInTime(id,value, addOrRemove){
//     console.log(value)
//     let elem= document.getElementById(id)
//     setTimeout(()=>{
//         addOrRemove(`${value}`)
//         console.log('setTimeout')
// }
// ,1700)
// }
export function toggleEndClass(id,className){
    console.log(id)
    console.log(className)

    let elem= document.getElementById(id)
    if(elem.classList.contains(className)){

        elem.classList.remove(className)

        setTimeout(()=>{
            elem.classList.add(`display-none`)
            console.log('add')
    }
    ,100)
  
    setTimeout(()=>{
        elem.classList.remove(`display-flex`)
        console.log('remove')
}
,500) 
    }else{

        elem.classList.add("display-flex")
        setTimeout(()=>{elem.classList.add(className)},10)

    }
    // elem.classList.toggle(className)

  
}
export function toggleAppContainerWidth(className){
    let appContainer= document.getElementsByClassName('app-container')[0]
    appContainer.classList.toggle(className)

}
export function toggleDisplayNone(id){
    let elem= document.getElementById(id)
    elem.classList.toggle(`display-none`)

}
export function addDisplayNoneToClassElements(className){
    let elements= document.getElementsByClassName(className)
for (const elem of elements) {
    elem.classList.add(`display-none`)
}
}
export function deleteStyleAttributeFromClassElements(className){
    let elements= document.getElementsByClassName(className)
for (const elem of elements) {
    elem.removeAttribute("style") 
}
}
export function toggleAnimateArrowClass(id){
    let arrowContainer=document.getElementById(id)
    arrowContainer.classList.toggle('arrow-animation')

}

export function postitionPopUpInsideviewport(elem){
    elem.removeAttribute("style")

    let elemPositionRect = elem.getBoundingClientRect();
    console.log('elemPositionRect')

    console.log(elemPositionRect.bottom)
    console.log(window.innerHeight)

let bottomDifference= elemPositionRect.bottom-window.innerHeight;
// let topDifference= elemPositionRect.bottom-window.innerHeight;
let rightDifference= elemPositionRect.right-window.innerWidth;
// let bottomDifference= elemPositionRect.bottom-window.innerHeight;

        // changeElemPositioning(elem,'bottom', bottomDifference)

    if(bottomDifference>0){
        elem.style.bottom=bottomDifference+'px'
    }
    if(rightDifference>0){
        // elem.style.right=rightDifference+'px'
    }
    function changeElemPositioning(elem,position) {
        console.log('position')

        console.log(position)
        var id =  setInterval(()=>{
            console.log(elem.style[position])

            elem.style[position]=elem.style[position]+1+'px'
        },1000,);


    
    }
    // var id =  setInterval(alertFunc,1000,);

    // function alertFunc() {
    //     alert("Hello!");

    //   }
      
    // let arrowContainer=document.getElementById(id)
    // arrowContainer.classList.toggle('arrow-animation')

}

