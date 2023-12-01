import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../hooks/context'

function SignUpVerification() {

  const { email } = useContext(AuthContext)

  return (
    <section className="w-3/5 m-auto text-left my-40 text-[#040308]">
        <h2 className="text-5xl font-extrabold mb-6">Verify your email.</h2>
        <p className="text-3xl mb-12">We have sent a verification email to {email}
        </p>


        <form className="mt-24">
          <p className="text-2xl">Didn't receive the email? Check spam or promotion folder</p>
            <input 
                type="submit" 
                name="submit" 
                value="Resend email"
                className="border-0 bg-[#579191] w-full p-3 rounded-3xl text-white font-bold text-2xl mt-8 cursor-pointer"
            />
        </form>

        <Link to={'/login'}>
            <button className="border  w-full p-3 rounded-3xl text-{#040308} font-bold text-2xl mt-8 cursor-pointer">Go to login</button>
        </Link>

    </section>
  )
}

export default SignUpVerification