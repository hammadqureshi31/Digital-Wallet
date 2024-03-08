import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { SiBitcoinsv } from "react-icons/si";
import { useNavigate } from 'react-router-dom';



const Graphview = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex flex-col gap-4 sm:flex-row sm:pt-2'>
                <div className='bg-white pl-2 pt-4 pb-6 flex flex-col gap-8 rounded-lg
                sm:w-full sm:pl-6 sm:pt-6'>
                    <div className='flex flex-col gap-6 sm:flex-row sm:w-full sm:gap-20 md:gap-28'>
                        <div className='ml-2'>
                            <h1 className='sm:text-xl md:text-2xl'>Current Price</h1>
                            <div className='flex gap-1'>
                                <h1 className='mt-2 text-lg font-bold tracking-wide sm:text-xl md:text-2xl'>$ 26,670.25</h1>
                                <div className='flex text-sm mt-4 font-semibold text-[#059669] md:text-lg'>
                                    <BsArrowUpRight className='mt-0.5' />
                                    <p>0.04%</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className='flex justify-center gap-2 rounded-lg bg-[#5F00D9] w-24 p-2 text-white 
                            sm:p-3 sm:h-14 sm:w-28 text-xl md:h-12 md:p-2'>
                                <div className='mt-1'>
                                    <FaCirclePlus />
                                </div>
                                <h1>
                                    Buy
                                </h1>
                            </div>

                            <div className='flex justify-center gap-2 rounded-lg bg-[#5F00D9] w-24 p-2 text-white
                            sm:p-3 sm:h-14 sm:w-28 text-xl md:h-12 md:p-2'>
                                <div className='mt-1'>
                                    <FaCircleMinus />
                                </div>
                                <h1>
                                    Sell
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className='ml-28 flex gap-4 bg-[#EEEEF4] rounded-lg px-2 py-1 w-40 
                    sm:ml-80 sm:w-52 sm:gap-7 sm:px-3 md:ml-96'>
                        <h1>1H</h1>
                        <h1 className='bg-white rounded-lg px-1'>1D</h1>
                        <h1>1W</h1>
                        <h1>1M</h1>
                    </div>

                    <div>
                        <img src="./images/graph.svg" alt=""  className=' sm:w-[530px] md:w-[600px]'/>
                    </div>
                    <div className='flex gap-4 text-xs font-light opacity-90 sm:text-lg sm:gap-12 sm:pl-4 md:gap-16'>
                        <p>7:15 PM</p>
                        <p>12:55 AM</p>
                        <p>6:35 AM</p>
                        <p>12:15 PM</p>
                        <p>5:55 PM</p>
                    </div>
                </div>

                <div className='bg-white p-2 rounded-lg flex flex-col gap-4 pb-4
                sm:w-full sm:p-6 sm:gap-4'>
                    <h1 className='text-[#535D66] p-2 sm:text-2xl'>
                        Recent Transactions
                    </h1>

                    <div className='flex justify-between '>
                        <div className='flex gap-2'>
                            <div className=' flex justify-center text-center mt-1 p-1.5 h-9 w-9 rounded-full bg-[#EEEEF4]
                            sm:h-14 sm:w-14 sm:text-center'>
                                <HiMiniCurrencyDollar className='h-6 w-6 sm:h-10 sm:w-10'/>
                            </div>
                            <div>
                                <h1 className='font-semibold text-lg sm:text-2xl'>USD Deposit</h1>
                                <p className='opacity-60 font-semibold tracking-tighter sm:text-xl'>2022-06-09 7:06 PM</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='tracking-tight font-bold sm:text-2xl'>
                                + ₹81,123.10
                            </h1>
                        </div>
                    </div>

                    <div className='px-2'>
                        <hr />
                    </div>

                    <div className='flex justify-between '>
                        <div className='flex gap-2'>
                            <div className=' flex justify-center text-center mt-1 p-1.5 h-9 w-9 rounded-full bg-[#EEEEF4]
                             sm:h-14 sm:w-14 sm:text-center'>
                            <SiBitcoinsv className='h-6 w-6 sm:text-2xl sm:h-9 sm:w-9 sm:mt-1'/>

                            </div>
                            <div>
                                <h1 className='font-semibold text-lg sm:text-2xl'>BTC Sell</h1>
                                <p className='opacity-60 text-sm font-semibold tracking-tighter sm:text-xl'>2022-05-27 12:32 PM</p>
                            </div>
                        </div>
                        <div>
                            <h1 className=' tracking-tighter font-bold sm:text-2xl'>
                            - 12.48513391 
                            </h1>
                            <p className='opacity-60 font-semibold tracking-tighter sm:text-2xl'>
                            + $81,123.10
                            </p>
                        </div>
                    </div>

                    <div className='px-2'>
                        <hr />
                    </div>

                    <div className='flex justify-between '>
                        <div className='flex gap-2'>
                            <div className=' flex justify-center text-center mt-1 p-1.5 h-9 w-9 rounded-full bg-[#EEEEF4]
                             sm:h-14 sm:w-14 sm:text-center'>
                                <HiMiniCurrencyDollar className='h-6 w-6 sm:text-2xl sm:h-10 sm:w-10'/>
                            </div>
                            <div>
                                <h1 className='font-semibold text-lg sm:text-2xl'>USD Deposit</h1>
                                <p className='opacity-60 font-semibold tracking-tighter sm:text-xl'>2022-06-09 7:06 PM</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='tracking-tight font-bold sm:text-2xl'>
                                + ₹81,123.10
                            </h1>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/transaction')}
                    className='bg-[#EEEEF4] text-center py-1.5 rounded-lg font-semibold mt-2 sm:text-2xl'>
                        Veiw All
                    </button>
                </div>
            </div>
        </>
    )
}

export default Graphview