import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = ( )=> {
   const navigate = useNavigate();
   const uToken = localStorage.getItem("token");
   const uEmail = localStorage.getItem("email");
   //alert(uToken , uEmail)

     const handleLogout = () =>{
       localStorage.removeItem("token");
       localStorage.removeItem("email");
       alert("Logout Successful");
       navigate("/login");
     }



    return(
       <div>
         <Link to ="/">
         MERN APP
         </Link>
      
         <br></br>
          <div>
             {uToken && uToken !== null ? (
                <>
                   <button className="btn btn-primary">Welcome {uEmail}</button>
                   <button onClick={handleLogout} className="btn btn-primary">Logout</button>

                   <Link to={"/task"}>
                      <button className="btn btn-primary">CLICK HERE TO ADD /VIEW TASKS</button>
                   </Link>
                </>
             ) : (
                <>
                   <Link to={"/login"}>
                      <button>Login</button>
                   </Link>

                   <Link to={"/register"}>
                      <button>Register</button>
                   </Link>
                </>
             )}
          </div>
         

       </div>
     )
     
  
  }
  
  export default Header;
 