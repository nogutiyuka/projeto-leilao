import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

const AlterarPerfil = () => {

    return (
        <div className="flex flex-wrap align-items-center justify-content-center">
            <div className="border-round">
                <div className="my-5 border-round p-3 flex align-items-center justify-content-center">
                    <Card title="Alterar Perfil" className="flex flex-column align-items-center justify-content-center text-center w-25rem">
                        <label className="flex pl-1 mt-2">Novo Email:</label>
                        <InputText></InputText>
                        <label className="flex pl-1 mt-2">Novo Nome de usuário:</label>
                        <InputText></InputText>
                        <label className="flex pl-1 mt-2">Nova Senha:</label>
                        <InputText></InputText>
                        <label className="flex pl-1 mt-2">Confirmar Nova Senha:</label>
                        <InputText></InputText>
                        <br></br>
                        <Button className="button mt-3" label="Voltar" text link onClick={() => window.open('/perfil', '_self')} />
                        <Button className="button mt-3" label="Salvar" text link/>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AlterarPerfil;