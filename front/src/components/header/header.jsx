import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import './header.css';
import logoWeb from '../../assets/logoWeb.png'; 
import { useTranslation } from "react-i18next"; 
import { Avatar } from 'primereact/avatar';
import en from '../../assets/en.png';
import pt from '../../assets/pt.png';

const Header = () => {
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

export default Header;
