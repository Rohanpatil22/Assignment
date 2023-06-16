
import ThemeState from "./context/themeState.js";
import ButtonComp from "./button.js";
import React,{ useState } from "react";


function App() {

  return (
  <>
  <ThemeState>
    <ButtonComp></ButtonComp>
  </ThemeState>
 
  
  </>
  );
}

export default App;
