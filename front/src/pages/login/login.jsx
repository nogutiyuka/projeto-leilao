import React, { useState } from "react";
import "./login.css";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (input) => {
        setUsuario({ ...usuario, [input.target.name]: input.target.value });
    }

    const login = () => {
        //chamada para o back-end para verificar as credenciais
        if (usuario.email == "frankwco@gmail.com" && usuario.password == "123") {
            let token = "token do backend"; //let variavel local
            localStorage.setItem("token", token);
            localStorage.setItem("email", usuario.email);
            navigate("/");
        }else{
            alert("usuário ou senha incorretos");
        }
    }

    return (
        <div class="login-background">
            <div class="flex align-items-center justify-content-center">
                <div class="border-round">
                    <div class="my-5 border-round p-3">
                        <Card title="Login" className="flex align-items-center text-center">
                            <label className="flex pl-6 mt-2">Email</label>
                            <InputText onChange={handleChange} name="email" id="email" className="align-items-center mt-2"></InputText>
                            <label className="flex pl-6 mt-2">Senha</label>
                            <Password onChange={handleChange} name="password" id="password" feedback={false} className="flex justify-content-center mt-2"></Password>
                            <Button label="Login" className="align-items-center mt-2" link onClick={login}/>
                            <br></br>
                            <Button label="Novo Cadastro" text className="button mt-3" link onClick={() => window.open('/novo-cadastro', '_blank')} />
                            <Button label="Recuperar Senha" text className="button mt-3" link onClick={() => window.open('/recuperar-senha', '_blank')} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;