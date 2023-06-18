import {useState} from "react"
function App() {

  const[count,setCount]=useState(0);

  const increseCount=()=>{
    setCount(count+1);
    }

  const decreseCount=()=>{
    setCount(count-1);
  }
  return (
    <>
    <div style={{textAlign:"center",marginTop:"20px",fontWeight:"bold",fontSize:"30px"}}>{count}</div>
    <div style={{textAlign:"center",marginTop:"20px"}}>
      <button onClick={increseCount} style={{backgroundColor:"#1A8983",color:"white",padding:"8px",width:"100px",borderRadius:"10px",border:"none",fontSize:"15px"}}>Increase +1</button>
      <button onClick={decreseCount} style={{backgroundColor:"#1A8983",color:"white",padding:"8px",width:"100px",borderRadius:"10px",border:"none",marginLeft:"10px",fontSize:"15px"}}>Decrease -1</button>
    </div>
    </>
  );
}

export default App;
