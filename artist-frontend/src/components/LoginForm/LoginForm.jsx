import React, { useRef, useState, useContext, useEffect } from 'react'
import './LoginForm.css'
import axios from "axios"
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginForm = () => {

 
 const [email, setEmail] = useState("");
 
 const [password, setPassword] = useState("");

 const [errorMessage, setErrorMessage] = useState("");

 const emailInput = useRef(null);
 
 const passwordInput = useRef(null);
 const errDiv = useRef();
 


const passwordChange = (e) => {
let newPass = e.target.value;
   setPassword(newPass);
 

   // regular expressions to validate password
   var lowerCase = /[a-z]/g;
   var upperCase = /[A-Z]/g;
   var numbers = /[0-9]/g;
   if (!newPass.match(lowerCase)) {
      setErrorMessage("Password should contains lowercase letters!");
   } else if (!newPass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
   } else if (!newPass.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
   } else if (newPass.length < 10) {
      setErrorMessage("Password length should be more than 10.");
   } else {
      setErrorMessage("Password is strong!"); 
   }
   
}

useEffect(() => {
    if(errorMessage == "Password is strong!"){
        errDiv.current.style.backgroundColor = "green";
    }
}, [errorMessage])


const [type, setType] = useState('password');
const [icon, setIcon] = useState(faEyeSlash);

const handleClick = () => {


if (type==='password'){
  setIcon(faEye);
  setType('text')
} else {
  setIcon(faEyeSlash)
  setType('password')
}
}


  const handleSubmit = async (e) => {
    e.preventDefault(); 
   
    setEmail("");
    setPassword("");
    errDiv.current.style.display = "none";

    console.log({ email, password});
  
  }
  return (
    <div className="register-form-container">
    <div className="form-container">
     <h3>Login as an Artist</h3>

  <form  className="register-form" onSubmit={handleSubmit}>

     <input type="email" placeholder="Email" name="email" ref={emailInput}  value={email} onChange={(e) => setEmail(e.target.value)} required/>
    
     <div className="input-div">
        <input type={type} placeholder="Password" name="password" ref={passwordInput}  value={password} onChange={(e) => passwordChange(e)} required/>
        <p className={(errorMessage != "" ? "error-msg" : "error-msg off-screen")} ref={errDiv}>{errorMessage}</p>
        <span className="eye-slash" onClick={handleClick}> <FontAwesomeIcon icon={icon} /></span>
        
     </div>
  
     <button type="submit">Login</button>
     <p>Not Registered? <Link to='/register' className="login-link">Register</Link></p>
  </form>

  </div>
</div>
  )
}

export default LoginForm