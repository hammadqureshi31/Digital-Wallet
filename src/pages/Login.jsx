import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../contextAPI/useFirebase'

const Login = () => {
  const navigate = useNavigate()
  const firebase = useFirebase()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleCLick = async(e)=>{
    e.preventDefault()
    const response = await firebase.loginUserWithEmailAndPass(email,password)
    navigate('/dashboard')

  }

  const SigninGoogle = async()=>{
    await firebase.signinWithGoogle()
    navigate('/dashboard')
  }
 
  

  return (
    <>
      <div className='flex flex-col gap-4 mt-14 p-6 w-auto
       sm:border-white sm:shadow-2xl sm:shadow-purple-500 sm:rounded-3xl sm:ml-48 sm:mt-20  
       md:w-4/6 md:ml-[450px] md:mx-auto'>
        <div>
          <h1 className='text-xl font-bold'>Welcome to Digial-Wallet</h1>
          <p className='text-sm mt-2 opacity-50'>Enter your credentials to access the account.</p>
        </div>
        <div className='flex flex-col gap-4 md:gap-3'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-2'>Email</label>
            <input type="text" placeholder='name@email.com' 
            onChange={(e)=>setemail(e.target.value)} value={email} required
            className='px-3 border-2 border-[#EEEEF4] rounded-lg md:p-1.5'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='flex flex-col gap-2'>Password</label>
            <input type="text" placeholder='Enter password here' 
            onChange={(e)=>setpassword(e.target.value)} value={password} required
            className='px-3 border-2 border-[#EEEEF4] rounded-lg md:p-1.5'/>
          </div>
          <div className='flex gap-1'>
            <input type="checkbox" />
            <div className='flex w-full justify-between'>
            <p>Remember me</p>
            <p className='text-sm text-[#5F00D9] cursor-pointer mt-1.5'
            onClick={()=>{navigate('/forgot')}}>Forgot Password?</p>
            </div>
          </div>
        </div>

        <div onClick={handleCLick}
        className='flex justify-center text-center p-2 bg-[#5F00D9] rounded-lg text-white font-semibold cursor-pointer'>
          <button>Log In</button>
        </div>
        <div onClick={()=>{navigate('/signup')}}
        className='flex justify-center text-center p-2 bg-[#EEEEF4] rounded-lg cursor-pointer'>
          <button>Create New Account</button>
        </div>

        <div className='flex text-center justify-center text-xs'><h6>OR</h6></div>

        <div onClick={SigninGoogle}
        className='flex text-center justify-center gap-2 rounded-lg bg-[#EEEEF4] p-3'>
          <img src="../google.svg" alt="" />
          <h2>Sign in with Google</h2>
        </div>
      </div>
    </>
  )
}

export default Login