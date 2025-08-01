import React from 'react';
import Journey from '../pages/Journey';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-2xl px-6 md:px-10 lg:px-20 h-screen overflow-hidden'> {/* Full screen height added */}
      
      {/* left side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-0'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight'>
          Welcome to TripMate
        </p>
        <div>
          <p>your ultimate travel itinerary planner!</p>
        </div>
        <Link to="/Journey">
        <button className='flex text-white bg-black px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Plan Journey for free
          <img src='./src/assets/arrowRight.png' alt='arrow' className='w-6 h-6 ml-2 cursor-pointer'/>
        </button>
        </Link>
      </div>

      {/* right side */}
      <div className="relative md:w-1/2 flex justify-center items-center h-full">
        <img 
          src="./src/assets/headerImage.jpg" 
          alt="header" 
          className="w-full h-full object-contain max-w-full max-h-full" 
        />
      </div>
      
    </div>
  );
};

export default Header;
