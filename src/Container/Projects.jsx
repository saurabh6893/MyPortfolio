import React from 'react'
import Taskbox from '../projectimgs/Taskbox.png'
import g2048 from '../projectimgs/2048.png'
import expt from '../projectimgs/expt.png'
import ss from '../projectimgs/ss.png'
import wthr from '../projectimgs/wthr.png'
import jq from '../projectimgs/jumpquest.png'

function Projects() {
  return (
    <div
      name='projects'
      className='w-full md:h-screen text-[#EEEEEE] bg-[#044343]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#EEEEEE] border-[#FF2E63]'>
            Projects
          </p>
          <p className='py-4'>Here are some of my recent projects</p>
        </div>

        {/* the main project container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {/* grid body */}

          <div
            style={{ backgroundImage: `url(${Taskbox})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.Js-Json server
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${g2048})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.Js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${wthr})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.Js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ss})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.Js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${expt})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.Js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${jq})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React.Js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid body ends here */}
        </div>
      </div>
    </div>
  )
}

export default Projects
