import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../contextAPI/useFirebase'

const Forgot = () => {
  const navigate = useNavigate()
  const firebase = useFirebase()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleCLick =async(e)=>{
    e.preventDefault()
    await firebase.sendEmailForgotPass(email)
    firebase.setcredential(email)
    navigate('/email/message')
    

  }

 
  

  return (
    <>
      <div className='flex flex-col gap-6 mt-14 p-6 w-auto
       sm:border-white sm:shadow-2xl sm:shadow-purple-500 sm:rounded-3xl sm:ml-48 sm:mt-20 
        md:w-1/2 md:ml-[460px] md:mx-auto'>
        <div>
          <h1 className='text-xl font-bold'>Forgot Password</h1>
          <p className='text-sm mt-2 opacity-50'>Enter your email address for which account you want to reset your password.</p>
        </div>
        <div className='flex flex-col gap-4 md:gap-3'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-2'>Email</label>
            <input type="text" placeholder='name@email.com' 
            onChange={(e)=>setemail(e.target.value)} value={email} required
            className='px-3 border-2 border-[#EEEEF4] rounded-lg md:p-1.5'/>
          </div>
        </div>

        <div onClick={handleCLick}
        className='flex justify-center text-center p-2 bg-[#5F00D9] rounded-lg text-white font-semibold cursor-pointer'>
          <button>Reset Password</button>
        </div>

        
      </div>
    </>
  )
}

export default Forgot