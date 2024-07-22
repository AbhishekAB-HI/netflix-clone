import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

function SignUp() {
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
     const {SignUp}=UserAuth()
     const navigate=useNavigate()
     const [emailError, setEmailError] = useState('');
     const [passwordError, setPasswordError] = useState('');


     const handleSubmit=async (e)=>{
        e.preventDefault()

        
    // Email validation
    if (!email) {
      setEmailError('Email is required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }

    if (emailError || passwordError) return;
        try {
             await SignUp(email,password)
             navigate('/')
        } catch (error) {
         setPasswordError(error.message)
        }
     }

  return (
    <>
    <div >
       <img className='hidden sm:block absolute w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
       <div className='bg-black/60 fixed  top-0 left-0 w-full h-screen'> </div>
          <div className='fixed w-full px-4 py-24 z-50 '  >
          <div className='max-w-[450px] h-[600px] mx-auto  bg-black/75 text-white' >
            <div className='max-w-[320px] mx-auto py-16' >
            <div className='text-3xl font-bold' > 
            <h1 className='text-3xl font-bond'  >Sign Up</h1>
            {emailError?<p style={{fontSize:'15px'}} className='p-1  mt-2 bg-red-400 '  >{emailError}</p>:null }
            {passwordError?<p style={{fontSize:'15px'}} className='p-1  mt-2 bg-red-400 '  >{passwordError}</p>:null }
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4 '  >
                <input onChange={(e)=>setEmail(e.target.value)} className='py-2 my-2 bg-gray-700 rounded' style={{fontSize:'20px'}} type="email" placeholder='Email' autoComplete='email' />
                <input  onChange={(e)=>setPassword(e.target.value)} className='py-2 my-2 bg-gray-700 rounded' style={{fontSize:'20px'}}  type="password" placeholder='Password' autoComplete='Current-password' />
                <button style={{fontSize:'20px', width:"326px",height:'40px'}}  className='bg-red-600 my-6 rounded '  >Sign up</button>
                <div   >
                    <p className='text-gray' style={{fontSize:'20px',fontWeight:'20'}}  >Already have a Netflix?<span   ><Link to='/login' style={{fontSize:'22px',fontWeight:'700'}}   > Sign In</Link> </span></p>
                </div>
            </form>
            </div>

            </div>
       </div>
       </div>
    </div>
    </>
  )
}

export default SignUp