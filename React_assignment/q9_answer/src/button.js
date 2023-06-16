import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "./context/themeContext";
import Navbar from "./navbar";
function ButtonComp(){
    const a=useContext(ThemeContext)
    const[buttonName,setButtonName]=useState('Dark Mode');
    if(a.dark===true)
     {
         document.body.style.backgroundColor="black";
       
     }
     else{
        document.body.style.backgroundColor="white";
     }
  const getName=()=>{
        if(a.dark)
        {
            setButtonName('Dark Mode');
        }
        else{
            setButtonName('Light Mode');
        }
    }
    return(
        <>
        <Navbar/>
        <div style={{margin:"15px 10px",display:"flex",justifyContent:"end"}}><button style={{padding:"10px",width:"120px",borderRadius:"12px"}} onClick={event=>{a.ChangeTheme();getName()}}>{buttonName}</button></div>
        </>
    );
}


export default ButtonComp;