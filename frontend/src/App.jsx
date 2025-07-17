import React from 'react'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/profile/:my-journey' element={<MyProfile />} />
            <Route path='/profile' element={<MyProfile />} />
        </Routes>
    </div>
  )
}

export default App
