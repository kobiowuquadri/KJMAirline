import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home'
import Trip from './Pages/Trip/Trip'
import Signup from './Pages/Signup/Signup';
import Information from './Pages/Information/Information';
import SignIn from './Pages/SignIn/SignIn';
import BookFlight from './Pages/BookFlight/BookFlight';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/mytrip' element={<Trip/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/information' element={<Information/>}></Route>
        <Route path='/login' element={<SignIn/>}></Route>
        <Route path='/bookflight' element={<BookFlight/>}></Route>
      </Routes>
    </div>
  )
}

export default App