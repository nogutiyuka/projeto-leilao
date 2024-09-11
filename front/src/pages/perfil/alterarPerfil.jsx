import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { useTranslation } from "react-i18next";


const AlterarPerfil = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="flex flex-wrap align-items-center justify-content-center">
            <div className="border-round">
                <div className="my-5 border-round p-3 flex align-items-center justify-content-center">
                    <Card title={t('edit-profile')} className="flex flex-column align-items-center justify-content-center text-center w-25rem">
                        <label className="flex pl-1 mt-2">{t('new-email')}</label>
                        <InputText />
                        <label className="flex pl-1 mt-2">{t('new-username')}</label>
                        <InputText />
                        <label className="flex pl-1 mt-2">{t('zip-code')}</label>
                        <InputText />
                        <label className="flex pl-1 mt-2">{t('new-password')}</label>
                        <InputText />
                        <label className="flex pl-1 mt-2">{t('confirm-new-password')}</label>
                        <InputText />
                        <label className="flex pl-1 mt-2">{t('phone')}</label>
                        <InputText />
                        <br />
                        <Button className="button mt-3" label={t('cancel')} text link onClick={() => window.open('/perfil', '_self')} />
                        <Button className="button mt-3" label={t('save')} text link />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AlterarPerfil;