import React from 'react'
import { TbAlertOctagonFilled } from "react-icons/tb";
import { TbArrowBarToUp } from "react-icons/tb";
import { LuArrowDownToLine } from "react-icons/lu";

const TotalAmount = () => {
    return (
        <>
            <div className='bg-white pl-6 pt-4  pb-6 rounded-lg flex flex-col gap-5
            sm:flex-row sm:gap-20 sm:pl-10 sm:mt-2 md:gap-32'>
                <div>
                    <div className='flex sm:gap-2 sm:text-xl'>
                        <h1 className='opacity-65'>Total Portfolio Value</h1>
                        <TbAlertOctagonFilled className='text-[#797E82] mt-1 ml-1 sm:ml-0' />
                    </div>

                    <h1 className='mt-2 text-lg font-bold tracking-wide sm:mt-4 sm:text-2xl'>$ 112,312.24</h1>
                </div>

                <div className='pr-6 sm:hidden'>
                    <hr className=''/>
                </div>

                <div>
                    <div>
                        <h1 className='opacity-65 sm:text-xl'>Wallet Balances</h1></div>
                    <div className='sm:flex sm:gap-5 '>
                        <div className='flex mt-2 gap-1 sm:gap-2'>
                            <h1 className='mt-2 text-lg font-bold tracking-wide sm:text-2xl'>$ 22.39401000</h1>
                            <p className='bg-[#EEEEF4] text-xs rounded-lg mt-2 h-6 p-1 sm:text-lg sm:h-10 sm:p-1.5'>USD</p>
                        </div>
                        <div className='flex gap-1 sm:mt-2 sm:gap-2'>
                            <h1 className='mt-2 text-lg font-bold tracking-wide sm:text-2xl'>Rs 22.39401000</h1>
                            <p className='bg-[#EEEEF4] text-xs rounded-lg mt-2 h-6 p-1 sm:text-lg sm:h-10 sm:p-1.5'>PKR</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-2 sm:mt-5'>
                    <div className='flex justify-center gap-1 rounded-xl bg-[#5F00D9] w-28 p-2 text-white
                    sm:h-12 sm:w-28 sm:p-2 sm:text-lg sm:font-semibold md:w-32'>
                        <div className='mt-1'>
                            <LuArrowDownToLine className='text-lg sm:text-xl'/>
                        </div>
                        <h1>
                            Deposit
                        </h1>
                    </div>

                    <div className='flex justify-center gap-1 rounded-xl bg-[#5F00D9] w-28 p-2 text-white
                    sm:h-12 sm:w-32 sm:p-2 sm:text-lg sm:font-semibold md:w-36'>
                        <div className='mt-1'>
                            <TbArrowBarToUp className='text-xl sm:text-2xl'/>
                        </div>
                        <h1>
                            Withdraw
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalAmount