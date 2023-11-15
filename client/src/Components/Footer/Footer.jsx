import React from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { RxTwitterLogo } from 'react-icons/rx'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import './footer.scss'
import foot_log from '../../Assets/Images/kjm-logo.png'
import { Link } from 'react-router-dom'



function Footer() {
  return (
      <div className="footer_links shadow">
        <div className="link_1">
         <img src={foot_log} width={'200rem'} alt="" />
          <ul>
                <li><AiOutlineWhatsApp style={{fontSize:'30px', color:'white'}}/></li>
                <li><BiLogoFacebook style={{fontSize:'30px', color:'white'}}/></li>
                <li><BiLogoLinkedin style={{fontSize:'30px', color:'white'}}/></li>
                <li><RxTwitterLogo style={{fontSize:'30px', color:'white'}}/></li>
          </ul>
        </div>

        <div className="link_2">
          <ul>
            <li><Link className='text-white' to={'/'}>Home</Link></li>
            <li><Link className='text-white' to={'/trip'}>My Trip</Link></li>
            <li><Link className='text-white' to={'/information'}>Information</Link></li>
          </ul>
        </div>

        <div className="link_3">
          <ul>
            <li><Link className='text-white' to={'/login'}>Log In</Link></li>
            <li><Link className='text-white' to={'/signup'}>Sign Up</Link></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
        <div className="link_4">
        <button id="btn_footer"><Link className='text-dark' to={'/login'}>Book Flight</Link></button>
        <p className='text-white'>©KJMAirline. All Rights Reserved</p>
      </div>
      </div>
  )
}

export default Footer