import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home'
import Trip from './Pages/Trip/Trip'
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mytrip' element={<Trip/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App