import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#044343] text-[#EEEEEE]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-3xl font-bold inline border-b-4 border-[#EB596E]'>
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Hello, im Saurabh, Welcome to my Portfolio</p>
          </div>
          <div>
            <p className='tracking-wider'>
              I am an aspiring Web Developer, every website i visited in my life
              has led me to this path which i choose because of my interest in
              making projects that make people believe in the power of Web. What
              would you Ask for if someone made a website for you?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
