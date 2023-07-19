import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "./navbar.css";

export const Navbar = () => {
    const {i18n} = useTranslation();
    const {t} = useTranslation();

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en"
            ? "fr"
            : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="navbar">
            <div className="links">
                <div className="logo">
                    <Link to="/">TechSupport</Link>
                </div>
            </div>
            <div className="links">
                <Link to="/">{t('HomeButton')}</Link>
                <Link to="/services">{t('ServicesButton')}</Link>
                <Link to="/shop">{t('ShopButton')}</Link>
                <Link to="/review">{t('ReviewButton')}</Link>
                <Link to="/faq">{t('FAQButton')}</Link>
                <Link to="/benchmark">{t('BenchmarkButton')}</Link>
                <Link to="/contact">{t('ContactButton')}</Link>
            </div>
            <div className="language-button-container">
                <button
                    className="language-button"
                    style={{
                    backgroundColor: "rgb(19, 19, 19)",
                    color: "#ffffff"
                }}
                    onClick={toggleLanguage}>
                    {i18n.language === "en"
                        ? "Français"
                        : "English"}
                </button>
            </div>
        </div>
    );
};
