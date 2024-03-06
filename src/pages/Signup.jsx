import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../contextAPI/useFirebase'

const Signup = () => {

  const navigate = useNavigate()
  const firebase = useFirebase()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = async(e) =>{
    e.preventDefault()
    const response = await firebase.signupUserWithEmailAndPass(email,password)
    navigate('/message')
  }

  useEffect(() => {
    if(firebase.isLogin){
      navigate('/dashboard')
    }
    console.log(firebase.isLogin)
  }, [firebase.isLogin])
  
  return (
    <>
      <div className='flex flex-col gap-6 mt-8 p-6 w-auto
       sm:border-white sm:shadow-2xl sm:shadow-purple-500 sm:rounded-3xl sm:ml-48 md:w-full md:ml-80'>
        <div>
          <h1 className='text-xl font-bold'>Welcome to Digial-Wallet</h1>
          <p className='text-sm mt-2 opacity-50'>Create a free account by filling data below.</p>
        </div>
        <div className='flex flex-col gap-4 md:gap-3'>
          <div className='flex gap-4 md:justify-between md:gap-4'>
            <div className='flex flex-col gap-2 md:w-full'>
              <label htmlFor="" className='flex flex-col gap-2'>Name</label>
              <input type="text" placeholder='James' required
              className='px-3 w-32 border-2 border-[#EEEEF4] rounded-lg md:w-full md:p-1.5' />
            </div>
            <div className='flex flex-col gap-2 md:w-full'>
              <label htmlFor="" className='flex flex-col gap-2'>Sur Name</label>
              <input type="text" placeholder='Arthur' required
              className='px-3 w-32 border-2 border-[#EEEEF4] rounded-lg md:w-full md:p-1.5'/>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-2'>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} required
            type="text" placeholder='name@email.com' 
            className='px-3 border-2 border-[#EEEEF4] rounded-lg md:p-1.5'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-2'>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} required
             type='password' placeholder='Strong password' 
            className='px-3 border-2 border-[#EEEEF4] rounded-lg md:p-1.5'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-2'>Repeat Password</label>
            <input type="text" placeholder='password must matches' required
            className='px-3 border-2 border-[#EEEEF4] rounded-lg md:p-1.5'/>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <p className='text-xs'>I agree with <span className='text-[#5F00D9] font-semibold'>Terms & Conditions</span></p>
          </div>
        </div>

        <div onClick={handleClick}
        className='flex justify-center text-center p-2 bg-[#EEEEF4] rounded-lg cursor-pointer'>
          <button>Create Account</button>
        </div>
        <div className='flex justify-center text-center'>
          <p className='text-xs'>Already have an account?
          <span className='text-[#5F00D9] font-semibold cursor-pointer' 
          onClick={()=>navigate('/login')}> Log In</span></p>
        </div>
      </div>
    </>
  )
}

export default Signup