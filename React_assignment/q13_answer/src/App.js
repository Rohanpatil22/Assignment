
import {useState} from "react";

function App() {

  const [userInp,setUserInp]=useState('');
  const[result,setResult]=useState(0);
  

  let operations=["+","-","/","*"];

  const getUserInp=(val)=>{
    
    setUserInp(userInp+val);

    // let lastInp=userInp.charAt(userInp.length-1);

    // if(!operations.includes(lastInp))
    // {
    //   let resCal=eval(userInp);
    //   setResult(resCal);
    // }  
  }
  
   const clearUserInp=()=>{

    setUserInp("");
    setResult(0);
   }
  
   const getResult=()=>{
    let lastInp=userInp.charAt(userInp.length-1);
    if(!operations.includes(lastInp))
    {
      
      let resCal=eval(userInp);
      setResult(resCal);
    }  
    
   }
  
  return (
   <>
   <div className="w-1/3 mt-28 m-auto">
     <div className="bg-neutral-900 p-4">
       <div className="bg-neutral-700 text-5xl text-white outline-none w-full h-28 text-right rounded ">
        <div>{userInp}</div>
        <div className="mt-2">{result}</div></div>
       <div className="mt-3">
       <table className="w-full m-auto">
        <tbody>
           <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400" onClick={()=>clearUserInp("")}>C</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>setUserInp(userInp.slice(0,-1))} >Del</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('%')}>%</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('/')}>/</button></td>
            </tr>
            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('7')}>7</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('8')}>8</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('9')}>9</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('*')}>X</button></td>
            </tr>

            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('4')}>4</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('5')}>5</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('6')}>6</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('-')}>-</button></td>
            </tr>

            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('1')}>1</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('2')}>2</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('3')}>3</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('+')}>+</button></td>
            </tr>

            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('00')}>00</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('0')}>0</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('.')}>.</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getResult()} >=</button></td>
            </tr>
            </tbody>
       </table>
       </div>
     </div>
   </div>
   </>
  );
}

export default App;
