import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Signupmessage = () => {
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
                        <h1 className='text-lg font-semibold'>Successfully Registration</h1>
                    </div>
                    <div>
                        <p className='opacity-45'>Hurray! You have successfully created your account. Enter the app to explore all it’s features.</p>
                    </div>
                    <div onClick={()=>{navigate('/login')}}
                    className='bg-[#5F00D9] p-2 rounded-lg text-white font-semibold'>
                        <button>Enter the App</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signupmessage