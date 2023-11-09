import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import './admindashboard.scss'


function AdminDashboard () {
  return (
    <div className='admin__dashbaord'>
      <div className='main__admin'>
      <SideBar />
      </div>
      <div className='main__admin2 shadow'>
        <div className= 'bg-white text-dark m-2 border-3 d-flex align-items-center justify-content-around fw-bold shadow' style={{height:'250px', width:'250px'}}>
           TOTAL USER: 
        </div>
        <MDBTable id='table__width'>
          <MDBTableHead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Handle</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  )
}

export default AdminDashboard
