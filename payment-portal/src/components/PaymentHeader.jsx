import React from 'react'
import logo from '../assets/nextIf-logo-3.png'

const PaymentHeader = () => {
  return (
    <header className='font-raleway bg-white shadow-sm py-4'>
        <div className="container mx-auto px-4 flex justify-center">
            <div className='flex items-center justify'>
                <img src={logo} className='h-8' alt='NextIF logo'/>
                <span className="ml-2 text-xl font-semibold text-gray-800">Payment Portal</span>
            </div>
        </div>
    </header>
  )
}

export default PaymentHeader