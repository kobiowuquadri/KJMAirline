import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../Assets/Images/kjm-logo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://kjm.zuuroo.com/api/auth/register', {
        name: fullName,
        username,
        email,
        password,
      });
      console.log(response.data);
      // Handle successful response
      navigate('/login')
    } catch (error) {
      console.error(error.response.data);
      // Handle error
    }
  };

  return (
    <div>
      <div id='signupnav'>
        <img src={logo} alt="Logo" id='logoacct'/>
      </div>
      <div id='signuphero'>
        <div id='signupform'>
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName"></label>
            <input type="text" id='forminput' placeholder='Full Name' name='fullName' value={fullName} onChange={(event) => setFullName(event.target.value)} /> <br/>
            <input type="text" id='forminput' placeholder='User Name' name='username' value={username} onChange={(event) => setUsername(event.target.value)} /> <br/>
            <input type="email" id='forminput' placeholder='Email Address' name='email' value={email} onChange={(event) => setEmail(event.target.value)} /> <br/>
            <input type="password" id='forminput' placeholder='Password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} /> <br/>
            <button type="submit" id='signupsubmit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;