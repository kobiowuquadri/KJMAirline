import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home'
import Information from './Pages/Information/Information';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/information' element={<Information/>}></Route>
      </Routes>
    </div>
  )
}

export default App