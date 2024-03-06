import React, { useEffect,useState } from 'react'
import { useFirebase } from '../contextAPI/useFirebase'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const EmailMessage = () => {
    const firebase = useFirebase()
    const navigate = useNavigate()
    const [display, setdisplay] = useState(null)
    const [sendto , setsendto] = useState('')

    useEffect(() => {
        setsendto(firebase.credential)

        setTimeout(() => {
            setdisplay(true)
        }, 10000);
    }, [])

    return (
        <>
            <div className='bg-[#EEEEF4] w-[360px] h-[571px] flex justify-center text-center px-4
            sm:w-[680px] md:w-[1359px] sm:h-[600px] md:h-[640px]'>

                <div className='bg-white m-auto w-72 flex flex-col gap-2 p-4 rounded-lg
                md:w-[400px] md:gap-4'>
                    <div className='m-auto'>
                        <FaCheckCircle className='text-2xl text-[#059669]' />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Successfully Send</h1>
                    </div>
                    <div>
                        <p className='opacity-45'>{`We have sent instructions on how to reset your password to 
                        ${sendto}. Please follow the instructions from the email.`}</p>
                    </div>
                    {display && <div onClick={() => { navigate('/reset/message') }}
                        className='bg-[#059669] p-2 rounded-lg text-white font-semibold'>
                        <button>Continue</button>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default EmailMessage