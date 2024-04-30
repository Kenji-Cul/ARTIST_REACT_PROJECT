import React, { useState } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
    const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const artists = {name, location, email, number};

    console.log(artists);
  }
  return (
    <div className="register-form-container">
    <div className="form-container">
     <h3>Register as an Artist</h3>

  <form  className="register-form" onSubmit={handleSubmit}>
     <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
     <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
     <input type="number" placeholder="Phone" value={number} onChange={(e) => setNumber(e.target.value)} required/>
     <button type="submit">Register</button>
  </form>
  </div>
</div>
  )
}

export default RegisterForm