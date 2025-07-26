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
            <a href='#MainJourney' className='flex text-white bg-black px-8 py-3 rounded-full m-auto md:m-0 hover:scale-105 transition-all duration-300'>Plan Journey
                <img src='./src/assets/arrowRight.png' alt='arrow' className='w-6 h-6 cursor-pointer'/>
            </a>
            
        </div>
        {/* right side */}
    </div>
  )
}

export default Header