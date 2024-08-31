import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ( )=> {

   const navigate = useNavigate();
   const [input , setInput]= useState({
      email:"",
      password:""
   })

   const handleSubmit= async(e) =>{
      e.preventDefault();
      try{
          await axios.post("http://localhost:9000/user_register" , input);
         navigate("/login");
         alert("You are registered")

      }
      catch(err){
           alert(err);
      }

   }

   return(
  <div>
  <form onSubmit={handleSubmit}>  
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
  <button type="submit" class="btn btn-primary">REGISTER</button>
</form>

       </div>
     )
     
  
  }
  
  export default Register;