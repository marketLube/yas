import React, { useState, useRef, useEffect } from "react";
import Ticket from "../../../assets/icons/ticket.svg";
import Excellent from "../../../assets/icons/great.svg";
import Average from "../../../assets/icons/smile.svg";
import Poor from "../../../assets/icons/poor.svg";

export default function PaymentResponse() {
  const [selectedEmoji, setSelectedEmoji] = useState(null); // 'excellent', 'average', 'poor', or null
  const emojiRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setSelectedEmoji(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmojiClick = (emojiType) => {
    setSelectedEmoji(emojiType === selectedEmoji ? null : emojiType);
  };

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
        <div className="feedback-options" ref={emojiRef}>
          <div className="option">
            <img
              className="emoji green"
              src={Excellent}
              alt="Excellent"
              style={{
                cursor: "pointer",
                backgroundColor: selectedEmoji === 'excellent' ? "green" : "#e1f1ff",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handleEmojiClick('excellent')}
            />
            <div className="label">Excellent</div>
          </div>
          <div className="option">
            <img
              className="emoji yellow"
              src={Average}
              alt="Average"
              style={{
                cursor: "pointer",
                backgroundColor: selectedEmoji === 'average' ? "#FFBE0B" : "#e1f1ff",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handleEmojiClick('average')}
            />
            <div className="label">Average</div>
          </div>
          <div className="option">
            <img
              className="emoji red"
              src={Poor}
              alt="Poor"
              style={{
                cursor: "pointer",
                backgroundColor: selectedEmoji === 'poor' ? "#F42E48" : "#e1f1ff",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handleEmojiClick('poor')}
            />
            <div className="label">Poor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
