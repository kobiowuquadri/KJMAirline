import React from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { RxTwitterLogo } from 'react-icons/rx'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import './footer.scss'
import foot_log from '../../Assets/Images/kjm-logo.png'



function Footer() {
  return (
    <footer className='shadow'>
      <div className="footer_links">
        <div className="link_1">
         <img src={foot_log} width={'200rem'} alt="" />
          <ul>
              <ol>
                <li><AiOutlineWhatsApp style={{fontSize:'30px', color:'white'}}/></li>
                <li><BiLogoFacebook style={{fontSize:'30px', color:'white'}}/></li>
                <li><BiLogoLinkedin style={{fontSize:'30px', color:'white'}}/></li>
                <li><RxTwitterLogo style={{fontSize:'30px', color:'white'}}/></li>
              </ol>
          </ul>
        </div>

        <div className="link_2">
          <ul>
            <li><a href="javascript:void()">About Us</a></li>
            <li><a href="javascript:void()">Contact</a></li>
            <li><a href="javascript:void()">Blog</a></li>
          </ul>
        </div>

        <div className="link_3">
          <ul>
            <li><a href="javascript:void()">Careers</a></li>
            <li><a href="javascript:void()">Support</a></li>
            <li><a href="javascript:void()">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="link_4">
        <button id="btn_footer">Book Flight</button>
        <p className='text-white'>©KJMAirline. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer