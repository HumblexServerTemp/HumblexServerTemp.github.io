import React from "react";
import {useTranslation} from 'react-i18next';
import "./book.css";

export const Book = ({filterProducts}) => {
    const handleBookServiceClick = () => {
        filterProducts("category4");
    };
    const {t} = useTranslation();
    return (
        <div>
            <body>
                <head>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                </head>
                <section className="contact_section layout_padding">
                    <div className="contact_bg_box"></div>
                    <div className="container">
                        <div className="">
                            <div className="row">
                                <div className="col-md-7 mx-auto">
                                    <form action="">

                                        <div className="contact_form-container">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p
                                                        style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold'
                                                    }}>{t("bookingForm")}</p>
                                                    <input type="text" placeholder={t("Full Name")}/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" placeholder={t("Email")}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="number" placeholder={t("Phone Number")}/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="number" placeholder={t("Number of People")}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="date" placeholder={t("bookingFSelect dateorm")}/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="time" placeholder={t("Select Time")}/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label htmlFor="service">{t("service")}
                                                    </label>
                                                    <select name="service" id="service">
                                                        <option value="Select">{t("select")}</option>
                                                        <option value="Dr1">
                                                            {t("Repair Services")}
                                                        </option>
                                                        <option value="Dr2">{t("Data Recovery")}</option>
                                                        <option value="Dr3">{t("Recommendation Services")}</option>
                                                        <option value="Dr4">{t("OthersButton")}</option>
                                                        <option value="Dr5" disabled>
                                                            --------------------
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder={t("additionalNote")} className="message_input"/>
                                            </div>

                                            <div className="btn_box">
                                                <a href="/confirmation" className="btn-book-appointment">
                                                    <b>{t("bookNowButton")}</b>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>

            <footer className="footer_section">
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
                                <br/>
                                <a href="tel:(613) 562-5701">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>{t("call")}</span>
                                </a>
                                <br/>
                                <a href="mailto:TechSupport@gmail.ca">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>{t("email")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className="footer_detail">
                            TechSupport
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
            </footer>
        </div>
    );
};