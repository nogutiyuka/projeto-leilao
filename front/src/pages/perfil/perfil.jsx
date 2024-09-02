import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Perfil = () => {

    return (
        <div className="flex flex-wrap align-items-center justify-content-center">
            <div className="border-round">
                <div className="my-5 border-round p-3 flex align-items-center justify-content-center">
                    <Card title="Perfil do Usuário" className="flex flex-column align-items-center justify-content-center text-center w-25rem">
                        <label className="flex pl-1 mt-2">Email:</label>
                        
                        <label className="flex pl-1 mt-2">Nome de usuário:</label>
                        
                        <label className="flex pl-1 mt-2">Senha:</label>

                        <label className="flex pl-1 mt-2">Endereço:</label>

                        <label className="flex pl-1 mt-2">Telefone de contato:</label>

                        <br></br>
                        <Button className="button mt-3" label="Voltar" text link onClick={() => window.open('/login', '_self')} />
                        <Button className="button mt-3" label="Alterar Informações" text link onClick={() => window.open('/alterar-perfil', '_self')} />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Perfil;