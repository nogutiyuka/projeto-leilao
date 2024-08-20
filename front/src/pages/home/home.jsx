import React from "react";
import "./home.css"
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/logout/logout";

const Home = () => {
    
    return(
        <div>
            <h1>Página Inicial</h1>
            <Logout/>
        </div>
        
    );
}

export default Home;