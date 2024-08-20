import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRouter = () =>{

    const isAuthenticated = localStorage.getItem("token")?true:false;
    //const isAuthenticated = !!localStorage.getItem("token"); mesma coisa da linha de cima

    return(isAuthenticated?<Outlet/>:<Navigate to='/login'/>); //n vai apresentar nada visual para o usuário

}
export default PrivateRouter;