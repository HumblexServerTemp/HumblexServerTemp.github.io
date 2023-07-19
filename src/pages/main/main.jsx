import React from "react";

import "./main.css";
import WelcomePageImage from '../../assets/WelcomePage.jpg';
import AboutUsImage from '../../assets/AboutUs.jpg';
import {useTranslation, initReactI18next} from "react-i18next";
import i18n from "i18next";
import enTranslation from "../en.json";
import frTranslation from "../fr.json";

import {Link} from "react-router-dom";

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: enTranslation
            },
            fr: {
                translation: frTranslation
            }
        }
    });

export const Main = () => {
    const {t} = useTranslation();
    const {i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className="body">
            <div className="image-container">
                <img src={WelcomePageImage} alt="WelcomePage" className="welcome-image"/>
                <div className="image-overlay">
                    <h1>{t("welcomeMessage")}</h1>
                    <p>{t("discoverMessage")}</p>
                    <div className="buttons">
                        <Link to="/services" className="button">
                            {t("goToServicePage")}
                        </Link>
                        <Link to="/shop" className="button">
                            {t("goToShop")}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="about-us-section">
                <div className="about-us-image">
                    <img src={AboutUsImage} alt="About Us"/>
                </div>
                <div className="about-us-text">
                    <h2>{t("aboutUs")}</h2>
                    <p>{t("aboutUsText")}</p>
                </div>
            </div>
            <footer className="footer_section">
                <head>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                </head>
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <div className="footer_content">
                            <h4>{t("reachAt")}</h4>
                            <div className="contact_link_box">
                                <a
                                    href="https://www.google.com/maps/place/InfoService,+Ottawa,+ON+K1N+6N5/data=!4m2!3m1!1s0x4cce0506ee1a018f:0x72c97e73ba1e60ba?sa=X&ved=2ahUKEwjAtf2J8Kz_AhWyjYkEHarQCGgQ8gF6BAhIEAE">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>{t("location")}</span>
                                </a>
                                <br></br>
                                <a href="tel:(613) 562-5701">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>{t("call")}</span>
                                </a>
                                <br></br>
                                <a href="mailto: dentistry@uOttawa.ca">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>{t("email")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className="footer_detail">
                            <a href="" className="footer-logo">
                                TechSupport
                            </a>
                            <p>{t("smallDesc")}</p>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className="map_container">
                            <div className="map">
                                <div id="googleMap">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2554540343895!2d-75.6861364!3d45.4243516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0506ee1a018f%3A0x72c97e73ba1e60ba!2sInfoService%2C%20Ottawa%2C%20ON%20K1N%206N5!5e0!3m2!1sen!2sca!4v1686183640770!5m2!1sen!2sca"
                                        width="600"
                                        height="450"
                                        style={{
                                        border: "0"
                                    }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <p>
                        &copy;
                        <span id="displayYear">{new Date().getFullYear()}</span>
                        <br/> {t("footerText", {
                            year: new Date().getFullYear()
                        })}
                    </p>
                </div>
                <div>
                    <button className="language-button" onClick={() => changeLanguage("en")}>
                        English
                    </button>
                    <button className="language-button" onClick={() => changeLanguage("fr")}>
                        French
                    </button>
                </div>
            </footer>
        </div>
    );
};
