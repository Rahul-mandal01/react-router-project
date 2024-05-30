import React from 'react'
import toast from "react-hot-toast"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
        toast.error("Password do not match");
        return;
    }

    setIsLoggedIn(true);

    toast.success("Account Created");
    const accountData = {
        ...formData
    };

    console.log("Printing account data ");
    console.log(accountData);

    navigate("/dashboard");
  }  

  return (
    <div>
        {/* student-instructor tab*/}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit = {submitHandler} >
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                        required
                        placeholder='Enter first name'
                        name="firstName"
                        type="text"
                        onChange={changeHandler}
                        value={formData.firstName}
                    />
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input
                        required
                        placeholder='Enter last name'
                        name="lastName"
                        type="text"
                        onChange={changeHandler}
                        value={formData.lastName}
                    />
                </label>
            </div> 

            {/* email id */}
            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder='Enter email address'
                    onChange={changeHandler}
                    value={formData.email}
                />
            </label>

            {/* createPassword and confirmPassword */}

            <div>
                <label>
                    <p>
                        Create Password <sup>*</sup>
                    </p>
                    <input
                        required
                        type={ showPassword ? ("text"): ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)} >
                        {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
                    </span>
                </label>

                <label>
                    <p>
                        Confirm Password <sup>*</sup>
                    </p>
                    <input
                        required
                        type={ showPassword ? ("text"): ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)} >
                        {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>
        
        <button>
            Create Account
        </button>
        </form>
    </div>
  )
}

export default SignupForm;
