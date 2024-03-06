import React from 'react'
import Navbar from '../components/Navbar'
import TotalAmount from '../components/TotalAmount'
import Graphview from '../components/Graphview';
import Cards from '../components/Cards';



const DashBoard = () => {
  return (
    <>
      <Navbar value={'Dashboard'} />
      <div className='bg-[#EEEEF4] p-4 flex flex-col gap-4 sm:w-[1200px] sm:h-[980px] md:w-[1349px] md:h-[980px]'>
        <TotalAmount />
        <Graphview />
        <Cards />
      </div>

    </>
  )
}

export default DashBoard