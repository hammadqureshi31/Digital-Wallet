import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ResetMessage = () => {
  const navigate = useNavigate()
  return (
    <>
        <div className='bg-[#EEEEF4] w-[360px] h-[571px] flex justify-center text-center px-4
        sm:w-[680px] md:w-[1359px] sm:h-[600px] md:h-[640px]'>

            <div className='bg-white m-auto w-72 flex flex-col gap-2 p-4 rounded-lg
            md:w-[400px] md:gap-4'>
                <div className='m-auto'>
                    <FaCheckCircle className='text-2xl text-[#059669]'/>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Password Reset Done</h1>
                </div>
                <div>
                    <p className='opacity-45'>Now you can access you account.</p>
                </div>
                <div onClick={()=>{navigate('/login')}}
                className='bg-[#5F00D9] p-2 rounded-lg text-white font-semibold'>
                    <button>Log in</button>
                </div>
            </div>
        </div>
    </>
)
}

export default ResetMessage