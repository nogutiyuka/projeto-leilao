import React from "react";
import style from "./home.module.css";
import { useTranslation } from "react-i18next";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card'; // Correct import for Card
import { InputText } from 'primereact/inputtext'; // Correct import for InputText
import { Chart } from 'primereact/chart'; // Import the Chart component
import 'primeflex/primeflex.css'; // Ensure PrimeFlex is included
import 'primereact/resources/themes/saga-blue/theme.css'; // Import a PrimeReact theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact core CSS
import 'primeicons/primeicons.css'; // Import PrimeIcons

const Home = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    // Example data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="p-4">
            {/* Main Content */}
            <div className="p-grid p-nogutter p-mb-4">
                <div className="p-col">
                    <h1 className={`${style.textColor} w-full`}>{t('welcome')} Página Inicial</h1>
                </div>
                <div className="p-col">
                    <Button onClick={() => changeLanguage('en')} className="p-button-text">English</Button>
                    <Button onClick={() => changeLanguage('pt')} className="p-button-text">Português</Button>
                </div>
            </div>

            {/* Card Section */}
            <div className="p-grid p-mb-4">
                <div className="p-col-12 p-md-6">
                    <Card title="Welcome to PrimeReact" className="p-mb-4">
                        <p>
                            PrimeReact is a collection of rich UI components for React. 
                            It provides a wide range of components, including buttons, inputs, overlays, and more.
                        </p>
                        <Button label="Learn More" icon="pi pi-info-circle" className="p-mt-2" />
                    </Card>
                </div>
                <div className="p-col-12 p-md-6">
                    <Card title="Get Started" className="p-mb-4">
                        <p>
                            Start using PrimeReact by installing it and including the necessary CSS files. 
                            PrimeReact's components are fully customizable and easy to integrate.
                        </p>
                        <Button label="Get Started" icon="pi pi-play" className="p-mt-2" />
                    </Card>
                </div>
            </div>

            {/* Chart Section */}
            <div className={`${style.chartContainer} p-card p-shadow-2 p-p-4`}>
                <h3 className="p-mb-3">Sales Data</h3>
                <Chart type="bar" data={data} options={options} />
            </div>

            {/* Form Section */}
            <div className="p-card p-shadow-2 p-p-4">
                <h3 className="p-mb-3">Contact Us</h3>
                <div className="p-field p-mb-3">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" placeholder="Enter your name" />
                </div>
                <div className="p-field p-mb-3">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" placeholder="Enter your email" />
                </div>
                <div className="p-field">
                    <Button label="Submit" className="p-button-primary" />
                </div>
            </div>
        </div>
    );
}

export default Home;
