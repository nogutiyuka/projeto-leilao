import React from "react";
import "./alterarSenha.css"
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
        

const AlterarSenha = () => {

    return(
        <div className="flex flex-wrap align-items-center justify-content-center">
            <div className="border-round">
                <div className="my-5 border-round p-3 flex align-items-center justify-content-center">
                    <Card title="Alterar Senha" className="flex flex-column align-items-center justify-content-center text-center">
                        <label className="flex pl-1 mt-2">Email</label>
                        <InputText className="align-items-center justify-content-center w-12 mt-2"></InputText>
                        <label className="flex pl-1 mt-2">Código</label>
                        <InputText className="align-items-center justify-content-center w-12 mt-2"></InputText>
                        <label className="flex pl-1 mt-2">Nova Senha</label>
                        <InputText className="align-items-center justify-content-center w-12 mt-2"></InputText>
                        <label className="flex pl-1 mt-2">Confirmar Senha</label>
                        <InputText className="align-items-center justify-content-center w-12 mt-2"></InputText>
                        <br></br>
                        <Button className="button mt-3" label="Alterar Senha" text link onClick={() => window.open('/login', '_self')} />
                        <Button className="button mt-3" label="Cancelar" text link onClick={() => window.open('/login', '_self')} />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AlterarSenha;


/*Alterar Senha: campos de e-mail, código, nova senha, confirmar senha e opções de cancelar e alterar a senha. */