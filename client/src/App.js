import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home'
import Trip from './Pages/Trip/Trip'
import Signup from './Pages/Signup/Signup';
import Information from './Pages/Information/Information';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mytrip' element={<Trip/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route index element={<Home/>}/>
        <Route path='/information' element={<Information/>}></Route>
      </Routes>
    </div>
  )
}

export default App