import React, { useRef, useState, useContext, useEffect } from 'react'
import './LoginForm.css'
import axios from "axios"
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash, faEye, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loginSelector, loginUser, clearState } from '../../features/loginSlice';
import { useDispatch, useSelector } from 'react-redux';


const LoginForm = () => {

   let link = "http://localhost:5000/login";
   
   const dispatch = useDispatch();

 
 const [email, setEmail] = useState("");
 
 const [password, setPassword] = useState("");

 const [errorMessage, setErrorMessage] = useState("");

 const [success, setSuccess] = useState(false);


 const emailInput = useRef(null);
 
 const passwordInput = useRef(null);
 const errDiv = useRef();

 const { isFetching, isSuccess, isError, errorMsg, userInfo } = useSelector(
   loginSelector
);



 
const navigate = useNavigate();


const passwordChange = (e) => {
let newPass = e.target.value;
   setPassword(newPass);
 
   
}



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
   

    let data = {email, password};
    dispatch(loginUser(data));
 
   

    //console.log({ email, password});
  
  }

  useEffect(() => {
    if (userInfo) {
      navigate('/artistprofile');
    }
  }, [navigate, userInfo])

  useEffect(() => {
   if (isError) {
      console.log(errorMsg);
   }

   if (isSuccess) {
       setSuccess(true);
        
      //  localStorage.getItem("token") ?  setSuccess(true) : null;
        }
}, [isError, isSuccess]);


  return (
    <div className="register-form-container">
      {
         success ? (
            <div className="form-container">
                <div className="success-div">
                   <h3>Login Success!</h3>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <p  ref={errDiv}></p>
        </div>
         ) : (
            <div className="form-container">
            <h3>Login as an Artist</h3>
       
         <form  className="register-form" onSubmit={handleSubmit}>
       
            <input type="email" placeholder="Email" name="email" ref={emailInput}  value={email} onChange={(e) => setEmail(e.target.value)} required/>
           
            <div className="input-div">
               <input type={type} placeholder="Password" name="password" ref={passwordInput}  value={password} onChange={(e) => passwordChange(e)} required/>
              { errorMsg !=""
 ? <p className="error-msg" ref={errDiv}>{errorMsg}</p> : null}
               <span className="eye-slash" onClick={handleClick}> <FontAwesomeIcon icon={icon} /></span>
               
            </div>
         
           {isFetching ? <button>Loading...</button> : <button type="submit">Login</button>} 
            <p>Not Registered? <Link to='/register' className="login-link">Register</Link></p>
         </form>
       
         </div>
         )
      }
   
</div>
  )
}

export default LoginForm