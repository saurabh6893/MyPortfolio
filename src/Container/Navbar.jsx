import React from 'react'
import S from '../Assets/s.png'
import { FaAlignJustify } from 'react-icons/fa'
function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2b6777] text-gray-300'>
      <div>
        <img src={S} alt='logo' style={{ width: '80px' }} />
      </div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div className='z-50 md:hidden'>
        <FaAlignJustify />
      </div>

      {/* mobile */}
      <ul className='absolute top-0 left-0 w-full h-screen bg-[#2b6777] flex flex-col justify-center items-center'>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      <div className='hidden'></div>
    </div>
  )
}

export default Navbar
