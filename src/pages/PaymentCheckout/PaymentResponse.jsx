import React from "react";
import Ticket from "../../assets/icons/ticket.svg";
import Excellent from "../../assets/icons/great.svg";
import Average from "../../assets/icons/smile.svg";
import Poor from "../../assets/icons/poor.svg";

export default function PaymentResponse() {
  return (
    <div className="payment-response">
      <div className="ticket-section">
        <img src={Ticket} alt="Ticket" />
        <div className="ticket-message">
          Your ticket has been sent <br /> to the registered mail ID!
        </div>
      </div>
      <hr className="divider" />
      <div className="feedback-section">
        <div className="feedback-title">How would you rate your experience</div>
        <div className="feedback-options">
          <div className="option">
            <img className="emoji green" src={Excellent} alt="Excellent" />
            <div className="label">Excellent</div>
          </div>
          <div className="option">
            <img className="emoji yellow" src={Average} alt="Average" />
            <div className="label">Average</div>
          </div>
          <div className="option">
            <img className="emoji red" src={Poor} alt="Poor" />
            <div className="label">Poor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
