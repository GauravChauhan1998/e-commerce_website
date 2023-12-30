import React from 'react'
import './NewsLetter.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
  const notify = (e) => {
    e.preventDefault();
    toast.success("E-mail added Successfully!", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our Newsletter ans stay updated</p>
            <form onSubmit={notify}>
              <input type="email" placeholder='Your Email ID' required/>
              <button>Subscribe</button>
            </form>   
            <ToastContainer />
    </div>
  )
}

export default NewsLetter