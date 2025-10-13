import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/admin/admin/v1/login`, { email, password })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('adminToken', res.data.token);
                navigate('/admin/dashboard');
            })
            .catch((err) => {
                console.log(err);
            })
    }
  return (
    <>
    <div className='min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 pt-24 px-4'>
        <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4 w-[40%] mx-auto'>
            <input type="email" className='p-2 rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" className='p-2 rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button type='submit' className='bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all'>Login</button>
        </form>
    </div>
    </>
  )
}

export default AdminLogin