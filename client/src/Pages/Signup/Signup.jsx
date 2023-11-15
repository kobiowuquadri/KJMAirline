import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../../Assets/Images/kjm-logo.png'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'

function Signup() {
  const [userData, setUserData] = useState({
    name: '', // Use 'name' here
    username: '',
    email: '',
    password: '',
  })
  
  
  const [error, setError] = useState('')
  const [user, setUser] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    // Check local storage for user data when the Navbar component is mounted
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post(
        'https://kjm.zuuroo.com/api/auth/register',
        userData
      )
      // Redirect the user to the login page upon success
      navigate('/login')
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError(
          'User with this email or username already exists. Please choose a different one.'
        )
      } else {
        setError('An error occurred. Please try again later.')
      }
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }))
  }

  return (
    <div>
      <Navbar/>
      <div id='signuphero'>
        <div id='signupform'>
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'></label>
            <input
              type='text'
              id='forminput'
              placeholder='Full Name'
              name='name' // Use 'name' here
              value={userData.name} // Use 'name' here
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
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            {error && <div className='error-message'>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
