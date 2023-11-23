import React, { useState } from 'react'
import bgdatom from '../../assets/abstract-bgd-atom.png'
import logo from '../../assets/healthAI-logo.svg'
import {
    AiOutlineEye,
    AiOutlineEyeInvisible 
} from "react-icons/ai";
import { Link } from 'react-router-dom';

function SignUp() {
    const [isView, setIsView] = useState(false);

    const viewPassword = () => {
        setIsView(!isView)
    }

  return (
    <main className="bg-no-repeat bg-cover h-screen bg-center"
        style={{backgroundImage: `url(${bgdatom})`}}
    >
        <div className="flex items-baseline p-8 text-white">
            <img src={logo} alt="app logo" />
            <h1 className="text-4xl font-bold">Health AI</h1>
        </div>

        <section className="bg-white w-4/6 h-4/5 m-auto rounded-3xl p-8">
            <div className="text-right text-xl font-bold pe-10">
                <select>
                    <option value="english">English (US)</option>
                    <option value="english">English (US)</option>
                    <option value="english">English (US)</option>
                    <option value="english">English (US)</option>
                </select>

            </div>

            <h2 className="text-4xl font-bold">Create Account</h2>

            <section className="w-2/5 m-auto">

                <div className="flex justify-between my-12">
                    <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282] cursor-pointer">
                        <p>Sign in with Google</p>
                    </div>
                    <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282] cursor-pointer">
                        <p>Sign in with Facebook</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-2xl justify-center">
                    <hr className="bg-[#343434] w-10"/>
                    <p className="text-[#343434]">OR</p>
                    <hr className="bg-[#343434] w-10"/>
                </div>

                <form className="my-12 text-xl">
                    <input type="text" 
                        name="name" 
                        placeholder="Full Name"
                        className="border-b w-full p-2 mb-12 outline-0"
                    />
                    <input type="email"
                        name="email"
                        placeholder="Email Address"
                        className="border-b w-full p-2 mb-12 outline-0"
                    />
                    <div className="border-b flex items-center p-2 justify-between mb-4 text-[#828282]">
                        <input type="password" 
                            name="password" 
                            placeholder="Password"
                            className="w-[90%] outline-0"
                        />
                        {isView 
                            ? <AiOutlineEye className="cursor-pointer text-2xl" onClick={()=>viewPassword()}/> 
                            : <AiOutlineEyeInvisible className="cursor-pointer text-2xl" onClick={()=>viewPassword()}/>
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
        </section>
    </main>
  )
}

export default SignUp