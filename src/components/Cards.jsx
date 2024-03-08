import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex flex-col gap-6 sm:flex-row sm:mt-3 md:text-xl md:gap-5'>
                <div className='bg-white rounded-lg relative pb-2'>
                    <img src="./images/dotbg.svg" alt="" className='absolute mt-1 mr-1 sm:w-full sm:h-fit' />
                    <button className='mt-4 ml-5 px-2 py-1 bg-[#5F00D9] text-white rounded-xl'>
                        Loans
                    </button>
                    <p className='m-4 font-semibold '>
                        Learn more about Loans – Keep your Bitcoin, access it’s value without selling it
                    </p>
                </div>

                <div onClick={()=>navigate('/support')}
                className='bg-[#5F00D9] rounded-lg relative pb-2 md:pr-7'>
                    <img src="./images/gridbg.svg" alt="" className='absolute mt-1 mr-1 sm:w-full sm:h-fit md:w-full md:h-fit' />
                    <button className='mt-4 ml-5 px-1 py-1 bg-white text-[#5F00D9] text-sm rounded-xl'>
                        Contacts
                    </button>
                    <p className='m-4 font-semibold text-white'>
                    Learn more about our real estate, mortgage, and corporate account services
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards