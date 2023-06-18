import {nanoid} from "nanoid";
import {React,useState,useReducer} from "react";
import reducer from "./reducer.js"

 
function App() {
 
  const taskList=[{id:'1',todo:"Need to learn React"}];
  const[task,setTask]=useState();
  const [state,dispatch]=useReducer(reducer,taskList)
  const handleOnchannge=(event)=>{
    setTask(event.target.value);
  }

  const addTask=()=>{
    const newTaskobj={
      id:nanoid(),
      todo:task
    }
    dispatch({
        type:"addTask",
        newtask:newTaskobj,
      });
  }

  const removeTask=(num)=>{
    console.log(num);
    dispatch({
      type:"removeTask",
        id:num,
    })
  }
  return (
    <>
    <div>
        <input type="text" onChange={handleOnchannge}/>
        <button onClick={addTask}>ADD</button>
    </div>
    <div>
      {state.map((item)=>(
        // <div key={item.id}><input id={item.id} style={{border:"none"}} value={item.todo} readOnly/><button onClick={removeTask(item.id)}>remove</button>
        <div key={item.id}>{item.todo}<button onClick={removeTask(item.id)}>remove</button>
        </div>
      ))

      }
    </div>
    </>
  );
}

export default App;
