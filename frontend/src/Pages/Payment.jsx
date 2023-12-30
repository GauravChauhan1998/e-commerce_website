import React from 'react'
import './CSS/Payment.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const notify = () => {
    toast.success("Order Placed Successfully!", {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const navigate = useNavigate();
    const handleClick = event => {
      event.preventDefault();
      navigate('/card-details');
    };
  return (
    <>
        <div className="payment-container">
            <h1>Payment</h1>
            <div className="card payment-option" onClick={handleClick}>Credit/Debit Card</div>
            <div className="cod payment-option" onClick={notify}>Cash On Delivery</div>
            <ToastContainer />
        </div>
    </>
  )
}

export default Payment