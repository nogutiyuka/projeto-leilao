import React from "react";
import "./codigo.css"
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputOtp } from 'primereact/inputotp';
        

const Codigo = () => {

    return(
        <div className="body-code flex flex-wrap align-items-center justify-content-center">
            <div className="border-round">
                <div className="my-5 border-round p-3 flex align-items-center justify-content-center">
                    <Card title="Código de verificação" className="flex flex-column align-items-center justify-content-center text-center">
                    <InputOtp length={5} integerOnly/>
                    <Button label="Confirmar" className="mt-3" text link onClick={() => window.open('/alterar-senha', '_self')}/>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Codigo;


/*Alterar Senha: campos de e-mail, código, nova senha, confirmar senha e opções de cancelar e alterar a senha. */