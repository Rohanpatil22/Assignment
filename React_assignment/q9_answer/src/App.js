import Navbar from "./navbar.js"
import React,{ useState } from "react";
function App() {

  const theme=React.createContext();
  const[dark,setDark]=useState('false');

  const getTheme=()=>{
    if(dark){
      setDark('true');
    }
    else{
      setDark('false');
    }
  }
  return (
  <>
  <theme.Provider themeColor={dark}>
  <Navbar/>
  </theme.Provider>
  <div>
    <buttton onclick="getTheme">Change Theme</buttton>
  </div>
  
  </>
  );
}

export default App;
