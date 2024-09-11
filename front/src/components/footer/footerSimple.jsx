import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';

const FooterSimple = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-content-center">
            <p>&copy; {new Date().getFullYear()} {t('companyName')}. {t('allRightsReserved')}</p>
        </div>
    );
};

export default FooterSimple;
