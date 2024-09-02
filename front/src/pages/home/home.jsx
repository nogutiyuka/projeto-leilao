import React from "react";
import style from "./home.module.css";
import Logout from "../../components/logout/logout";
import { useTranslation } from "react-i18next";
import { TabMenu } from 'primereact/tabmenu';

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);

    }
    const items = [
        { label: 'Página Inicial', icon: 'pi pi-home' },
        { label: 'Transações', icon: 'pi pi-chart-line' },
        { label: 'Produtos', icon: 'pi pi-list' },
        { label: 'Menssagens', icon: 'pi pi-inbox' }
    ];
    return (
        <div>
            <div className="card">
                <TabMenu model={items} />
            </div>
            <h1 className={`${style.textColor} w-full`}>{t('welcome')} Página Inicial</h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('pt')}>Português</button>
            <Logout />
        </div>

    );
}

export default Home;