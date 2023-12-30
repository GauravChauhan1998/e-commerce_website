import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';

const Login = (props) => {

  const [isUserLoggedIn,setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserLoggedIn(true);
        setUserName(user.displayName);
      }
      else{
        setUserName("");
        setUserLoggedIn(false);
      }
    })
  })
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSUbmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if(!values.email || !values.pass){
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");
    
    setSUbmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        setSUbmitButtonDisabled(false)
        navigate("/");
        toast.success("Login Successfull!", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch((err) => {
        setSUbmitButtonDisabled(false)
        setErrorMsg(err.message);
      });
  }

  const handleSignOut = () => {
    signOut(auth).then(async()=>{
      navigate("/");
      // window.location.reload(false);
      toast.success("Sign Out Successfull!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }).catch((error) => {
      setErrorMsg(error.message);
    })
  }

  return (
    <div className="login">
       {
        isUserLoggedIn && <div className="sign-out"><p>Hi, {userName}. You are Already Logged In. Want to <span onClick={handleSignOut} className='sign-out-btn'>Log Out</span> ? </p></div>
       } 
      
        <div className="login-container">
            <h1>Login</h1>
            <div className="loginsignup-fields">
                <input onChange={event => setValues(prev => ({...prev, email: event.target.value}))} type="email" placeholder='Your Email' />
                <input onChange={event => setValues(prev => ({...prev, pass: event.target.value}))} type="password" placeholder='Password' />
            </div>
            <br />
            <b className='error-msg'>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>Continue</button>
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