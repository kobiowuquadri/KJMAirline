import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Trip from './Pages/Trip/Trip'
import Signup from './Pages/Signup/Signup'
import Information from './Pages/Information/Information'
import SignIn from './Pages/SignIn/SignIn'
import BookFlight from './Pages/BookFlight/BookFlight'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import { AuthProvider } from './contexts/authContext'
import Payment from './Components/Payment/Payment'
import BookingPending from './Components/BookingPending/BookingPending'
import AdminRegister from './Pages/Admin/AdminRegister/AdminRegister'
import AdminLogin from './Pages/Admin/AdminLogin/AdminLogin'
import AllUsers from './Pages/Admin/AllUsers/AllUsers'
import BookedFlights from './Pages/Admin/BookedFlights/BookedFlights'
import Chopper from './Pages/Chopper/Chopper'
import PrivateJet from './Pages/PrivateJet/PrivateJet'

function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/mytrip' element={<Outlet />}>
          <Route index element={<Trip />}></Route>
          <Route path='bookflight' element={<BookFlight />}></Route>
          <Route path='chopper' element={<Chopper />}></Route>
          <Route path='privatejet' element={<PrivateJet />}></Route>
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/information' element={<Information />} />
        <Route path='/login' element={<SignIn />} />

        <Route path='/payment' element={<Payment />} />
        <Route path='/bookingpending' element={<BookingPending />} />
        <Route path='admin' element={<Outlet />}>
          <Route index element={<AdminRegister />}></Route>
          <Route path='login' element={<AdminLogin />}></Route>
          <Route path='dashboard' element={<Outlet />}>
            <Route index element={<AdminDashboard />}></Route>
            <Route path='bookedflights' element={<BookedFlights />}></Route>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
