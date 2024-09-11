import React, { useEffect, useRef } from "react";
import style from "./home.module.css";
import { useTranslation } from "react-i18next";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Home = () => {
    const { t, i18n } = useTranslation();
    const chartRef = useRef(null); // Use ref to keep track of chart instance

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    // Dynamically generate chart data based on current language
    const chartData = {
        labels: t('months', { returnObjects: true }),  // Fetch the translated months array
        datasets: [
            {
                label: t('label'),  // Fetch the translated label
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

    // Destroy chart instance on component unmount or re-render
    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy(); // Destroy chart before re-render
            }
        };
    }, []); // Empty dependency array means this will run only on unmount

    return (
        <div className="p-4">
            {/* Main Content */}
            <div className="p-grid p-nogutter p-mb-4">
                <div className="p-col">
                    <h1 className={`${style.textColor} w-full`}>{t('welcome-home-page')}</h1>
                </div>
            </div>

            {/* Card Section */}
            <div className="p-grid p-mb-4">
                <div className="p-col-12 p-md-6">
                    <Card title={t('welcomeTitle')} className="p-mb-4">
                        <p>{t('welcomeMessage')}</p>
                        <Button label={t('learnMore')} icon="pi pi-info-circle" className="p-mt-2" />
                    </Card>
                </div>
            </div>

            {/* Chart Section */}
            <div className={`${style.chartContainer} p-card p-shadow-2 p-p-4`}>
                <h3 className="p-mb-3">{t('chartTitle')}</h3>
                <Chart
                    ref={(el) => chartRef.current = el?.chart} // Track the chart instance
                    type="bar"
                    data={chartData}
                    options={options}
                />
            </div>

        </div>
    );
};

export default Home;
