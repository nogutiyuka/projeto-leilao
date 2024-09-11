import React from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="p-grid">
                {/* About Us Section */}
                <div className="p-col-12 p-md-4">
                    <h5>{t('aboutUsTitle')}</h5> {/* Translated title */}
                    <p>{t('aboutUsDescription')}</p> {/* Translated description */}
                </div>

                {/* Quick Links Section */}
                <div className="p-col-12 p-md-4">
                    <h5>{t('quickLinksTitle')}</h5> {/* Translated title */}
                    <ul className="footer-links">
                        <li><a href="./">{t('homeLink')}</a></li>
                        <li><a href="#about">{t('aboutLink')}</a></li>
                        <li><a href="#services">{t('servicesLink')}</a></li>
                        <li><a href="#contact">{t('contactLink')}</a></li>
                        <li><a href="./perfil">{t('profileLink')}</a></li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="p-col-12 p-md-4">
                    <h5>{t('followUsTitle')}</h5> {/* Translated title */}
                    <div className="social-icons">
                        <Button icon="pi pi-facebook" className="p-button-rounded p-button-text" />
                        <Button icon="pi pi-twitter" className="p-button-rounded p-button-text" />
                        <Button icon="pi pi-instagram" className="p-button-rounded p-button-text" />
                    </div>
                </div>
            </div>

            <Divider />

            {/* Footer Bottom */}
            <div className="footer-bottom p-text-center">
                <p>&copy; {new Date().getFullYear()} {t('companyName')}. {t('allRightsReserved')}</p>
            </div>
        </div>
    );
};

export default Footer;
