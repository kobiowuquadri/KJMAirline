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
  const [accessToken, setAccessToken] = useState(''); // New state variable to store the access token

  // Use the context to access the setIsUser function
  const { setIsUser } = useContext(AuthContext);

 const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('https://kjm.zuuroo.com/api/auth/login', {
      email,
      password,
    });

    const { access_token } = response.data;
    await setAccessToken(access_token); // Await the state update

    console.log(accessToken); // Now accessToken should have the updated value

    // Set the user data using the setIsUser function from context
    setIsUser(response.data);

    console.log(response.data);
    navigate('/bookflight');
  } catch (error) {
    console.error(error.response?.data); // Use optional chaining to access data
    console.log(error.message);
  }
};
  

  
  const checkUser = async () => {
    try {
      const response = await axios.get('https://kjm.zuuroo.com/api/auth/user', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      });
      console.log(accessToken)
      
      const userData = response?.data;
      console.log(userData);
    } catch (err) {
      console.log(err.message);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, [accessToken]);

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
