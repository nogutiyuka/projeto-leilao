import React, {useState} from "react";
import "./alterarSenha.css"
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Divider } from "primereact/divider";


const AlterarSenha = () => {

    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setComfirmacaoSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");
    const [obrigatorio, setObrigatorio] = useState({
        tamanhoMin: false,
        maiusculo: false,
        minusculo: false,
        numero: false,
        caractereEspecial: false,
    });

    const header = <div className="font-bold mb-3">Digite a senha</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Obrigatório</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li
                    className={obrigatorio.tamanhoMin ? "text-green-500" : "text-red-500"}>
                    Mínimo 6 caracteres
                </li>
                <li
                    className={obrigatorio.maiusculo ? "text-green-500" : "text-red-500"}>
                    Letra maiúscula
                </li>
                <li
                    className={obrigatorio.minusculo ? "text-green-500" : "text-red-500"}>
                    Letra minúscula
                </li>
                <li
                    className={obrigatorio.numero ? "text-green-500" : "text-red-500"}>
                    Número
                </li>
                <li
                    className={obrigatorio.caractereEspecial ? "text-green-500" : "text-red-500"}>
                    Caractere especial
                </li>
            </ul>
        </>
    );

    const onPasswordChange = (e) => {

        const senhaDigitada = e.target.value;

        setSenha(senhaDigitada);
        setObrigatorio({
            tamanhoMin: senhaDigitada.length >= 6,
            maiusculo: /[A-Z]/.test(senhaDigitada),
            minusculo: /[a-z]/.test(senhaDigitada),
            numero: /[0-9]/.test(senhaDigitada),
            caractereEspecial: /[!@#$%^&*(),.?":{}|<>]/.test(senhaDigitada),
        });
    };

    const onPasswordConfirmChange = (e) => {

        const confirmacaoSenha = e.target.value;

        setComfirmacaoSenha(confirmacaoSenha);
        if (senha !== confirmacaoSenha) { setMensagemErro("As senhas digitadas são diferentes!"); }
        else { setMensagemErro(""); }
    };

    return (
        <div className="body-password flex flex-wrap align-items-center justify-content-center">
            <div className="border-round">
                <div className="my-5 border-round p-3 flex align-items-center justify-content-center">
                    <Card title="Alterar Senha" className="flex flex-column align-items-center justify-content-center text-center">
                        <label className="flex pl-1 mt-2">Nova Senha</label>
                        <Password className=" align-items-center justify-content-center text-center w-12 mt-2" inputStyle={{ width: '100%' }} header={header} footer={footer} value={senha} onChange={onPasswordChange} toggleMask />
                        <label className="flex pl-1 mt-2">Confirmar Senha</label>
                        <Password className=" align-items-center justify-content-center text-center w-12 mt-2" feedback="false" inputStyle={{ width: '100%' }} header={header} footer={footer} value={confirmacaoSenha} onChange={onPasswordConfirmChange} toggleMask />
                        {mensagemErro && <p className="text-red-500">{mensagemErro}</p>}
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

