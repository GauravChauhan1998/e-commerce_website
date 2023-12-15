import React from 'react'
import './CSS/Address.css'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <>
        <div className="address-container">
            <h1 className="add-address">Add Delivery Address</h1>
            <form className='address-form'>
                <input type={'text'} placeholder={'Full Name (Required)'} required/>
                <input type={'text'} placeholder={'Phone Number (Required)'} required/>
                <input type={'text'} placeholder={'House No., Building Name (Required)'} required/>
                <input type={'text'} placeholder={'Road Name, Area, Colony (Required)'} required/>
                <input type={'text'} placeholder={'City (Required)'} required/>
                <input type={'text'} placeholder={'State (Required)'} required/>
                <input type={'text'} placeholder={'Pincode (Required)'} required/>
                <button type='submit'><Link style={{textDecoration:'none', color:'#fff'}} to={'/payment'}>SELECT PAYMENT METHOD</Link></button>
            </form>
        </div>
    </>
  )
}

export default Address