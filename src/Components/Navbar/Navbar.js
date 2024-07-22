import React from 'react'
import './Navbar.css'
import { Link ,useNavigate} from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'


function Navbar() {

  const {user,logOut}=UserAuth();
  const navigate=useNavigate()
  const handleLogout=async()=>{
     try {
      await logOut()
      navigate('/')
     } catch (error) {
      console.log(error,'pppppppppppppppppppppppppp');
     }
  }

  return (
    <div className='navbar'  >
        <Link to='/'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        </Link>
{/* 
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" /> */}
      {user?.email?   <div>
        <Link to='/account'>
         <button className='signIn' >Account</button>
         </Link>
        <button onClick={handleLogout} className='signUp'>Logout</button>
        </div>:
           <div>
           <Link to='/login'>
            <button className='signIn' >SignIn</button>
            </Link>
            <Link to='signUp'>
           <button className='signUp'   >SignUp</button>
           </Link>
           </div>}
       
    </div>
  )
}

export default Navbar