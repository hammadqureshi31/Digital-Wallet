// Navbar Component
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { LuMenu } from "react-icons/lu";
import { useNavBar } from '../contextAPI/useNavBar';
import { useFirebase } from '../contextAPI/useFirebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";


const Navbar = (props) => {
  const { toggleNav } = useNavBar();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    toggleNav();
    console.log('clicked');
  }

  const handleClicked = () => {
    setClicked((prev) => !prev);
  }

  const handleLogOut = (e) => {
    e.preventDefault(); // Prevent default behavior
    console.log('Logout clicked'); // Verify if the function is being called
    signOut(firebase.firebaseAuth)
      .then(() => navigate('/signup'))
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      <div className='flex gap-16 px-4 py-3 text-center text-xl sm:justify-between sm:px-20 sm:py-5'>
        <div className='mt-1 sm:text-4xl' onClick={handleClick}>
          <LuMenu />
        </div>
        <h1 className='font-bold tracking-wide text-[#5F00D9] sm:text-3xl'>{props.value}</h1>
        <div className='mt-1 sm:text-4xl' onClick={handleClicked}>
          <VscAccount />
        </div>
        {clicked && <div className='z-10 absolute border-2 border-[#EEEEF4] rounded-lg px-6 py-6 bg-white right-6 top-14 
        sm:left-[900px] sm:w-56 sm:top-20 cursor-pointer md:left-[1100px] '>
          <h6 className='text-md text-[#5F00D9] font-semibold hover:bg-purple-200'>View Profile</h6>
          <hr className='m-2' />
          <div className='flex gap-2 justify-center text-center hover:bg-purple-200'>
          <h6 className='text-md text-[#5F00D9] font-semibold cursor-pointer' 
          onClick={handleLogOut}>Log Out</h6>
          <HiOutlineLogout className='mt-1 text-[#5F00D9]'/>
          </div>

        </div>}
      </div>
    </>
  )
}

export default Navbar;
