import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  // const handleSubmit = (e)=> {
  //   e.preventDefault();
  // }
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our Newsletter ans stay updated</p>
            <form>
              <input type="email" placeholder='Your Email ID' required/>
            </form>   
            <button onClick={alert('E-mail Registered!')}>Subscribe</button>
    </div>
  )
}

export default NewsLetter