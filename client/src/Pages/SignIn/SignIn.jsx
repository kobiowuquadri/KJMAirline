import React, { useState } from 'react'
import axios from 'axios'
import logo from '../../Assets/Images/kjm-logo.png'
import { useNavigate } from 'react-router-dom'
import '../Signup/Signup.scss'

function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_access_token'
  };
  
  axios
    .get('https://kjm.zuuroo.com/api/auth/user', {
      headers: headers
    })
    .then(response => {
      // Access and process the data from the response
      const userData = response.data;
      console.log("User ID: " + userData.id);
      console.log("Username: " + userData.username);
      console.log("Flight ID: " + userData.flightId);
      console.log("Email: " + userData.email);
      console.log("Email Verified At: " + userData.email_verified_at);
      console.log("Created At: " + userData.created_at);
      console.log("Updated At: " + userData.updated_at);
    })
    .catch(error => {
      console.error(error);
    });

    
  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post(
        'https://kjm.zuuroo.com/api/auth/login',
        {
          email,
          password
        }
      )

      // Store user data in local storage
      // localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data)

      // Redirect to the '/bookflight' page
      navigate('/bookflight')
    } catch (error) {
      console.error(error.response?.data) // Use optional chaining to access data
      // Handle error
    }
  }

  return (
    <div>
      <div id='signupnav'>
        <img src={logo} alt='Logo' id='logoacct' />
      </div>
      <div id='signuphero'>
        <div id='signupform'>
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              id='forminput'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />{' '}
            <br />
            <input
              type='password'
              id='forminput'
              placeholder='Password'
              name='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />{' '}
            <br />
            <button type='submit' id='signupsubmit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
