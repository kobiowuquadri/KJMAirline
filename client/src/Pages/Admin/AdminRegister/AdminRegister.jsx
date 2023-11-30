import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import logo from '../../../Assets/Images/kjm-logo.png'

function AdminRegister() {
    const [adminData, setAdminData] = useState({
        name: '', 
        username: '',
        email: '',
        password: '',
      })
      
      
      const [error, setError] = useState('')
      const navigate = useNavigate()
    
      const handleSubmit = async event => {
        event.preventDefault()
    
        try {
          const response = await axios.post(
            'https://server.kjmairline.com/api/admin/register',
            adminData
          )
          console.log(response?.data)
          // Redirect the user to the login page upon success
          navigate('login')
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
        setAdminData(prevUserData => ({
          ...prevUserData,
          [name]: value
        }))
      }




  return (
    <div>
    <div id='signupnav'>
      <img src={logo} alt='Logo' id='logoacct' />
    </div>
    <div id='signuphero'>
      <div id='signupform'>
        <p className='text-center fw-bold'>ADMIN</p>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'></label>
          <input
            type='text'
            id='forminput'
            placeholder='Full Name'
            name='name' // Use 'name' here
            value={adminData.name} // Use 'name' here
            onChange={handleChange}
          />{' '}
          <br />
          <input
            type='text'
            id='forminput'
            placeholder='User Name'
            name='username'
            value={adminData.username}
            onChange={handleChange}
          />{' '}
          <br />
          <input
            type='email'
            id='forminput'
            placeholder='Email Address'
            name='email'
            value={adminData.email}
            onChange={handleChange}
          />{' '}
          <br />
          <input
            type='password'
            id='forminput'
            placeholder='Password'
            name='password'
            value={adminData.password}
            onChange={handleChange}
          />{' '}
          <br />
          <button type='submit' id='signupsubmit'>
            Submit
          </button>
          <p>Already have an account? <Link to='login'>Login</Link></p>
          {error && <div className='error-message'>{error}</div>}
        </form>
      </div>
    </div>
  </div>
  )
}

export default AdminRegister