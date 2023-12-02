import React, { useState } from 'react'
import './SignUp.css'

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  return (
    <div className='signup'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name'/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="signup-login">Already have an acoount? <span onClick={()=>props.onFormSwitch('login')}>Login Here</span></p>
        <div className="signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp