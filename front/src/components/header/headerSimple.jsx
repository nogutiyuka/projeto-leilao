//header só com a logo para a pagina de login e cadastro.
import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import logo from '../../assets/logoLogin.png';
import en from '../../assets/en.png';
import pt from '../../assets/pt.png';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';

const HeaderSimple = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const items = [
        {
            template: (item, options) => {
                return (
                    <img src={logo} alt="logo" style={{ width: 'auto', height: '60px' }} />
                );
            }
        }
    ];

    return (
        <div className="card inline-flex" style={{ width: '100%' }}>
            <TabMenu model={items} className="flex justify-content-center m-1 ml-5 mr-0" />
            <div className="p-d-flex p-ai-center">
                <div className="p-3">
                    <img
                        src={en}
                        alt="English"
                        onClick={() => changeLanguage('en')}
                        style={{ width: '30px', height: 'auto', cursor: 'pointer', marginRight: '10px', marginLeft: '-80px' }}
                    />
                    <img
                        src={pt}
                        alt="Português"
                        onClick={() => changeLanguage('pt')}
                        style={{ width: '30px', height: 'auto', cursor: 'pointer' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderSimple;