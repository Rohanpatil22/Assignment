import React from "react";
import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <>
        <div className="flex justify-center items-center gap-20 text-white mt-4  ">
            {/* <Link to="/dashboard"><div className="text-xl">Dashboard</div></Link> */}
            <div>
               <Link to="/"><button className="mr-3 bg-cyan-900 p-2 w-28 rounded-xl">Login</button></Link>
               <Link to="/register"><button className="bg-cyan-900 p-2 w-28 rounded-xl">Register</button></Link> 
            </div>
        </div>
        
        </>
    )
}

export default Navbar;