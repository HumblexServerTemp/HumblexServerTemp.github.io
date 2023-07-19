import React, { useState } from "react";
import "./faq.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const FAQ = ({}) => {
  const { t } = useTranslation();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userQuestion, setUserQuestion] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };
  const handleQuestionChange  = (event) => {
    setUserQuestion(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("User Question:", userQuestion);
    console.log("User Email:", userEmail);
    setUserQuestion(""); 
    setUserEmail(""); 
  };
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const faqData = [
    {
      question: <p>{t('question1')}</p>,
      answer: <p>{t('answer1')}</p>,
    },
    {
      question: <p>{t('question2')}</p>,
      answer: <p>{t('answer2')}</p>,
    },
    {
      question: <p>{t('question3')}</p>,
      answer: <p>{t('answer3')}</p>,
    },
    {
      question: <p>{t('question4')}</p>,
      answer: <p>{t('answer4')}</p>,
    },
    {
      question: <p>{t('question5')}</p>,
      answer: <p>{t('answer5')}</p>,
    },
    {
      question: <p>{t('question6')}</p>,
      answer: <p>{t('answer6')}</p>,
    },
    {
      question: <p>{t('question7')}</p>,
      answer: <p>{t('answer7')}</p>,
    },
  ];

  return (
    
    <div>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <div className="faq-section">
        <h2>{t('faqTitle')}</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`faq-question ${selectedQuestion === index ? "active" : ""}`}
                onClick={() => handleQuestionClick(index)}
              >
                {faq.question}
                {selectedQuestion === index ? (
                  <i className="fa fa-chevron-up"></i>
                ) : (
                  <i className="fa fa-chevron-down"></i>
                )}
              </div>
              {selectedQuestion === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>

     {/* Form section */}
     <div className="form-section">
        <h3>{t('formTitle')}</h3>
        <p>{t('formSubtitle')}</p>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder={t('questionPlaceholder')}
            value={userQuestion}
            onChange={handleQuestionChange}
            required
          />
          <input
            type="email"
            placeholder={t('emailPlaceholder')}
            value={userEmail}
            onChange={handleEmailChange}
            required
          />
          
        </form>
        <button type="submit">{t('submitButton')}</button>
      </div>

      <footer className="footer_section">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_content">
              <h4>{t("reachAt")}</h4>
              <div className="contact_link_box">
                <a href="https://www.google.com/maps/place/InfoService,+Ottawa,+ON+K1N+6N5/data=!4m2!3m1!1s0x4cce0506ee1a018f:0x72c97e73ba1e60ba?sa=X&ved=2ahUKEwjAtf2J8Kz_AhWyjYkEHarQCGgQ8gF6BAhIEAE">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>{t("location")}</span>
                </a>
                <br />
                <a href="tel:(613) 562-5701">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>{t("call")}</span>
                </a>
                <br />
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
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear">{new Date().getFullYear()}</span>
            <br />
            {t("footerText", { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
            </div>
  );
};
