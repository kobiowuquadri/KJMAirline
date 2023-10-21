import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App