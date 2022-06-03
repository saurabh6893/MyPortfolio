import React from 'react'
import html from '../Assets/html5.png'
import js from '../Assets/js.png'
import css from '../Assets/css3.png'
import rx from '../Assets/react.png'
import github from '../Assets/github.png'
import Tailwind from '../Assets/Tailwind.png'

function Skills() {
  return (
    <div name='skills' className='bg-[#044343] text-[#adadad]'>
      {/* the main container for skills */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#EB596E]  py-4'>
            Experience
          </p>
          <p className='py-4'>
            These are the elements that i use in my arsenal
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8'>
          <div className='shadow-md shadow-[#222831] hover:scale-110 duration-300'>
            <img src={html} alt='Html5 icon' className='w-20 mx-auto' />
            <p className='my-4'>Html5</p>
          </div>

          <div className='shadow-md shadow-[#222831] hover:scale-110 duration-300'>
            <img src={css} alt='Css3 icon' className='w-20 mx-auto' />
            <p className='my-4'>Css3</p>
          </div>

          <div className='shadow-md shadow-[#222831] hover:scale-110 duration-300'>
            <img src={js} alt='Javascript icon' className='w-20 mx-auto' />
            <p className='my-4'>Javascript</p>
          </div>

          <div className='shadow-md shadow-[#222831] hover:scale-110 duration-300'>
            <img src={rx} alt='React icon' className='w-20 mx-auto' />
            <p className='my-4'>React.Js</p>
          </div>

          <div className='shadow-md shadow-[#222831] hover:scale-110 duration-300'>
            <img src={github} alt='Github icon' className='w-20 mx-auto' />
            <p className='my-4'>Github</p>
          </div>

          <div className='shadow-md shadow-[#222831] hover:scale-110 duration-300'>
            <img src={Tailwind} alt='Tailwind icon' className='w-20 mx-auto' />
            <p className='my-4'>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
