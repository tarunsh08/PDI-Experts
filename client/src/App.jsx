import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="h-screen overflow-auto scrollbar-hide">
      <BrowserRouter>
      <Navbar />  
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App