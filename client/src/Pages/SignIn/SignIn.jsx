import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import logo from '../../Assets/Images/kjm-logo.png'
import { useNavigate } from 'react-router-dom'
import '../Signup/Signup.scss'
import { AuthContext } from '../../contexts/authContext'

function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setIsUser, setUserData } = useContext(AuthContext);

  const handleSubmit = async event => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        'https://kjm.zuuroo.com/api/auth/login',
        {
          email,
          password
        }
      );
  
      const { access_token } = response.data;
      localStorage.setItem('accessToken', access_token);
      
      // console.log(accessToken);
      setIsUser(response.data);
  
      console.log(response.data);
  
      // Call checkUser function after setting the accessToken state
      const checkUser = async () => {
        try {
          const response = await axios.get('https://kjm.zuuroo.com/api/auth/user', {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`, // Use template literal
            },
          });
  
          console.log(access_token);
          const userData = response?.data;
          setUserData(userData)
          console.log(userData);
        } catch (err) {
          console.log(err.message);
        }
      };
  
      checkUser(); // Call the checkUser function here
  
      navigate('/bookflight');
    } catch (error) {
      console.error(error.response?.data);
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   console.log('useEffect triggered');
  //   checkUser();
  // }, [accessToken]);

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
