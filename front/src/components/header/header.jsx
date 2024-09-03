import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { TabMenu } from 'primereact/tabmenu';
import './header.css';
import logoWeb from '../../assets/logoWeb.png'; // Update path if needed

export default function Header() {
    const [visible, setVisible] = useState(false);

    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
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
                    <div className="mobile-logo-container">
                        <img src={logoWeb} alt="Logo" className="mobile-logo" />
                    </div>
                    <Menu model={items} className="mobile-menu" />
                </div>
            )}
        </>
    );
}
