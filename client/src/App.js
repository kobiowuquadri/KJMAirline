import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App