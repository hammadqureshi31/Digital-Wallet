import React from 'react'
import Navbar from '../components/Navbar'
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";

const Support = () => {
  return (
    <>
      <Navbar value={'Support'} />

      <div className='bg-[#EEEEF4] p-4 flex- flex-col gap-4 md:w-[1349px] md:px-8'>

        <div className='sm:flex md:gap-40'>
          <div className=' m-auto sm:mt-12 sm:w-72 md:w-full'>
 
            <div className='flex gap-3 mt-4 '>
              <div className='text-[#5F00D9] text-2xl mt-1 md:text-3xl'><MdEmail /></div>
              <h1 className='text-[#5F00D9] text-xl font-semibold md:text-3xl'>Contact Us</h1>
            </div>

            <p className='text-md mt-2'>
              Have a question or just want to know more? Feel free to reach out to us.
            </p>
          </div>

          <div className='bg-white rounded-lg mt-6 px-4 py-6 flex flex-col gap-4 sm:w-80 md:w-full'>
            <p>You will receive response within 24 hours of time of submit.</p>
            <div className='flex flex-col gap-2 '>
              <label htmlFor="" className='mt-1 font-semibold'>Name</label>
              <input type="text" name="" id="" placeholder='James'
                className='px-4 py-1 border-2 border-[#EEEEF4] rounded-md' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='mt-1 font-semibold'>Sur Name</label>
              <input type="text" name="" id="" placeholder='Arthur'
                className='px-4 py-1 border-2 border-[#EEEEF4] rounded-md' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Email</label>
              <input type="email" name="" id="" placeholder='name@mail.com'
                className='px-4 py-1 border-2 border-[#EEEEF4] rounded-md' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'> Message </label>
              <textarea name="" id="" cols="30" rows="5" placeholder='Your Message'
                className='px-4 py-1 border-2 border-[#EEEEF4] rounded-md'></textarea>
            </div>
            <div className='flex gap-1'>
              <input type="checkbox" name="" id="" />
              <p className='text-sm'>
                I agree with <span className='text-[#5F00D9]'>Terms & Conditions.</span>
              </p>
            </div>

            <div className='mt-2'>
              <button className='bg-[#EEEEF4] rounded-lg p-1 mb-3 w-full font-semibold text-md'>Send a Message</button>
              <button className='bg-[#5F00D9] text-white rounded-lg p-1 w-full font-semibold text-md'>Book a Meeting</button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 mt-4 sm:flex-row'>
          <div className='bg-white rounded-lg relative pb-2 md:w-full'>
            <img src="./images/dotbg.svg" alt="" className='absolute mt-1 mr-1 md:w-full' />
            <AiFillMessage className='text-[#5F00D9] ml-4 mt-4 text-2xl' />
            <h1 className='text-[#5F00D9] ml-4 mt-4 font-bold text-lg'>Live Chat</h1>
            <p className='m-4 font-light text-sm md:text-lg'>
              Don’t have time to wait for the answer? Chat with us now.
            </p>
          </div>

          <div className='bg-[#5F00D9] rounded-lg relative pb-2 sm:w-80 md:w-full'>
            <img src="./images/gridbg.svg" alt="" className='absolute mt-1 mr-1 md:w-full' />
            <button className='mt-4 ml-5 px-1 py-1 bg-white text-[#5F00D9] text-xs rounded-xl'>
              Chatbot
            </button>
            <p className='m-4 font-semibold text-white md:text-lg'>
              Chat with us now
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support