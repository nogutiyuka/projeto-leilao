import React from "react";
import "./login.css";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {

    return (
        <div class="login-background">
            <div class="flex flex-wrap align-items-center justify-content-center">
                <div class="border-round">
                    <div class="my-5 border-round p-3 flex align-items-center justify-content-center">
                        <Card title="Login" className="flex flex-column align-items-center justify-content-center text-center">
                            <label className="flex pl-6 mt-2">Email/Username</label>
                            <InputText className="align-items-center justify-content-center mt-2"></InputText>
                            <label className="flex pl-6 mt-2">Senha</label>
                            <Password feedback={false} className="flex align-items-center justify-content-center text-center mt-2"></Password>
                            <Button className="align-items-center justify-content-center mt-2" link onClick={() => window.open('/', '_blank')}>
                                <a href="/" target="_blank" rel="noopener noreferrer" className="login-button p-button font-bold" >
                                    Login
                                </a>
                            </Button>
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