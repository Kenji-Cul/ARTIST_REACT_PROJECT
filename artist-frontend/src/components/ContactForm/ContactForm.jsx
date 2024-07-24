import React, { useState } from 'react'
import { faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactForm.css'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setIsSubmitting(true);
    
    const contacts = {name, email, number};

    
//     REACT_APP_TEMPLATE_ID=
// REACT_APP_SERVICE_ID=service_zzbf1tm
// REACT_APP_PUBLIC_KEY=ePG43Noepvw_YQ_1C


    let TEMPLATE_ID = "template_okxk9m6";
    let SERVICE_ID = "service_zzbf1tm";
    let PUBLIC_KEY = "ePG43Noepvw_YQ_1C";

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          // setStateMessage('Message sent!');
          setSuccess(true);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds

         
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  }

  const moveToHome = () =>{
    navigate('/');
    window.location.reload();
  }
  


  return (
     <div className="contact-form-container">
    {
     
    success ? (
       <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div className="success-div">
         <h3>Success!</h3>
        <FontAwesomeIcon icon={faCircleCheck} />
        <Link  className="success-link" onClick={() => {moveToHome()}}>Back To Home</Link>
      </div>
      <p></p>
      </div>
 ) : (
           <div className="form-container">
            <h3>Contact Us</h3>

         <form  className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="Email" name="user_email" id="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="text" placeholder="Message" name="message" id="message" value={number} onChange={(e) => setNumber(e.target.value)} required/>

            { stateMessage ? <p className="error-msg">{stateMessage}</p> : null}

           {isSubmitting ? <button>Loading...</button> : <button type="submit">Send Message</button> } 
         </form>
         </div>
  
      )}
        </div>
  )
}

export default ContactForm