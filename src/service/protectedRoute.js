import React from "react";
import { Navigate , Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const auth = localStorage.getItem("token");
    //console.log(auth);
    return auth && auth!== null ? <Outlet/> : <Navigate to ="/login" />
    
}


export default PrivateRoute;