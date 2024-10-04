import React, { useState } from 'react';
import './Cart.css';
import qrCode from "../../assets/QR_Code.jpg";

function Cart() {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePayment = (method) => {
        setPaymentMethod(method);
        if (method === "upi") {
            alert("UPI Payment selected.");
        } else {
            alert("Cash on Delivery selected.");
        }
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>

            <div className="cart-items">
                {/* You can dynamically list cart items here */}
                <div className="cart-item">
                    <p>Foxtail Millet - 1kg</p>
                    <p>₹150</p>
                </div>
                <div className="cart-item">
                    <p>Kodo Millet - 1kg</p>
                    <p>₹140</p>
                </div>
                <div className="cart-item-total">
                    <p>Total:</p>
                    <p>₹290</p>
                </div>
            </div>

            <div className="payment-options">
                <h3 className="payment-title">Select Payment Method</h3>

                <button
                    className={`payment-button ${paymentMethod === 'cod' ? 'selected' : ''}`}
                    onClick={() => handlePayment('cod')}
                >
                    Cash on Delivery
                </button>

                <button
                    className={`payment-button ${paymentMethod === 'upi' ? 'selected' : ''}`}
                    onClick={() => handlePayment('upi')}
                >
                    UPI Payment
                </button>

                {paymentMethod === 'upi' && (
                    <div className="upi-qr">
                        <img src={qrCode} alt="UPI QR Code" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
