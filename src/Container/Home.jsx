import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import useTypewriterEffect, {
  getTypewriter,
  useCursor,
} from 'use-typewriter-effect'

function Home() {
  const [state, dispatch, isTyping] = useTypewriterEffect()
  const cursor = useCursor(isTyping)

  React.useEffect(() => {
    getTypewriter(dispatch)
      .type(` I'm a FrontEnd Developer`)
      .pauseFor(700)
      .deleteSome('18')
      .type(`Mern Stack Enthusiast`)
      .pauseFor(700)
      .deleteAll()
      .setLoop(true)
      .trigger()

    // React guaranties that dispatch reference is stable, so we can safely
    // declare it as a dependency
  }, [dispatch])
  return (
    <div name='home' className='w-full h-screen bg-[#044343]'>
      <div className='max-w-[80%] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FF2E63] text-4xl font-bold tracking-widest'>
          Hello
        </p>
        <p className='text-xl sm:text-2xl font-bold text-[#adadad] m-2'>I am</p>
        <h1 className='text-5xl sm:text-6xl font-bold text-[#EEEEEE] content-x'>
          Saurabh Kedar
        </h1>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#adadad]'>
          <main>
            <p>
              {state}
              <span
                style={{ visibility: cursor ? 'visible' : 'hidden' }}
              ></span>
            </p>
          </main>
        </h2>
        <p className='text-[#adadad] text-sm py-4 max-w-[700px] mt-4 tracking-wider sm:tracking-normal sm:text-xl sm:py-2'>
          I'm a developer who is in love with React.js, I enjoy building
          beautiful Ui's to provide exceptional functionality, Currently im
          focused on building responsive front-end web applications..
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
