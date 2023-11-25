import React, { useContext, useState, useEffect } from 'react'
import {
    AiOutlineEye,
    AiOutlineEyeInvisible 
} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../hooks/context';
import axios from 'axios';
import GoogleAndFacebook from '../common/GoogleAndFacebook';

function SignUpForm() {
    const [showText, setShowText] = useState(false)
    const {
        email,
        password,
        userFullName,
        getEmailValue,
        getPasswordValue,
        getFullNameValue,
        viewPassword,
        isView,
        setEmail,
        setPassword,
        setUserFullName

    } = useContext(AuthContext)

    useEffect(() => {
        if (showText === true) {
            setTimeout(() => {
                setShowText(false);
                console.log("timeout executed")
            }, 3000);
        }
    
        
        return;
    }, [showText]);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()

        try {
            const {data} = await axios.post('https://klus-hc.onrender.com/api/v1/users', {
                email: email,
                password: password,
                full_name: userFullName
            })

                console.log(data)
            // Handle the response 
            if (data.success === true) {
                console.log("Sign up successful");
                // Perform actions after successful login
                navigate('/signup/verifyaccount')
                setEmail("")
                setPassword("")
                setUserFullName("")
            }
            
        } catch (err) {
            console.log(err)
            setShowText(true)
            setEmail("")
            setPassword("")
            setUserFullName("")
        
        }
        
    }

    const navigate = useNavigate()


  return (
    <section className="w-2/5 m-auto">
        <h2 className="text-4xl font-bold">Create Account</h2>

        {showText ? <p className="text-red-600 text-xl">User already as an account, proceed to login</p> : null}

        <div className="flex justify-between my-12">
            <GoogleAndFacebook />
        </div>

        <div className="flex items-center gap-3 text-2xl justify-center">
            <hr className="bg-[#343434] w-10"/>
            <p className="text-[#343434]">OR</p>
            <hr className="bg-[#343434] w-10"/>
        </div>

        <form className="my-12 text-xl" onSubmit={handleRegisterSubmit}>
            <input type="text" 
                name="name" 
                placeholder="Full Name"
                value={userFullName}
                onChange={getFullNameValue}
                className="border-b w-full p-2 mb-12 outline-0"
            />
            <input type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={getEmailValue}
                className="border-b w-full p-2 mb-12 outline-0"
            />
            <div className="border-b flex items-center p-2 justify-between mb-4 text-[#828282]">
                <input type="password" 
                    name="password" 
                    id="showPass"
                    placeholder="Password"
                    value={password}
                    onChange={getPasswordValue}
                    className="w-[90%] outline-0"
                />
                {isView 
                    ? <AiOutlineEye className="cursor-pointer text-2xl" onClick={viewPassword}/> 
                    : <AiOutlineEyeInvisible className="cursor-pointer text-2xl" onClick={viewPassword}/>
                }
            </div>
            <input 
                type="submit" 
                name="submit" 
                value="Create Account"
                className="border bg-[#579191] w-full p-3 rounded-3xl text-white font-medium text-2xl mt-16 cursor-pointer"
            />
        </form>

        <p className="text-2xl text-left text-[#828282] mt-8">Already have an account? <Link to={'/login'} className="text-[#6F74DD]">Log In</Link></p>
    </section>
  )
}

export default SignUpForm