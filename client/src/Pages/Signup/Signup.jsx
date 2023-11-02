import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../Assets/Images/kjm-logo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [userData, setUserData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://kjm.zuuroo.com/api/auth/register', userData);

      localStorage.setItem('user', JSON.stringify({ username: userData.username }));
      console.log(userData.username)

      console.log(response.data);
      // Handle successful response
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('User with this email or username already exists. Please choose a different one.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div id='signupnav'>
        <img src={logo} alt='Logo' id='logoacct' />
      </div>
      <div id='signuphero'>
        <div id='signupform'>
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor='fullName'></label>
            <input
              type='text'
              id='forminput'
              placeholder='Full Name'
              name='fullName'
              value={userData.fullName}
              onChange={handleChange}
            />{' '}
            <br />
            <input
              type='text'
              id='forminput'
              placeholder='User Name'
              name='username'
              value={userData.username}
              onChange={handleChange}
            />{' '}
            <br />
            <input
              type='email'
              id='forminput'
              placeholder='Email Address'
              name='email'
              value={userData.email}
              onChange={handleChange}
            />{' '}
            <br />
            <input
              type='password'
              id='forminput'
              placeholder='Password'
              name='password'
              value={userData.password}
              onChange={handleChange}
            />{' '}
            <br />
            <button type='submit' id='signupsubmit'>
              Submit
            </button>
            {error && <div className='error-message'>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
