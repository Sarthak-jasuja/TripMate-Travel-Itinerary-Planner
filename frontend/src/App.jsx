import React from 'react'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Navbar from './Components/Navbar.jsx'
import Journey from './pages/Journey.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Viewtrip from './pages/Viewtrip.jsx'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/profile' element={<MyProfile />} />
            <Route path='/Journey' element={<Journey />} />
            <Route path='login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='viewtrip/:tripid' element={<Viewtrip />} />
        </Routes>
    </div>
  )
}

export default App
