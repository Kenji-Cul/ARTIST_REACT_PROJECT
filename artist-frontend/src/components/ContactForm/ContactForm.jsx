import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-container">
           <div className="form-container">
            <h3>Contact Us</h3>

         <form action="" className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Location" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone" />
            <button type="submit">Send Message</button>
         </form>
         </div>
    </div>
  )
}

export default ContactForm