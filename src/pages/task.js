import React ,{useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TaskDisplay = ( )=> {
    const  [tasks , setTasks] = useState([]);
    const [render , setRender] = useState(false);
    const [input , setInput] = useState({
        title:"",
        description:"",
        status:""
    });
    useEffect(() =>{
            async function getAllTasks () {
            const res =  await axios.get("http://localhost:9000/get_tasks",{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            setTasks(res.data);
            }
        getAllTasks();

    },[render]);

    const handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            await axios.post("http://localhost:9000/add_task" , input ,
                {
                    headers:{
                        Authorization : `Bearer ${localStorage.getItem("token")}`
                    }
                });
            setRender(true);
            setInput({
               title:"",
               description:"",
               status:""
            })
            alert("New Task Added");
        }
        catch(err){
            alert(err.message);
        }
      

    };

    const handleDelete = async(id) =>{
    try{
        await axios.delete(`http://localhost:9000/delete_task/${id}` ,{
            headers:{
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        });
        const newTaskList = tasks.filter((item)=>{
          return item._id !== id;
        });
        setTasks(newTaskList);
        alert(" Task Deleted");

    }
    catch(err){
        alert(err.message);
    }
     
    }


  return(
   <div className="container">
    <div className="row">
        <div className="col-md-12 mt-2">
          <div style= {{backgroundColor: "blue"}}>
            <h1 className="text-white text-center">MERN APP</h1>
          </div>
        </div>
        <div className="col-md-6">
          Input field

          <form onSubmit={handleSubmit}>
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
           defaultValue={"blah"}
           
           class="form-control" id="InputDescription"/>
           </div>
           <div class="mb-3">
           <label for="InputStatus" class="form-label">Status</label>
           <input type="text" name ="status" value={input.status} 
           onChange={(e)=>setInput({ ...input , [e.target.name] :e.target.value})}
           class="form-control" id="InputStatus"/>
           </div>
           <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="col-md-6">
          Tasks

                  <table class="table">
                      <thead>
                          <tr>
                              
                              <th scope="col">Title</th>
                              <th scope="col">Description</th>
                              <th scope="col">Status</th>
                              <th scope="col">Edit</th>
                              <th scope="col">Delete</th>
                          </tr>
                      </thead>
                      <tbody>
                        {tasks &&tasks.map((task)=>{
                            return (
                                <tr key = {task._id}>
                              
                              <td>{task.title}</td>
                              <td>{task.description}</td>
                              <td>{task.status}</td>
                              <Link to={`/edit/${task._id}`}>
                              <td><button className="btn btn-primary">Edit</button></td>
                              </Link>
                             
                              <td><button onClick={()=>handleDelete(task._id)} className="btn btn-danger">Delete</button></td>
                              
                                </tr>

                            )
                        })}
                          
                      </tbody>
                  </table>
        </div>
       
    </div>
  </div>
  
)}



export default TaskDisplay;