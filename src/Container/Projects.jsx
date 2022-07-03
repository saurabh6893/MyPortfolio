import React from 'react'
import Taskbox from '../projectimgs/Taskbox.png'
import g2048 from '../projectimgs/2048.png'
import expt from '../projectimgs/expt.png'
import ss from '../projectimgs/ss.png'
import blogf from '../projectimgs/blogf.png'
import jq from '../projectimgs/jumpquest.png'

function Projects() {
  return (
    <div
      name='projects'
      className='w-full h-full md:h-screen text-[#EEEEEE] bg-[#044343]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          {/* <p className='text-4xl font-bold inline border-b-4 text-[#EEEEEE] border-[#FF2E63]'>
            Projects
          </p> */}
          <p className='py-2'>
            Here are some of my recent <span className='prj'> Projects</span>
          </p>
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
              <h1 className='text-2xl font-bold text-white tracking-wider'>
                Taskbox
              </h1>
              <span className='text-gray-300 tracking-wider'>
                React.Js / Json server
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button
                    disabled
                    className='text-center rounded-lg px-4 py-3 m-2 bg-gray-500 text-gray-700 font-bold text-lg'
                  >
                    Demo
                  </button>
                </a>
                <a href='https://github.com/saurabh6893/TaskBox'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  hover:bg-[#92B4EC] text-gray-700 font-bold text-lg'>
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
              <h1 className='text-2xl font-bold text-white tracking-wider'>
                2048
              </h1>
              <span className='text-gray-300 tracking-wider'>Javascript</span>
              <div className='pt-8 text-center'>
                <a href='https://saurabh6893.github.io/2048/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  hover:bg-[#92B4EC] text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/saurabh6893/2048'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white   hover:bg-[#92B4EC] text-gray-700 font-bold text-lg'>
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
              <h1 className='text-2xl font-bold text-white tracking-wider'>
                Snake-Supreme
              </h1>
              <span className='text-gray-300 tracking-wider'>Javascript</span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center  hover:bg-[#92B4EC] rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center  hover:bg-[#92B4EC] rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${blogf})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold text-white tracking-wider'>
                BlogF
              </h1>
              <span className='text-gray-300 tracking-wider'>
                React-Firebase
              </span>

              <div className='pt-8 text-center'>
                <a href='https://blog-6893.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  hover:bg-[#92B4EC] text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/saurabh6893/BlogX-alpha'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white   hover:bg-[#92B4EC] text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              {/* <span className='text-gray-300 tracking-wider'>
                firebase:quota exhausted
              </span> */}
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${expt})` }}
            className='shadow-lg shadow-[#222831] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effects ahead */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold text-white tracking-wider'>
                ExpenseTracker
              </h1>
              <span className='text-gray-300 tracking-wider'>Javascript</span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg  hover:bg-[#92B4EC] px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center  hover:bg-[#92B4EC] rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
              <h1 className='text-2xl font-bold text-white tracking-wider'>
                JumpQuest
              </h1>
              <span className='text-gray-300 tracking-wider'>Javascript</span>
              <div className='pt-8 text-center'>
                <a href='https://saurabh6893.github.io/theSnakeSupreme/'>
                  <button className='text-center  hover:bg-[#92B4EC] rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/saurabh6893/theSnakeSupreme'>
                  <button className='text-center  hover:bg-[#92B4EC] rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
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
