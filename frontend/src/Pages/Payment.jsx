import React from 'react'
import './CSS/Payment.css'


const Payment = () => {
  return (
    <>
        <div className="payment-container">
            <h1>Payment</h1>
            <div className="card payment-option">Credit/Debit Card</div>
            <div className="upi payment-option">UPI</div>
            <div className="cod payment-option">Cash On Delivery</div>
        </div>
    </>
  )
}

export default Payment