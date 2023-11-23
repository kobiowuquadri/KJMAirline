import React, {useState} from 'react'
import Slidebar from '../../../Components/SideBar/SideBar'
import axios from 'axios'
import './prices.scss'



function Prices() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleCreatePrice = async () => {
    try {
      const response = await axios.post('https://kjm.zuuroo.com/api/admin/create_price', {
       name,
       price
      })
      console.log(response?.data)
    } catch (err) {
      console.log(err?.response?.data)
    }
  }


  return (
    <div className='admin__dashbaord'>
    <Slidebar/>
   <div className='main__admin2 shadow mt-2'>
    <h1>Create Prices</h1>
    <form onSubmit={handleCreatePrice} id='update__prices' className='shadow'>
     <p>
     <label for="" >Flight Name: </label>
      <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
     </p>
     <p>
     <label for="" >Amount: </label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} name='price' />
     </p>
     <p>
      <input type="submit"  className='btn btn-primary border-0' value="Update Price" />
     </p>
    </form>
    </div>
    </div>
  )
}

export default Prices