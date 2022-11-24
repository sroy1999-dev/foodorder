import React from 'react';
import Delivery from '../img/delivery.png';
import Hero from '../img/heroBg.png';

const HomeContainer = () => {
  return (
    <section className='grid grid-co0ls-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
          </div>
        </div>
        <p className='text-[3rem] lg:text-[5.25rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in{" "} 
          <span className='text-orange-600 text-[3rem] md:text-[5rem]'>Your City</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatum nulla magnam! Suscipit ea magni mollitia deleniti fugit quas doloribus, exercitationem eligendi maxime, voluptatum maiores ab odit sit cupiditate voluptas.</p>
        <button type='button' 
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center'>
        <img src={Hero} className='ml-auto h-650' alt="hero" />
        <div className='w-full h-full absolute flex items-center justify-center'>

        </div>
      </div>
    </section>
  )
}

export default HomeContainer;