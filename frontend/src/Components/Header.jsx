import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-2xl px-6 md:px-10 lg:px-20'>
        {/* left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Welcome to TripMate
            </p>
            <div>
                <p>your ultimate travel itinerary planner!</p>
            </div>
            <a href='' className='flex text-white bg-black px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Plan Journey
                <img src='./src/assets/arrowRight.png' alt='arrow' className='w-6 h-6 cursor-pointer'/>
            </a>
            
        </div>
        {/* right side */}
        <div className="relative md:w-1/2 flex justify-center items-end">
            <img src="./src/assets/headerImage.jpg" alt="header" className="w-full max-w-full object-contain z-[-20] md:absolute md:bottom-0 md:h-[90%] md:z-auto"/>
        </div>


    </div>
  )
}

export default Header