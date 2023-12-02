import React, { useState } from 'react'
import './Login.css'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

  return (
    <div className="login">
        <div className="login-container">
            <h1>Login</h1>
            <div className="loginsignup-fields">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Password' />
            </div>
            <button type='submit'>Continue</button>
            <p className="login-login">Don't have an acoount? <span onClick={()=>props.onFormSwitch('register')}>Sign Up Here</span></p>
            <div className="login-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
      </div>
    </div>
    
  )
}

export default Login