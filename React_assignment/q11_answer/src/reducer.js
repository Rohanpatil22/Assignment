import {useReducer} from "react";

function reducer(state,action){
    console.log(action.type);
    switch(action.type){
       
       case "addTask":{
        return [...state,action.newtask];
      
       }
       case "removeTask":{
        return state.filter((item)=>item.id!==action.id);
        
       }
       default: return state;
    }
    
    
   }
   
export default reducer;