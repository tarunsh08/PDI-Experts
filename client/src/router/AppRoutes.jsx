import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'
import ServiceUpdates from '../screens/ServiceUpdates'
import BookAppointment from '../screens/BookAppointment'
import AdminLogin from '../screens/admin/AdminLogin'
import Protect from '../SecureAdmin/Protect'
import AdminDash from '../screens/admin/AdminDash'
import AdminAppointment from '../screens/admin/AdminAppointment'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service-updates" element={<ServiceUpdates />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Protect><AdminDash /></Protect>} />
      <Route path="/admin/appointment/:id" element={<Protect><AdminAppointment /></Protect>} />
    </Routes>
  )
}

export default AppRoutes