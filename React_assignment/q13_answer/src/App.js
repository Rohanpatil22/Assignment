
import {useState} from "react";

function App() {

  const [userInp,setUserInp]=useState('');
  const[result,setResult]=useState(0);
  const[currOps,setCurrOps]=useState('');

  let operations=["+","-","/","*"];

  const getUserInp=(val)=>{
    console.log(val);
    let prevInp=userInp;
    if(operations.includes(val))
    {
      setCurrOps(val);
    }
    
      setUserInp(prevInp+val);
    let num=parseInt(val);
   // console.log(num);
    getResult(num);
    
    
  }

  let lastData=0;
  
  const getResult=(data)=>{
   lastData+=data;
   
   if(currOps!=='')
   {
   let total=parseInt(userInp);
   console.log(total)
   console.log(typeof(total))
   console.log(total);
    setResult(total);

   }
   
    
  }
  return (
   <>
   <div className="w-1/3 mt-28 m-auto">
     <div className="bg-neutral-900 p-4">
       <div className="bg-neutral-700 text-5xl text-white outline-none w-full h-24 text-right rounded ">
        <div>{userInp}</div>
        <div>{result}</div></div>
       <div className="mt-3">
       <table className="w-full m-auto">
        <tbody>
           <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp("")}>C</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 ">Del</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 ">%</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400">/</button></td>
            </tr>
            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('7')}>7</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 " onClick={()=>getUserInp('8')}>8</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('9')}>9</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400" onClick={()=>getUserInp('*')}>X</button></td>
            </tr>

            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400">4</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400">5</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 ">6</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400">-</button></td>
            </tr>

            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400 ">1</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 ">2</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400">3</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400">+</button></td>
            </tr>

            <tr>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl w-24 rounded-lg hover:bg-stone-400 ">00</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 ">0</button></td>
              <td><button className="bg-neutral-700 text-white p-6  m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400 ">.</button></td>
              <td><button className="bg-neutral-700 text-white p-6 m-1 text-3xl  w-24 rounded-lg hover:bg-stone-400">=</button></td>
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
