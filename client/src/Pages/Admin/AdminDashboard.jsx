import React, { useEffect, useState } from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import './admindashboard.scss'
import axios from 'axios'

function AdminDashboard () {
  const [totalUsers, setTotalUsers] = useState('')
  const [displayUsers, setDisplayUsers] = useState([])

  const adminAccessToken = localStorage.getItem('adminAccessToken')
  console.log(adminAccessToken)

  const handleTotelUsers = async () => {
    try {
      const response = await axios.get(
        'https://kjm.zuuroo.com/api/admin/total_user',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminAccessToken} `
          }
        }
      )
      console.log(response?.data)
      const { total_users } = response?.data
      setTotalUsers(total_users)
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  const handleAllUsers = async () => {
    try {
      const response = await axios.get(
        'https://kjm.zuuroo.com/api/admin/all_user',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminAccessToken}`
          }
        }
      )

      const { data } = response?.data
      console.log(response?.data?.data)
      setDisplayUsers(data)
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  useEffect(() => {
    handleTotelUsers()
    handleAllUsers()
  }, [])

  return (
    <div className='admin__dashbaord'>
      <div className='main__admin'>
        <SideBar />
      </div>
      <div className='main__admin2 shadow'>
        <div
          className='bg-white text-dark m-2 border-3 d-flex align-items-center justify-content-around fw-bold shadow'
          style={{ height: '250px', width: '250px' }}
        >
          USERs {totalUsers}
        </div>
        <MDBTable id='table__width'>
          <MDBTableHead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            
              {displayUsers.map((users, index) => {
                return (
                  <tr key={index}>
                    <th scope='row'>{users.id}</th>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    </tr>
                )
              })}
           
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  )
}

export default AdminDashboard
