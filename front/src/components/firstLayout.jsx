//layout para pagina não logada
import React, { Component } from "react";
import Footer from './footer/footer';
import FirstHeader from "./header/firstHeader";

const FirstLayout = ({children}) => {
    return(
        <>
        <FirstHeader></FirstHeader>
            {children}
        <Footer/>
        </>
    );
}
export default FirstLayout;