import React, { useRef, useState, useContext, useEffect } from 'react'
import './RegisterForm.css'
import axios from "axios"
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signupUser, signupSelector, clearState } from '../../features/signupSlice';
import { useDispatch, useSelector } from 'react-redux';

const RegisterForm = () => {
   let link = "http://localhost:3000/signup";
   
   const dispatch = useDispatch();

 const [name, setName] = useState("");
 const [location, setLocation] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [password, setPassword] = useState("");

 const [errorMessage, setErrorMessage] = useState("");
 
 const [success, setSuccess] = useState(false);

 const { isFetching, isSuccess, isError, errorMsg } = useSelector(
   signupSelector
);



 const nameInput = useRef(null);
 const locationInput = useRef(null);
 const emailInput = useRef(null);
 const phoneInput = useRef(null);
 const passwordInput = useRef(null);
 const errDiv = useRef();
 const openPwd = useRef();

 const navigate = useNavigate();



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
   errorMessage == ""  ?  errDiv.current.style.display = "none" :  
   errDiv.current.style.display = "block"
   if(errorMessage == "Password is strong!"){
      errDiv.current.style.backgroundColor = "green";
  } else {
    errDiv.current.style.backgroundColor = "#E53124";
  }
   ;

    
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
   
    
    setName("");
    setLocation("");
    setEmail("");
    setPhone("");
    setPassword("");

   

    let data = {name, location, email, phone, password};

    dispatch(signupUser(data));

    const response = await fetch(link, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

   
      const error = await response.text();
  
      setErrorMessage(error);
   
   
 
 
    //console.log({name, location, email, phone, password});
  
  }

//   useEffect(() => {
//    return () => {
//        dispatch(clearState());
//    };
// }, [isSuccess]);

useEffect(() => {
   if (isError) {
       
       dispatch(clearState()); 
   }

   if (isSuccess) {
       dispatch(clearState());
       setSuccess(true);
      
      //  localStorage.getItem("token") ?  setSuccess(true) : null;
        }
}, [isError, isSuccess]);


  return (
    <div className="register-form-container">
      {
        success ? (<div className="form-container">
                <div className="success-div">
                   <h3>Success!</h3>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <Link to='/login' className="success-link">Login</Link>
                </div>
                <p  ref={errDiv}></p>
        </div> ) : (
             
             <div className="form-container">
             <h3>Register as an Artist</h3>
        
          <form  className="register-form" onSubmit={handleSubmit}>
        
        
             <input type="text" placeholder="Name" name="name" ref={nameInput} value={name} onChange={(e) => setName(e.target.value)} required/>
             <input type="text" placeholder="Location" name="location" ref={locationInput}  value={location} onChange={(e) => setLocation(e.target.value)} required/>
             <input type="email" placeholder="Email" name="email" ref={emailInput}  value={email} onChange={(e) => setEmail(e.target.value)} required/>
             <input type="number" placeholder="Phone" name="phone" ref={phoneInput}  value={phone} onChange={(e) => setPhone(e.target.value)} required/>
             <div className="input-div">
                <input type={type} placeholder="Password" name="password" ref={passwordInput}  value={password} onChange={(e) => passwordChange(e)} required/>
                <p className={(errorMessage != "" ? "error-msg" : "error-msg off-screen")} ref={errDiv}>{errorMessage}</p>
                <span className="eye-slash" onClick={handleClick}> <FontAwesomeIcon icon={icon} /></span>
                
             </div>
          
          {isFetching ?  <button>Loading...</button> :  <button type="submit">Register</button>}
             <p>Already Registered? <Link to='/login' className="login-link">Login</Link></p>
          </form>
        
          </div>
        )
      }
   
</div>
  )
}

export default RegisterForm