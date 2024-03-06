import React from 'react'
import Navbar from '../components/Navbar'
import { HiOutlineDownload } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

const transactions = [
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'USD Deposit',
    transfer: 'E-Transfer',
    amount: '+ Rs81,123.10',
    status: 'pending',
    color: '#797E82'
  },
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'PKR Withdraw',
    transfer: 'Wire Transfer',
    amount: '+ Rs81,123.10',
    status: 'processing',
    color: '#F5A50B'
  },
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'Buy',
    transfer: 'E-Transfer',
    amount: '+ 12.48513391 BTC',
    status: 'cancelled',
    color: '#DC2626'
  },
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'Sell',
    transfer: 'Wire Transfer',
    amount: '- 0.36401628 BTC',
    status: 'completed',
    color: '#059669'
  },
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'BTC Deposit',
    transfer: 'E-Transfer',
    amount: '+ 4.13946104 BTC',
    status: 'completed',
    color: '#059669'
  },
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'BTC Withdraw',
    transfer: 'Wire Transfer',
    amount: '- 10.00000000 BTC',
    status: 'completed',
    color: '#059669'
  },
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'USD Deposit',
    transfer: 'E-Transfer',
    amount: '+ Rs81,123.10',
    status: 'pending',
    color: '#797E82'
  },
  {
    id: 'HD82NA2H',
    date: '2022/06/09',
    time: '07:06 PM',
    type: 'PKR Withdraw',
    transfer: 'Wire Transfer',
    amount: '+ Rs81,123.10',
    status: 'processing',
    color: '#F5A50B'
  }
]


const Transaction = () => {
  return (
    <>
      <Navbar value={'Transactions'} />

      <div className='bg-[#EEEEF4] p-4 flex flex-col flex-wrap w-[360px] gap-4 sm:w-full  md:px-6'>

        <div className='flex gap-2 bg-[#5F00D9] m-auto px-2 py-2 w-32 rounded-lg text-white 
        font-semibold md:ml-[1100px]'>
          <div className='pt-1'>
            <HiOutlineDownload />
          </div>
          <button> Export CSV</button>
        </div>

        <div className='bg-white rounded-lg mt-2 sm:w-full sm:flex-wrap'>

          <div className='flex justify-around md:gap-44'>
            <div className='flex gap-5 m-2 sm:gap-14 sm:text-xl sm:px-12'>
              <div>
                <div className='flex gap-0.5'>
                  <h1>All</h1>
                  <p className='opacity-55 bg-[#EEEEF4] text-xs p-1 rounded-lg sm:text-sm'>349</p>
                </div>
                <div>
                  <hr className='bg-[#5F00D9] h-0.5' />
                </div>
              </div>
              <div className='flex gap-0.5'>
                <h1>Deposit</h1>
                <p className='opacity-55 bg-[#EEEEF4] text-xs p-1 rounded-lg sm:text-sm'>114</p>
              </div>
              <div className='flex gap-0.5'>
                <h1>Withdraw</h1>
                <p className='opacity-55 bg-[#EEEEF4] text-xs p-1 rounded-lg sm:text-sm'>279</p>
              </div>
            </div>

            <div className='hidden md:flex md:gap-2 '>
            <CiSearch className='mt-3 text-xl'/>
              <input type="text" name="" id="" placeholder='Search By ID & Amount'
              className='mr-4 md:m-2 border-2 border-[#EEEEF4] rounded-lg px-2'/>
            </div>
          </div>

          <div className='bg-[#EEEEF4] flex flex-col gap-6 pt-4 sm:flex-wrap sm:flex-row sm:px-8'>
            {transactions.map((item, index) => (
              <div key={item.index}
                className='bg-white rounded-lg px-6 py-3 sm:w-72'>
                <div className='flex gap-6 mb-2'>
                  <h1 className='text-lg font-semibold opacity-40 tracking-wide mt-1'>ID :</h1>
                  <h1 className='text-md bg-[#EEEEF4] p-2 rounded-xl font-light tracking-wide'>{item.id}</h1>
                </div>

                <div className='mb-2'>
                  <hr />
                </div>

                <div className='flex gap-6 mb-2'>
                  <h1 className='text-lg font-semibold opacity-40 tracking-wide'>Date & Time :</h1>
                  <div>
                    <h1 className='text-md font-semibold text-[#5F00D9]'>{item.date}</h1>
                    <h1 className='text-semibold opacity-65'>{item.time}</h1>
                  </div>
                </div>

                <div className='mb-2'>
                  <hr />
                </div>

                <div className='flex gap-6 mb-2'>
                  <h1 className='text-lg font-semibold opacity-40 tracking-wide'>Type :</h1>
                  <div>
                    <h1 className='text-lg font-bold text-[#5F00D9]'>{item.type}</h1>
                    <h1 className='text-semibold opacity-65'>{item.transfer}</h1>
                  </div>
                </div>

                <div className='mb-2'>
                  <hr />
                </div>

                <div className='flex gap-1 mb-3'>
                  <h1 className='text-lg font-semibold opacity-40 tracking-wide'>Amount :</h1>
                  <h1 className='text-lg font-bold tracking-tight'>{item.amount}</h1>
                </div>

                <div className='mb-2'>
                  <hr />
                </div>

                <div className='flex gap-6 mb-3'>
                  <h1 className='text-lg font-semibold opacity-40 tracking-wide'>Status :</h1>
                  <h1 className="h-8 w-24 text-white font-semibold text-sm rounded-xl text-center pt-1"
                    style={{ backgroundColor: `${item.color}` }}>{item.status}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Transaction