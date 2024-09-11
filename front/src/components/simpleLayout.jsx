//layout para paginas de cadastro e login(só logo)
import React from "react";
import HeaderSimple from "./header/headerSimple";
import FooterSimple from "./footer/footerSimple";

const SimpleLayout = ({ children }) => {
    return (
        <>
            <HeaderSimple></HeaderSimple>
            {children}
            <FooterSimple></FooterSimple>
        </>
    );
}
export default SimpleLayout;