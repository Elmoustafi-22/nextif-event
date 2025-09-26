import React from 'react'
import { Link } from 'react-router-dom'
import { PiArrowUpRight } from 'react-icons/pi'
import Countdown from '@/components/Countdown';

const Register = () => {
    const eventDate = "2025-12-27T09:00:00+01:00";
  return (
    <section className="md:container px-6 mt-10 py-10 bg-royal-blue">
      <div className="flex md:justify-between gap-4 flex-col md:flex-row">
        <h1 className="text-left text-gray-50 text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
          Register Now
        </h1>
        <p className="text-gray-50 flex flex-col gap-1 font-body">
          <span className="block text-lg md:text-xl">
            Secure your spot at <br className='hidden md:block'/> NextIF Islamic finance roundtable 
          </span>
        </p>
      </div>
      <div className="px-0 md:px-5 lg:px-30 grid grid-cols-1 gap-8 mt-8 md:mt-12">
        <div className='bg-prussian-blue relative pl-8 md:pl-30 lg:pl-40 py-6 flex flex-col'>
            <h6 className='text-xl font-body text-gray-50 font-semibold'>Countdown:</h6>
            <Countdown targetDate={eventDate} className='text-white'/>
            <img src='/images/register-vector.png' alt='register vector' className='absolute bottom-0 right-0 max-h-30 md:max-h-40 lg:max-h-50'/>
        </div>
        
      </div>
      <div className='flex flex-col justify-center items-center mt-10 md:mt-16 lg:mt-20'>
        <Link className='text-xl md:text-2xl font-body font-semibold text-gray-50 px-8 md:px-18 py-2 md:py-4 flex gap-2 items-center whitespace-nowrap rounded-full bg-gradient-to-r from-prussian-blue to-blue-900 hover:from-prussian-blue/90 hover:to-blue-900/90'>Register <PiArrowUpRight/>  </Link>
      </div>
    </section>
  );
}

export default Register
