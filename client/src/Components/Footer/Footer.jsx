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
          <ul>
            <li data-aos="flip-left">
              <img src={foot_log} width={'200rem'} alt="" />
            </li>
            <li>
              <ol data-aos="flip-left">
                <a href="javascript:void()">
                  <li><img src="../../Assets/Images/flight.jpeg"  alt="" /></li>
                </a>
                <li><a href="#"><img src={<AiOutlineWhatsApp/>} alt="" /></a></li>
                <li><a href="#"><img src={<BiLogoFacebook/>} alt="" /></a></li>
                <li><a href="#"><img src={<BiLogoLinkedin/>} alt="" /></a></li>
                <li><a href="#"><img src={<RxTwitterLogo/>} alt="" /></a></li>
              </ol>
            </li>
          </ul>
        </div>

        <div className="link_2" data-aos="flip-left">
          <ul>
            <li><a href="javascript:void()">About Us</a></li>
            <li><a href="javascript:void()">Contact</a></li>
            <li><a href="javascript:void()">Blog</a></li>
          </ul>
        </div>

        <div className="link_3" data-aos="flip-left">
          <ul>
            <li><a href="javascript:void()">Careers</a></li>
            <li><a href="javascript:void()">Support</a></li>
            <li><a href="javascript:void()">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="link_4" data-aos="flip-right">
        <button id="btn_footer">Book Flight</button>
        <p className='text-white'>©KJMAirline. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer