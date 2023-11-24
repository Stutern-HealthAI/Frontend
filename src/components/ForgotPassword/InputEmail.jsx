import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function inputEmail() {

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    navigate("/forgotpassword/sent")
  }

  return (
    <section className="w-3/5 m-auto text-left my-40 text-[#040308]">
        <h2 className="text-5xl font-extrabold mb-6">Forgot Password</h2>
        <p className="text-3xl mb-12">Enter the email you used to create your account so we can 
            send you instructions on how to reset your password.
        </p>

        <form className="mt-24" onSubmit={submitForm}>
            <input type="email" 
                name="email" 
                placeholder="Email"
                className="w-full p-4 outline-0 border rounded-xl text-{#040308} font-medium text-2xl"
            />
            <input 
                type="submit" 
                name="submit" 
                value="Send"
                className="border-0 bg-[#579191] w-full p-3 rounded-3xl text-white font-bold text-2xl mt-8 cursor-pointer"
            />
        </form>

        <Link to={'/login'}>
            <button className="border  w-full p-3 rounded-3xl text-{#040308} font-bold text-2xl mt-8 cursor-pointer">Back to login</button>
        </Link>
    </section>
  )
}

export default inputEmail