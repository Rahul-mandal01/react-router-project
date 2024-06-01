import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import hamburger from '../assets/hamburger.svg';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ' >
        <Link to="/" >
            <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Home-about-contact  */}

        <nav className='hidden md:block' >
            <ul className='flex gap-x-6 text-richblack-25 tracking-wider'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="">About</Link>
                </li>
                <li>
                    <Link to="">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* login - signup - logout - dashboard */}

       <div className='md:flex items-center gap-x-4 tracking-wide hidden '>
            {   !isLoggedIn &&
                   <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                            rounded-[8px] border border-richblack-700 ' >
                            Log in
                        </button>
                    </Link>
                }

                {
                    !isLoggedIn &&  
                    <Link to="/signup">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                            rounded-[8px] border border-richblack-700 '>
                            Sign up
                        </button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                            rounded-[8px] border border-richblack-700 ' onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                            rounded-[8px] border border-richblack-700 '>
                            Dashboard
                        </button>
                    </Link>
                }
       </div>

        <button className='md:hidden mr-4'>
            <img src={hamburger} alt="hamburger" />
        </button>


    </div>
  )
}

export default Navbar;
