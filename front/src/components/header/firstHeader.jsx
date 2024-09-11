//header para a pagina nao logada
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import './header.css';
import logoWeb from '../../assets/logoWeb.png'; 
import { useTranslation } from "react-i18next"; 
import { Avatar } from 'primereact/avatar';

const FirstHeader = () => {
    const { t, i18n } = useTranslation();
    const [visible, setVisible] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const items = [
        { label: t('dashboard'), icon: 'pi pi-home', url: '/'},
        { label: t('auction'), icon: 'pi pi-chart-line' },
        { label: t('products'), icon: 'pi pi-list' },
        { label: t('messages'), icon: 'pi pi-inbox' }
    ];

    const toggleMenu = () => {
        setVisible(!visible);
    };

    return (
        <>
            {/* Web Menu */}
            <div className="web-menu">
                <div className="logo-container">
                    <img src={logoWeb} alt="Logo" className="logo" />
                </div>
                <TabMenu model={items} />
                
                <div className="language-switcher p-d-flex">
                    {/* Use PrimeReact's button class to match styles */}
                    <Button 
                        label="English" 
                        className="p-button-text p-mr-2" 
                        onClick={() => changeLanguage('en')} 
                    />
                    <Button 
                        label="Português" 
                        className="p-button-text" 
                        onClick={() => changeLanguage('pt')} 
                    />
                </div>

                <div className="avatar-container" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <a href="./perfil">
                        <Avatar icon="pi pi-user" shape="circle" style={{ backgroundColor: '#2196F3', color: '#ffffff', marginLeft: '1rem' }} />
                    </a>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <Button 
                icon="pi pi-bars" 
                className="mobile-menu-button" 
                onClick={toggleMenu} 
                aria-controls="mobile-menu"
                aria-haspopup
            />

            {/* Mobile Sidebar Menu */}
            {visible && (
                <div className="mobile-sidebar">
                    <Button 
                        icon="pi pi-times" 
                        className="close-button" 
                        onClick={toggleMenu}
                        aria-label="Close Menu"
                    />
                </div>
            )}
        </>
    );
};

export default FirstHeader;
