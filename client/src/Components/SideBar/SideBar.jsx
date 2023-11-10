import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {  MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBRipple,
    MDBInput,
    MDBListGroup,
    MDBDropdownLink,
    MDBListGroupItem,
    MDBBadge
} from 'mdb-react-ui-kit'
import './slidebar.scss'
import logoIcon from '../../Assets/Images/kjm-logo.png'
import globe from '../../Assets/Images/globe.png'
import {FaUsers} from 'react-icons/fa6'


const Slidebar = () =>  {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white w-25 sidebar">
        <div className="position-sticky z-10 shadow h-100 bg-white" id='width__media'>
          <MDBListGroup flush className="mx-3 z-10 mt-4">
            <MDBRipple rippleTag='span'>
             <Link to={'/admin/dashboard'}>
             <MDBListGroupItem tag='a' href='#' action style={{background: 'rgb(55,105,159)'}} active className='d-flex align-items-center gap-2 border-0 border-bottom rounded rounded'>
                <FaUsers />
                  Users
              </MDBListGroupItem>
             </Link>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <Link to={'/admin/dashboard/bookedflights'}>
                <MDBListGroupItem tag='a' href='#' action className=' d-flex align-items-center gap-2 border-0 border-bottom rounded'>
                  <img src={globe} width={'20px'} alt="" />
                  Flight
                </MDBListGroupItem>
              </Link>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 rounded'>
                <MDBIcon fas icon="money-bill me-3" />
                Logout
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>
      <MDBNavbar expand='lg' light bgColor='white' className='shadow fixed-top'  style={{display:'flex', alignItems: 'center', height:'70px'}}>
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#'>
             <img src={logoIcon} width={'150'} alt="" />
            </MDBNavbarBrand>
{/* 
            <MDBCollapse navbar>
            <MDBNavbarItem className="d-flex align-items-center">
            <MDBInput label='Search (ctrl + "/" to focus)' id='form1' type='text' />
            <MDBIcon fas icon="search mx-2" />
            </MDBNavbarItem>
          </MDBCollapse> */}


          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Some news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Another news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fas icon='fill-drip' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon='github' />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" width={'32'} alt="" loading="lazy" />
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">My profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Settings</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Logout</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Slidebar