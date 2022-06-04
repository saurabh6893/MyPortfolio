import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#044343]'>
      <div className='max-w-[60%] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FF2E63] text-3xl font-bold tracking-widest'>Hi,</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#EEEEEE] font-Lobster'>
          Saurabh Kedar
        </h1>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#adadad]'>
          I'm a FrontEnd Developer
        </h2>
        <p className='text-[#adadad] text-sm py-4 max-w-[700px] tracking-wider sm:tracking-normal sm:text-xl sm:py-2'>
          I'm a developer who is love with React.js, I enjoy building beautiful
          Ui's to provide exceptional functionality, Currently im focused on
          building responsive front-end web applications..
        </p>
        <div>
          <button className='text-white text-xl border-2 px-6 py-4 my-5 flex items-center font-bold hover:bg-[#EB596E] hover:border-[#EB596E]'>
            <Link to='projects' smooth={true} duration={300}>
              View Projects
            </Link>
            <FaRegArrowAltCircleRight
              className='ml-5 hover:ml-7 duration-500'
              size={30}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
