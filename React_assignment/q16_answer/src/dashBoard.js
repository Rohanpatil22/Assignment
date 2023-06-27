import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
function Dashboard(props)
{
    const location=useLocation();
    console.log(location.state.email);
    const[name,setName]=useState("");
    const[job,setJob]=useState("");
    const[userTask,setUserTask]=useState([]);

    const createtask=async()=>{

        const newtask=await axios.post("https://reqres.in/api/users",{name,job})
        .then((info)=>{
           
            if(info.data!="" && info.data!=undefined)
            {
                alert("New task added succesfully.");
                setUserTask([...userTask,info.data]);
            }
        })
        .then((error)=>{
            console.log(error);
        })
    }

    return(
        <>
        <div className="w-full bg-cyan-900 m-auto text-xl text-center mt-10 text-white p-2 ">Dashboard</div>
        <div className="w-1/4 text-center m-auto mt-6 border-2 border-slate-200  p-3 text-center">
            <table className="m-auto">
                <tbody>
                    <tr>
                        <td className="p-2">
                            <label className="text-zinc-50" htmlFor="name">Name</label>   
                        </td>
                        <td className="p-2 pl-10">
                         <input className="bg-zinc-400" type="text" id="name" onChange={(e)=>{setName(e.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            <label className="text-zinc-50" htmlFor="job">Job</label>
                        </td>
                        <td className="p-2 pl-10">
                            <input className="bg-zinc-400" type="text" id="job" onChange={(e)=>{setJob(e.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                    <td colSpan="2" className="pt-8 ">
                        <button className="w-24 p-2 bg-cyan-900 rounded-xl text-white" onClick={()=>createtask()}>Create</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="w-1/2 m-auto mt-20 text-indigo-100">
            <div className="m-auto w-full text-center mb-4 text-xl">User Task Table</div>
            <table className="m-auto border-collapse border border-neutral-50">
                <tr className="border border-neutral-50">
                    <td className="p-2 w-28 text-center border border-neutral-50">Sr No</td>
                    <td className="p-2 w-28 text-center border border-neutral-50">Id</td>
                    <td className="p-2 w-28 text-center border border-neutral-50">Name</td>
                    <td className="p-2 w-28 text-center border border-neutral-50">Job</td>
                </tr>
            {userTask.map((item,index)=>(
                <tr className="border border-neutral-50">
                    <td className="p-2 w-28 text-center border border-neutral-50">{index+1}</td>
                    <td className="p-2 w-28 text-center border border-neutral-50">{item.id}</td>
                    <td className="p-2 w-28 text-center border border-neutral-50">{item.name}</td>
                    <td className="p-2 w-28 text-center border border-neutral-50">{item.job}</td>
                </tr>
                ))}

            </table>
            
        </div>
        </>
    );
}

export default Dashboard;