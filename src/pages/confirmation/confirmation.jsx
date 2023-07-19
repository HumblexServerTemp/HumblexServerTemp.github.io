import React from "react";
import "./confirmation.css"; // Make sure to create the corresponding CSS file

import ConfirmIcon from "./ConfirmIcon.png";

export const Confirmation = () => {
    return (
        <div className="content">
            <div className="wrapper-1">
                <div className="wrapper-2 center">
                    <h1>Booking and Checkout | Réservation et paiement </h1>
                    <h1>is confirmed! | est confirmé!</h1>
                    <img src={ConfirmIcon} alt="ConfirmIcon"/>
                    <p>Thank you for Booking and Shopping with TechSupport | Merci d'avoir réservé et acheté avec TechSupport</p>
                    <p>We will be glad to have you again! | Nous serons ravis de vous accueillir à nouveau!</p>
                    <br/>
                    <a href="/" className="go-home">
                        Return To Home
                    </a>
                </div>
            </div>
        </div>
    );
};
