//header só com a logo para a pagina de login e cadastro.
import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import logo from '../../assets/logoLogin.png';

const HeaderSimple = () => {
    const items = [
        {
            template: (item, options) => {
                return (
                    <img src={logo} alt="logo" style={{ width: 'auto', height: '60px'}}/>
                );
            }
        }
    ];

    return (
        <div className="card">
            <TabMenu model={items} className="flex justify-content-center m-1"/>
        </div>
    )
};

export default HeaderSimple;