
import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ( )=> {
   const navigate = useNavigate();
   const [input , setInput]= useState({
      email:"",
      password:""
   });

   const handleLogin= async(e) =>{
      e.preventDefault();
      try{
         const res = await axios.post("http://localhost:9000/user_login" , input);
         //alert(res.data.message);
         //alert(res.data.email)
         localStorage.setItem("token" , res.data.token);
         localStorage.setItem("email" , res.data.email);
         navigate("/");
         alert("You are logged in");

      }
      catch(err){
           alert(err);
      }
   }


    return(
      <div>
      <form onSubmit={handleLogin}>  
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control"
          name ="email" value={input.email} 
          onChange={(e)=>setInput({ ...input , [e.target.name] :e.target.value})}
         id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" 
         name ="password" value={input.password} 
         onChange={(e)=>setInput({ ...input , [e.target.name] :e.target.value})}
        id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <button type="submit" class="btn btn-primary">LOGIN</button>
    </form>
    
           </div>
     )
     
  
  }
  
  export default Login;