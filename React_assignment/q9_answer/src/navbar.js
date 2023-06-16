import React, { useContext } from "react";
import ThemeContext from "./context/themeContext";

function NavBar(){
    const b=useContext(ThemeContext);
    
    return(
        <>
        <div style={b.dark?{display:"flex",justifyContent:"center",gap:"80px",marginTop:"15px",color:"white"}:{display:"flex",justifyContent:"center",gap:"80px",marginTop:"15px"}}>
            <div>HOME</div>
            <div>ABOUT US</div>
            <div>CONTACT US</div>
            <div>LOGIN</div>
        </div>
        </>
    );
}

export default NavBar;