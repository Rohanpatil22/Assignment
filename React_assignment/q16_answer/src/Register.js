import React from "react";
import { useState } from "react";
import axios from 'axios'

function Register()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

   
    const submitData=async ()=>{
   
        const crendetials={email,password};

        const userLogin= await axios.post("https://reqres.in/api/register",crendetials)
        .then((data)=>{
            console.log(data);
        })
        .then((error)=>{
            console.log(error);
        })

    }
    return(
        <>
        <div className="w-1/4 text-center m-auto mt-20 border-2 border-slate-200  p-3">
            <table className="">
                <tbody>
                <tr>
                    <td className="p-2">
                        <label className="text-zinc-50" htmlFor="emailInp">Email</label>
                    </td>
                    <td className="p-2 pl-10">
                        <input className="bg-zinc-400" type="text" id="emailInp" onChange={(e)=>setEmail(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <label className="text-zinc-50" htmlFor="passInp">Password</label>
                    </td>
                    <td className="p-2 pl-10">
                        <input className="bg-zinc-400" type="text" id="passInp"  onChange={(e)=>setPassword(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" className="pt-8 ">
                        <button className="w-24 p-2 bg-cyan-900 rounded-xl text-white" onClick={()=>submitData()}>Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}


export default Register;