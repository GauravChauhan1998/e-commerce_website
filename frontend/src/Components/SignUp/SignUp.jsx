import React, { useState } from 'react'
import './SignUp.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSUbmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");
    
    setSUbmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        setSUbmitButtonDisabled(false)
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name
        });
        navigate("/");
        toast.success("Account Created Successfully! Please Login", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch((err) => {
        setSUbmitButtonDisabled(false)
        setErrorMsg(err.message);
      });
  }

  return (
    <div className='signup'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input onChange={(e) => setValues((prev) => ({...prev, name: e.target.value}))} type="text" placeholder='Your Name'/>
          <input onChange={(e) => setValues((prev) => ({...prev, email: e.target.value}))} type="email" placeholder='Your Email' />
          <input onChange={(e) => setValues((prev) => ({...prev, pass: e.target.value}))} type="password" placeholder='Password' />
        </div>
        <br />
        <b className='error-msg'>{errorMsg}</b>
        <button disabled={submitButtonDisabled} onClick={handleSubmission}>Continue</button>
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