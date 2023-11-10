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
        <SideBar />
      <div className='main__admin2 shadow'>
        <div
          className='rounded-9 m-2 d-flex align-items-center justify-content-center fs-2 text-white flex-column fw-bold shadow'
          style={{ height: '250px', width: '250px', background: 'rgb(55,105,159)' }}
        >
          <p>{totalUsers}</p>
           <p>Users</p>
        </div>
        <h1 className='pt-4'>All Users</h1>
        <MDBTable id='table__width'>
          <MDBTableHead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            
              {displayUsers.map((users, index) => {
                return (
                  <tr key={index}>
                    <td> <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      /></td>
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
