import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Trip from './Pages/Trip/Trip'
import Signup from './Pages/Signup/Signup'
import Information from './Pages/Information/Information'
import SignIn from './Pages/SignIn/SignIn'
import BookFlight from './Pages/BookFlight/BookFlight'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import { AuthProvider } from './contexts/authContext'

function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/mytrip' element={<Trip />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/information' element={<Information />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        <Route path='/bookflight' element={<BookFlight />}></Route>
        <Route path='/admindashboard' element={<AdminDashboard />}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
