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
       case "updateTask":{
         const newArr=[];
         for(let x=0;x<state.length;x++)
         {
            if(state[x].id==action.id)
            {
               state[x].todo=action.updatedTask;
              
            }
            newArr.push(state[x]);
         }
         return newArr;

        }
       default: return state;
    }
    
    
   }
   
export default reducer;