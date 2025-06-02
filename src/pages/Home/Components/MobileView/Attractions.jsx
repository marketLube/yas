import React, { useState } from "react";
import frame1 from "../../../../assets/images/frame1.png";
import frame2 from "../../../../assets/images/frames2.png";
import frame3 from "../../../../assets/images/frame3.png";
import MobileBottomNav from "./MobileBottomNav"; // Adjust path as needed
import AttractionDetailModal from "./AttractionDetailModal";
import BookingModal from "./BookingModal";
import Mycart from "./Mycart";
import EmailVerification from "./EmailVerification";
import ConfirmEmail from "./ConfirmEmail";
import CheckOut from "./CheckOut";

// Example data (replace with your real data or props)
const attraction = [
  {
    id: 1,
    image: frame1,
    title: "1 day Ferrari World",
    desc: "Love speed? Then gear up for the ride of your...",
    price: "AED 1,295",
    vat: "+ 96.43 VAT & tax",
    detailDesc:
      "Love speed? Then gear up for the ride of your life only here at Ferrari World Abu Dhabi. Home to the world's fastest rollercoaster, the highest loop ride, the tallest space-frame structure ever built on the planet and over 40 record-breaking attractions.",
    detailPrice: "AED 328.57",
    detailVat: "16.43 VAT & tax",
  },
  {
    id: 2,
    image: frame2,
    title: "VIP experience",
    desc: "Buckle up for exclusive ac... Love speed? Then gear up for the ride of your life only here at Ferrari World Abu Dhabi. Home to the world's fastest rollercoaster, the highest loop ride, the tallest space-frame structure ever built on the planet and over 40 record-breaking attractions.",
    price: "AED 10,000",
    vat: "+ 96.43 VAT & tax",
  },
  {
    id: 3,
    image: frame3,
    title: "Driving experience",
    desc: "Drive your dream car with. Love speed? Then gear up for the ride of your life only here at Ferrari World Abu Dhabi. Home to the world's fastest rollercoaster, the highest loop ride, the tallest space-frame structure ever built on the planet and over 40 record-breaking attractions.....",
    price: "AED 1,295",
    vat: "+ 96.43 VAT & tax",
  },
  {
    id: 4,
    image: frame1,
    title: "Driving experience",
    desc: "Drive your dream car with. Love speed? Then gear up for the ride of your life only here at Ferrari World Abu Dhabi. Home to the world's fastest rollercoaster, the highest loop ride, the tallest space-frame structure ever built on the planet and over 40 record-breaking attractions.....",
    price: "AED 1,295",
    vat: "+ 96.43 VAT & tax",
  },
  {
    id: 5,
    image: frame2,
    title: "Driving experience",
    desc: "Drive your dream car with. Love speed? Then gear up for the ride of your life only here at Ferrari World Abu Dhabi. Home to the world's fastest rollercoaster, the highest loop ride, the tallest space-frame structure ever built on the planet and over 40 record-breaking attractions.....",
    price: "AED 1,295",
    vat: "+ 96.43 VAT & tax",
  },
];

function Attractions() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [showAttractionDetail, setShowAttractionDetail] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMyCart, setShowMyCart] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  return (
    <>
      <div className="attractions-list">
        {attraction.map((item) => (
          <div className="attraction-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="attraction-card__img"
            />
            <div className="attraction-card__content">
              <div className="attraction-card__header">
                <div>
                  <div className="attraction-card__title">{item.title}</div>
                  <div className="attraction-card__desc">{item.desc}</div>
                </div>
                <div className="attraction-card__action">
                  <button
                    className="attraction-card__add-btn"
                    onClick={() => {
                      setSelectedAttraction(item);
                      setShowAttractionDetail(true);
                    }}
                  >
                    Add
                  </button>
                  <span className="attraction-card__vat">{item.vat}</span>
                </div>
              </div>
              <div className="attraction-card__price">
                <span>{item.price}</span>
              </div>
            </div>
          </div>
        ))}
        <MobileBottomNav />
      </div>
      {showAttractionDetail && selectedAttraction && (
        <AttractionDetailModal
          attraction={selectedAttraction}
          onClose={() => setShowAttractionDetail(false)}
          onBack={() => setShowAttractionDetail(false)}
          onAddToCart={() => {
            setShowAttractionDetail(false);
            setShowBookingModal(true);
          }}
        />
      )}
      {showBookingModal && (
        <BookingModal
          onClose={() => setShowBookingModal(false)}
          onBack={() => {
            setShowBookingModal(false);
            setShowAttractionDetail(true);
          }}
          onSaveToCart={() => {
            setShowBookingModal(false);
            setShowMyCart(true);
          }}
        />
      )}
      {showMyCart && (
        <Mycart
          onClose={() => setShowMyCart(false)}
          onBack={() => {
            setShowMyCart(false);
            setShowBookingModal(true);
          }}
          onCheckout={() => {
            setShowMyCart(false);
            setShowEmailVerification(true);
          }}
        />
      )}
      {showEmailVerification && (
        <EmailVerification
          onClose={() => setShowEmailVerification(false)}
          onConfirmEmail={() => {
            setShowEmailVerification(false);
            setShowConfirmEmail(true);
          }}
        />
      )}
      {showConfirmEmail && (
        <ConfirmEmail
          onBack={() => {
            setShowConfirmEmail(false);
            setShowEmailVerification(true);
          }}
          onConfirm={(otp) => {
            setShowConfirmEmail(false);
          }}
          onResend={() => {}}
        />
      )}
      {showCheckOut && (
        <ConfirmEmail
          onClose={() => setShowCheckOut(false)}
          onConfirmEmail={() => {
            setShowCheckOut(false);
          }}
        />
      )}
    </>
  );
}

export default Attractions;
