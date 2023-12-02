import React, { useState } from 'react'
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const[currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm}/>
      }
    </>
  )
}

export default LoginSignup