import {nanoid} from "nanoid";
import {React,useState,useReducer,useRef} from "react";
import reducer from "./reducer.js"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
 
function App() {
 
  const taskList=[{id:'1',todo:"Need to learn React"},{id:'2',todo:"Have to learn express js"}];
  const[task,setTask]=useState('');
  const [state,dispatch]=useReducer(reducer,taskList)
  const InputRef=useRef();
  const [buttonName,setButtonName]=useState('ADD');
  const [updateTaskId,setupdateTaskId]=useState();
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

  
  const editTask=(info)=>{
    setTask(info.todo);
    InputRef.current.focus();
    setButtonName('UPDATE');
    setupdateTaskId(info.id);

  }

  const updateTask=()=>{
    console.log("update function");
    dispatch({
      type:"updateTask",
      id:updateTaskId,
      updatedTask:task,
    });
   setTask('');
    setButtonName('ADD');

  }
  return (
    <>
    <div className="m-auto mt-10 w-2/5">
        <input id="taskInp" className="p-1 w-4/5 bg-neutral-500" type="text" value={task} onChange={handleOnchannge}  placeholder="Enter task" ref={InputRef}/>
        <button className="ml-4 bg-emerald-700 p-2 w-20  rounded-xl text-white mb-10" onClick={buttonName==='ADD'?addTask:updateTask}>{buttonName}</button>
    </div>
    <div>
      {state.map((item)=>(
        // <div key={item.id}><input id={item.id} style={{border:"none"}} value={item.todo} readOnly/><button onClick={removeTask(item.id)}>remove</button>
        <div className="text-lg text-white w-2/5 m-auto border-1 bg-cyan-800 mt-2 p-1 flex justify-between pr-6" key={item.id}>{item.todo}<div><button className="mr-4" onClick={()=>removeTask(item.id)}><FontAwesomeIcon icon={faTrash}/></button><button onClick={()=>editTask(item)}><FontAwesomeIcon icon={faPenToSquare}/></button></div>
        </div>
      ))

      }
    </div>
    </>
  );
}

export default App;
