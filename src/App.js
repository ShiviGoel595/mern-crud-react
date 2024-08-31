import React from "react";
import {Route ,Routes} from "react-router-dom" ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import Edit from "./pages/edit";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./component/header";
import PrivateRoute from "./service/protectedRoute";
import TaskDisplay from "./pages/task";


const App = ( )=> {
  return(
    <>
    <Header/>
    <Routes>
    <Route path="/" element = {<Home/>}></Route>
   
    <Route path="/login" element = {<Login/>}></Route>
    <Route path="/register" element = {<Register/>}></Route>
   
    <Route path="/" element = {<PrivateRoute/>}>
    <Route path="/edit/:id" element = {<Edit/>}></Route>
    <Route path="/task" element = {<TaskDisplay/>}></Route>
    </Route>
  </Routes>
  </>
   )
   

}

export default App;

/*<BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/edit/:id" element = {<Edit/>}></Route>
      </Routes>
   </BrowserRouter> */