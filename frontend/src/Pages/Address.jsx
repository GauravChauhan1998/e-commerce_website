import React from 'react'
import './CSS/Address.css'
import { useNavigate } from 'react-router-dom'

const Address = () => {
    const navigate = useNavigate();
    const handleSubmit = event => {
      event.preventDefault();
      navigate('/payment');
    };
  return (
    <>
        <div className="address-container">
            <h1 className="add-address">Add Delivery Address</h1>
            <form className='address-form' onSubmit={handleSubmit}>
                <input type={'text'} placeholder={'Full Name (Required)'} required/>
                <input type={'text'} placeholder={'Phone Number (Required)'} required/>
                <input type={'text'} placeholder={'House No., Building Name (Required)'} required/>
                <input type={'text'} placeholder={'Road Name, Area, Colony (Required)'} required/>
                <input type={'text'} placeholder={'City (Required)'} required/>
                <input type={'text'} placeholder={'State (Required)'} required/>
                <input type={'text'} placeholder={'Pincode (Required)'} required/>
                <button type='submit'>SELECT PAYMENT METHOD</button>
            </form>
        </div>
    </>
  )
}

export default Address