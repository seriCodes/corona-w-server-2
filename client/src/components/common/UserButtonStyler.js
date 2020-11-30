class UserButtonStyler{
    constructor(){

    }
    makeCircle(elem){
        elem.style.borderRadius = "100%";
        elem.style.height="32px";
        elem.style.width="32px";
        elem.style.lineHeight="32px";
        elem.style.fontSize="14px";
        elem.style.color = "#172b4d";
        elem.style.fontWeight = "700";
        elem.style.fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif";
        elem.style.display="inline-flex";
        elem.style.justifyContent="center";
        // elem.style.opacity="1";
        elem.style.overflow="hidden";
        elem.style.cursor = "pointer";
        elem.style.userSelect = "none";


        
        // : 32px;

        elem.style.background="#dfe1e6"
        // elem.style.backgroundPosition="50%;"


        console.log("make circle",elem)
    }
}

export {UserButtonStyler}