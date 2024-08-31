import React ,{ useEffect ,useState} from "react";
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";
//import {BrowserRouter ,Route ,Routes} from "react-router-dom"
const Edit = ( )=> {;
  const { id }  = useParams();
  const navigate = useNavigate();
  const [input , setInput] = useState({
    title:"",
    description:"",
    status:""
    });

  useEffect(() =>{
    //const getAllTasks =async()=> {
    //const res =  await axios.get(`http://localhost:9000/get_task/${id}` , input);
    //setInput(res.data);
    //}
    //getAllTasks();

});

/*const inputHandler = (e) =>{
setInput({ ...input , [e.target.name] :e.target.value })
};*/

const handleEditData = async(e) =>{
  try{
    e.preventDefault();
    await axios.put(`http://localhost:9000/update_task/${id}`,input , {
      headers:{
          Authorization : `Bearer ${localStorage.getItem("token")}`
      }
  });
    alert("task updated");
    navigate("/task");
  }
  catch(err){
    alert(err.message);
  }
 
}

  return (
    
       <div className="container">
        <div className="row">
            <div className="col-md-12 mt-2">
              <div style= {{backgroundColor: "blue"}}>
                <h1 className="text-white text-center">MERN APP</h1>
              </div>
            </div>
        <div className="col-md-6">
          <h5>ENTER NEW VALUES HERE TO UPDATE</h5>

          <form onSubmit = {handleEditData}>
          <div class="mb-3">
           <label for="InputTitle" class="form-label">Title</label>
           <input type="text" name ="title" value={input.title} 
          onChange={(e)=>setInput({ ...input , [e.target.name] :e.target.value})}
           class="form-control" id="InputTitle"/>
           </div>
           <div class="mb-3">
           <label for="InputDescription" class="form-label">Description</label>
           <input type="text" name ="description" value={input.description} 
           onChange={(e)=>setInput({ ...input , [e.target.name] :e.target.value})} 
           
           
           class="form-control" id="InputDescription"/>
           </div>
           <div class="mb-3">
           <label for="InputStatus" class="form-label">Status</label>
           <input type="text" name ="status" value={input.status} 
           onChange={(e)=>setInput({ ...input , [e.target.name] :e.target.value})}
           class="form-control" id="InputStatus"/>
           </div>
            <button type="submit" class="btn btn-primary">Update</button>
          </form>
        </div>
           <button onClick={()=>navigate("/")}
           className="btn btn-info mt-2">Go To Home</button>
        </div>
      </div>
      
    )}



export default Edit;