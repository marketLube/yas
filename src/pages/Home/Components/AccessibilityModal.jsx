import React from "react";
import { Modal } from "antd";
import Invert from "../../../assets/icons/invert.svg";
import Zoom from "../../../assets/icons/lens.svg";
// import "./AccessibilityModal.css";

export default function AccessibilityModal({ isOpen, onClose }) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      closeIcon={<span className="close-button">×</span>}
      className="accessibility-modal"
      width="40%"
    >
      <div className="modal-content">
        <h2>Accessibility</h2>
        <p className="subtitle">choose options</p>

        <div className="options-container">
          <div className="option-card">
            <div className="option-icon">{/* <Invert /> */}</div>
            <p>
              Color blindness
              <br />
              mode
            </p>
          </div>

          <div className="option-card">
            <div className="option-icon">{/* <Zoom /> */}</div>
            <p>Zoom mode</p>
          </div>
        </div>

        <button className="continue-button" onClick={onClose}>
          Continue
        </button>
      </div>
    </Modal>
  );
}
