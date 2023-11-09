import React, {useState} from 'react'
import logo from '../../../Assets/Images/kjm-logo.png'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.post(
            'https://kjm.zuuroo.com/api/admin/login',
            {
              email,
              password
            }
          );
      
          const { access_token } = response.data;
          localStorage.setItem('accessToken', access_token);
          navigate('/admin/dashboard')
        }
        catch(err){
           console.log(err.message)
           console.error(err.response?.data);
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

export default AdminLogin