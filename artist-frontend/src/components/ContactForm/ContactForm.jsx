import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const contacts = {name, location, email, number};

    console.log(contacts);
  }


  return (
    <div className="contact-form-container">
           <div className="form-container">
            <h3>Contact Us</h3>

         <form  className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="number" placeholder="Phone" value={number} onChange={(e) => setNumber(e.target.value)} required/>
            <button type="submit">Send Message</button>
         </form>
         </div>
    </div>
  )
}

export default ContactForm