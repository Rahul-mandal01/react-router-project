import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly' >
        <Link to="/" >
            <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Home-about-contact  */}

        <nav >
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* login - signup - logout - dashboard */}

       <div className='flex gap-3 ml-5'>
            {   !isLoggedIn &&
                   <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                }

                {
                    !isLoggedIn &&  
                    <Link to="/signup">
                        <button>
                            Sign up
                        </button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
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
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
       </div>


    </div>
  )
}

export default Navbar;
