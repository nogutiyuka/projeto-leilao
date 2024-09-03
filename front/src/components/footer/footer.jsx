import React from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="p-grid">
                <div className="p-col-12 p-md-4">
                    <h5>About Us</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="p-col-12 p-md-4">
                    <h5>Quick Links</h5>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="p-col-12 p-md-4">
                    <h5>Follow Us</h5>
                    <div className="social-icons">
                        <Button icon="pi pi-facebook" className="p-button-rounded p-button-text" />
                        <Button icon="pi pi-twitter" className="p-button-rounded p-button-text" />
                        <Button icon="pi pi-instagram" className="p-button-rounded p-button-text" />
                    </div>
                </div>
            </div>
            <Divider />
            <div className="footer-bottom p-text-center">
                <p>&copy; {new Date().getFullYear()} Booktion. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
