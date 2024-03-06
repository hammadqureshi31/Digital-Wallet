import React, { useEffect } from 'react'
import { MdDashboard } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { useNavBar } from '../contextAPI/useNavBar';


const Sidenav = () => {
    const width = window.innerWidth
    const { toggleNav } = useNavBar()

    return (
        <>
            <div className='px-3 py-3 absolute bg-white z-20 h-full sm:h-[1060px] sm:w-2/4 sm:px-6 sm:py-8 md:w-1/4'>
                <div className='text-lg w-full flex flex-col-reverse sm:gap-4'>
                    <h1 className='text-[#5F00D9] mt-3 text-md font-bold sm:text-2xl md:text-3xl'>
                        @Digital-Wallet$
                    </h1>
                    <IoIosClose className='ml-36 bg-[#EEEEF4] text-[#5F00D9] h-8 w-8 p-1 rounded-full hover:bg-purple-200
                    sm:ml-52 sm:h-12 sm:w-12 sm:p-2' 
                    onClick={toggleNav} />
                </div>
                <NavLink to='/dashboard'
                    className={({ isActive }) => (isActive ? 'bg-[#F3F3F7] mt-6 flex gap-5 text-lg px-4 py-2 rounded-lg sm:text-2xl sm:py-6 hover:bg-purple-200' :
                     'bg-white mt-6 flex gap-5 text-md px-4 py-2 rounded-lg sm:text-2xl sm:py-6 hover:bg-purple-200')}>
                    <div className='mt-1.5'>
                        <MdDashboard />
                    </div>
                    <h1>
                        Dashboard
                    </h1>
                </NavLink >
                <NavLink to='transaction'
                    className={({ isActive }) => (isActive ? 'bg-[#F3F3F7] mt-2 flex gap-5 text-lg px-4 py-2 rounded-lg sm:text-2xl sm:py-6 hover:bg-purple-200' :
                     'bg-white mt-3 flex gap-5 text-md px-4 py-2 rounded-lg sm:text-2xl sm:py-6 hover:bg-purple-200')}>

                    <div className='mt-1.5'>
                        <TbArrowsDoubleNeSw />
                    </div>
                    <h1>
                        Transaction
                    </h1>
                </NavLink>
                <NavLink to='support'
                    className={({ isActive }) => (isActive ? 'bg-[#F3F3F7] mt-80 flex gap-5 text-lg px-4 py-2 rounded-lg sm:text-2xl sm:py-6 hover:bg-purple-200' :
                     'bg-white mt-80 flex gap-5 text-md px-4 py-2 rounded-lg sm:text-2xl sm:py-6 sm:mt-40 hover:bg-purple-200')}>
                    <div className='mt-1.5'>
                        <BiSupport />
                    </div>
                    <h1>
                        Support
                    </h1>
                </NavLink>
            </div>

        </>
    )
}

export default Sidenav