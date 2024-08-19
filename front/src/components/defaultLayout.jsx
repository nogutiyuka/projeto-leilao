import React, { Component } from "react";
import Footer from './footer/footer';
import Header from './header/header';

const DefaultLayout = ({children}) => {
    return(
        <>
        <Header></Header>
            {children}
        <Footer/>
        </>
    );
}
export default DefaultLayout;