import React from 'react'
import Slidebar from '../../../Components/SideBar/SideBar'
import axios from 'axios'
import './prices.scss'



function Prices() {

  const handleCreatePrice = async() => {
    try {
      const response = await axios.post('https://kjm.zuuroo.com/api/admin/create_price', {
       
      })
    } catch (error) {
      console.log(response?.data?.error)
    }
  }


  return (
    <div className='admin__dashbaord'>
    <Slidebar/>
   <div className='main__admin2 shadow mt-2'>
    <h1>Update Prices</h1>
    <form action="" id='update__prices' className='shadow'>
     <p>
     <label for="" >Flight Name: </label>
      <input type="text" />
     </p>
     <p>
     <label for="" >Amount: </label>
      <input type="number" />
     </p>
     <p>
      <input type="submit" className='btn btn-primary border-0' value="Update Price" />
     </p>
    </form>
    </div>
    </div>
  )
}

export default Prices