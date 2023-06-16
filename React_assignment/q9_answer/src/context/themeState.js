import React, { useState } from "react";
import ThemeContext from "./themeContext";

function ThemeState(props){
 
    const [dark,setDark]=useState(false);

    const ChangeTheme=()=>{

        if(dark)
        {
            setDark(false);
        }
        else{
            setDark(true);
        }
    }
    return(
        <>
        <ThemeContext.Provider value={{dark,ChangeTheme}}>
        {props.children}
        </ThemeContext.Provider>
        </>
    );

}

export default ThemeState;