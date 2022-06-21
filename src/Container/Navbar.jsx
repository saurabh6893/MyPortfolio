import React, { useState } from 'react'
import S from '../Assets/s.png'
import {
  FaAlignJustify,
  FaArrowLeft,
  FaLinkedin,
  FaGithub,
  FaUserCircle,
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { Link } from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#044343] text-gray-300 text-2xl'>
      <div>
        <img src={S} alt='logo' style={{ width: '100px' }} />
      </div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={300}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={300}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='z-50 md:hidden'>
        {!nav ? <FaAlignJustify /> : <FaArrowLeft />}
      </div>

      {/* mobile */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#044343] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='projects'
            smooth={true}
            duration={300}
          >
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={300}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[15%] left-0'>
        <ul>
          <li
            className='w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-[#0077b5] rounded-2xl my-[40px]
            hover:bg-[#dd5143]'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/saurabhkedar681993/'
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>

          <li
            className='w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-[#333]
            hover:bg-[#dd5143] rounded-2xl my-[40px]'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/saurabh6893/'
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>

          <li
            className='w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-[#fafafa] rounded-2xl my-[40px]
            hover:bg-[#dd5143]'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email
              <MdMail size={30} />
            </a>
          </li>

          <li
            className='w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-10px] duration-300 bg-[#08333a] rounded-2xl my-[40px]
            hover:bg-[#dd5143]'
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://saurabh6893.github.io/Resume/'
            >
              Resume
              <FaUserCircle size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
