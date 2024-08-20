import React, { useRef } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    /**---------------------------------------------------- */

    return (
        <>
            <Button onClick={() => {
                if(window.confirm("Tem certeza de que deseja sair?")) logout() }} 
                label="Sair"></Button>
        </>
    );
}

export default Logout;