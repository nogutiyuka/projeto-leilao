import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './login.css';
import back from '../../assets/arrow.png';

const Login = () => {
    const { t } = useTranslation();
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (input) => {
        setUsuario({ ...usuario, [input.target.name]: input.target.value });
    }

    const login = () => {
        // Backend call to verify credentials
        if (usuario.email === "frankwco@gmail.com" && usuario.password === "123") {
            let token = "token do backend"; // Local variable
            localStorage.setItem("token", token);
            localStorage.setItem("email", usuario.email);
            navigate("/");
        } else {
            alert("Usuário ou senha incorretos");
        }
    }

    return (
        <div className="body-login flex align-items-center justify-content-center">
            <div className="border-round">
                <div className="my-5 border-round p-3">
                    <Card title="Login" className="body-card align-items-center text-center relative">
                        <div className="absolute top-0 left-0 p-4">
                            <img src={back} className="w-4 h-auto cursor-pointer" onClick={() => window.open('/home', '_self')} />
                        </div>
                        <InputText onChange={handleChange} name="email" id="email" className="align-items-center mt-2" placeholder={t('email')} />
                        <Password onChange={handleChange} name="password" id="password" feedback={false} className="flex justify-content-center mt-2" placeholder={t('password')} toggleMask />
                        <Button label={t('button.login')} className="align-items-center mt-2" style={{ backgroundColor: '#9374e1', color: '#fff' }} link onClick={login} />
                        <br />
                        <Button label={t('forgot')} text className="p-button-sm p-button-text p-m-1" style={{ textDecoration: 'underline' }} link onClick={() => window.open('/recuperar-senha', '_blank')} />
                        <br />
                        <label className="flex justify-content-center mt-6">{t('forgot-message')}</label>
                        <Button label={t('new-account')} text className="button mt-1" style={{ backgroundColor: '#9374e1', color: '#fff' }} link onClick={() => window.open('/novo-cadastro', '_self')} />
                    </Card>
                </div>
            </div>
        </div>

    );
}

export default Login;
