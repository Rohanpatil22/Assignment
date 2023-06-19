import {nanoid} from "nanoid";
import {React,useState,useReducer} from "react";
import reducer from "./reducer.js"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"

 
function App() {
 
  const taskList=[{id:'1',todo:"Need to learn React"},{id:'2',todo:"Have to learn express js"}];
  const[task,setTask]=useState();
  const [state,dispatch]=useReducer(reducer,taskList)
  const handleOnchannge=(event)=>{
    setTask(event.target.value);
  }

  const addTask=()=>{
    if(task!=="" && task!==undefined)
    {
      console.log(task);
      const newTaskobj={
        id:nanoid(),
        todo:task
      }
      dispatch({
          type:"addTask",
          newtask:newTaskobj,
        });
    }
    else{
      console.log(task);
      alert("Please add Task");
    }
   
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
    <div className="m-auto mt-10 w-2/5">
        <input className="p-1 w-4/5 bg-neutral-500" type="text" onChange={handleOnchannge} placeholder="Enter task"/>
        <button className="ml-4 bg-emerald-700 p-2 w-20  rounded-xl text-white mb-10" onClick={addTask}>ADD</button>
    </div>
    <div>
      {state.map((item)=>(
        // <div key={item.id}><input id={item.id} style={{border:"none"}} value={item.todo} readOnly/><button onClick={removeTask(item.id)}>remove</button>
        <div className="text-lg text-white w-2/5 m-auto border-1 bg-cyan-800 mt-2 p-1 flex justify-between pr-6" key={item.id}>{item.todo}<button onClick={()=>removeTask(item.id)}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
      ))

      }
    </div>
    </>
  );
}

export default App;
