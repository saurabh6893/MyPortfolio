import React from 'react'

function Contact() {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#044343] flex justify-center items-center p-4'
    >
      <form
        action='https://getform.io/f/38a68afc-ffbd-4009-b073-1a6574a7c251'
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FF2E63] text-[#EEEEEE]'>
            Contact
          </p>
          <p className='text-[#EEEEEE] py-2'>
            Fill up the Form below or Shoot me an email
          </p>
        </div>

        <input
          className='bg-[#78D0EA] p-2'
          type='text'
          placeholder='name'
          name='name'
        />
        <input
          className='bg-[#78D0EA] my-4 p-2'
          type='email'
          placeholder='email'
          name='email'
        />
        <textarea
          className='bg-[#78D0EA] p-2'
          name='message'
          placeholder='message'
          rows='10'
        ></textarea>
        <button className='text-white border-2 hover:bg-[#FF2E63] hover:border-[#FF2E63] px-4 py-3 my-8 mx-auto flex items-center font-bold'>
          Send this Message
        </button>
      </form>
    </div>
  )
}

export default Contact
