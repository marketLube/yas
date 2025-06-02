import React from "react";
import { Drawer, Button } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import Expand from "../../../assets/icons/shrink.svg";
import Ferrari from "../../../assets/images/product1.png";
import DeleteIcon from "../../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";

const CartModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment");
    onClose(); // Close the modal when navigating
  };

  const handleSaveCart = () => {
    onClose(); // Close the drawer when saving cart
  };

  if (!isOpen) return null;

  return (
    <Drawer
      title={null}
      placement="right"
      onClose={onClose}
      open={isOpen}
      width="30%"
      className="cart-drawer"
      closeIcon={null}
      headerStyle={{ display: "none" }}
    >
      <div className="cart-content">
        <div className="cart-header">
          <h2>My Cart</h2>
          <button className="expand-icon" onClick={onClose}>
            <img src={Expand} alt="Expand" />
          </button>
        </div>

        <div className="booking-date">
          <p>
            Booking for <span>Thu 08- Feb 2025</span>
          </p>
        </div>

        <div className="cart-items">
          <div className="cart-item">
            <img src={Ferrari} alt="Ferrari World" />
            <div className="item-details">
              <h4>1 day Ferrari World</h4>
              <p>AED 328.57</p>
              <small>16.43 VAT & Tax</small>
            </div>
            <div className="quantity-controls">
              <span>Adults</span>
              <div className="controls">
                <Button icon={<MinusOutlined />} />
                <span>2</span>
                <Button icon={<PlusOutlined />} />
                <Button className="delete-btn">
                  <img src={DeleteIcon} alt="Delete" />
                </Button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <img src={Ferrari} alt="Ferrari World" />
            <div className="item-details">
              <h4>1 day Ferrari World</h4>
              <p>AED 328.57</p>
              <small>16.43 VAT & Tax</small>
            </div>
            <div className="quantity-controls">
              <span>Adults</span>
              <div className="controls">
                <Button icon={<MinusOutlined />} />
                <span>2</span>
                <Button icon={<PlusOutlined />} />
                <Button className="delete-btn">
                  <img src={DeleteIcon} alt="Delete" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <div className="subtotal">
            <div className="summary-row">
              <span>Sub total :</span>
              <span>AED 935.71</span>
            </div>
            <div className="summary-row">
              <span>VAT & Tax :</span>
              <span>+ 49.29 VAT & Tax</span>
            </div>
          </div>
          <div className="custom-divider"></div>
          <div className="total">
            <span>Total :</span>
            <span>AED 985.00</span>
          </div>

          <div className="cart-actions">
            <button className="save-cart-btn" onClick={handleSaveCart}>
              Save cart & pay later
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Check out
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CartModal;
