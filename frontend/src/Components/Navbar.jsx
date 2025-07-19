import React, { useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className='flex items-center justify-between py-4 text-sm mb-4 border-b border-b-black'>
      <img src='./src/assets/logo.png' alt='logo' className='w-25 cursor-pointer'/>
      <ul className='hidden md:flex items-start gap-10 font-medium'>
        <NavLink to='/'>
          <li className='py-1 '>HOME</li>
          <hr className='broder-none outline-none h-0.5 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about-us'>
          <li className='py-1 '>ABOUT US</li>
          <hr className='broder-none outline-none h-0.5 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact-us'>
          <li className='py-1 '>CONTACT US</li>
          <hr className='broder-none outline-none h-0.5 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {token ? 
        <div className='flex items-center'>
          <img src='./src/assets/profile.png' alt='profile' className='w-9 h-9 cursor-pointer'/>
          <img src='./src/assets/dropDown.png' alt='arrow' className='w-5 h-5 cursor-pointer'/>
          <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
            <div>
              <p>My Profile</p>
              <p>My Journey</p>
              <p>Log Out</p>
            </div>
          </div>
        </div>
        :<button onClick={()=>navigate('/login')}className='bg-black text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
        
      </div>
      
    </div>
  )
}

export default Navbar