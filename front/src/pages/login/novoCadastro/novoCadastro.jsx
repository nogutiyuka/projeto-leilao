import React, {useRef} from "react";
import "./novoCadastro.css"
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
        

const NovoCadastro = () => {
    const msgs = useRef(null);

    const cadastrar = () => {
        msgs.current.show([
            { severity: 'success', summary: '', detail: 'Sucesso', sticky: false, closable: true, life:2000}
        ]);
    };

    return(
        <div className="login-background">
            <div className="flex flex-wrap align-items-center justify-content-center">
                <div className="border-round">
                    <div className="my-5 border-round p-3 flex align-items-center justify-content-center">
                        <Card title="Novo Cadastro" className="flex flex-column align-items-center justify-content-center text-center w-25rem">
                            <label className="flex pl-1 mt-2">Email</label>
                            <InputText className="align-items-center justify-content-center w-full mt-2"></InputText>
                            <label className="flex pl-1 mt-2">Username</label>
                            <InputText className="align-items-center justify-content-center w-12 mt-2"></InputText>
                            <label className="flex pl-1 mt-2">Senha</label>
                            <Password className=" align-items-center justify-content-center text-center w-12 mt-2" toggleMask/>
                            <br></br>
                            <Button className="button mt-3" label="Cadastrar" text link onClick={() => cadastrar()}/>
                            <Button className="button mt-3" label="Cancelar" text link onClick={() => window.open('/login', '_self')}/>
                            <Messages ref={msgs}/>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovoCadastro;