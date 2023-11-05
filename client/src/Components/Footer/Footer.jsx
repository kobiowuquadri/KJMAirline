import React from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { RxTwitterLogo } from 'react-icons/rx'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
function Footer() {
  return (
    <div className='tw-flex tw-bg-gray-100 tw-justify-between tw-p-10 tw-mt-24 tw-w-full'>
      <div className='tw-w-1/2 tw-text-xs'>
        <div className='tw-flex'>
        <h3 className='tw-text-sm sm:tw-text- lg:tw-text-lg'>FLIGHT <br /> SAFETY</h3>
        </div>
        <p className='tw-tracking-widest tw-text-sm sm:tw-text-base lg:tw-text-lg'>FOUNDATION</p>
        <p>701 N. Fairfax Street, Suite 250, Alexandria, Virgina 22314</p>
        <p>Phone: +1 703 739 6700 | Fax: +1 703 739 6708</p>
        <div className='tw-flex tw-justify-between tw-w-2/5 tw-py-5 tw-text-indigo-600 lg:tw-w-1/4'>
          <BiLogoLinkedin/>
          <RxTwitterLogo/>
          <AiOutlineWhatsApp/>
          <BiLogoFacebook/>
        </div>
        <div className='tw-pt-60'>
          <p>Join our group on</p>
          <h3 className='tw-flex tw-text-xl'>Linked  <BiLogoLinkedin className='tw-text-2xl tw-pt-1 tw-text-indigo-600'/></h3>
        </div>
      </div>
      <div className='tw-w-1/2 tw-text-xs tw-pl-10'>
        <h3 className='tw-text-sm sm:tw-text-base lg:tw-text-lg'>FLIGHT SAFETY FOUNDATION ON TWITTER</h3>
        <p className='tw-leading-6'>Stakeholder update on findings and progress made in our Global Safety information Project now available at fsfgsip.org/gsip-year-one "....#FS-FGSIP"</p>
        <p>3 Hours Ago</p>
        <button className="btn btn-primary">follow flightSafety</button>
        <h3 className='tw-pt-20 tw-text-sm sm:tw-text-base lg:tw-text-lg'>PROJECTS & PARTNERS</h3>
        <hr /><br />
        <div className='tw-flex tw-text-xs'>
          <div className='tw-w-1/2'>
            <p>Global Safety information Project</p>
            <p>Basic Aviation Risk Standard</p>
            <p>SKYBrary</p>
            <p>Aviation Safety Network</p>
          </div>
          <div className='tw-w-1/2 tw-text-xs tw-pl-10'>
            <p>Donate</p>
            <p>Advertise in AeroSafety World</p>
            <p>Sponsor & Exhibit at our Events</p>
            <div className='tw-flex'>
              <p>Contact Us</p>
              <p>Site Map</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer