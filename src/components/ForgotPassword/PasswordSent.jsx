import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../hooks/context'

function PasswordSent() {
  const { email } = useContext(AuthContext)

  const resendForm = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("https://klus-hc.onrender.com/api/v1/users/forgot_password", {
        email: email
      })

      if (data.success === true) {
        console.log("resend email successful")
      }
    } catch (error) {
      console.error("Email does not exist, sign up!")
    }

    
  }

  return (
    <section className="w-3/5 m-auto text-left my-40 text-[#040308]">
        <h2 className="text-5xl font-extrabold mb-6">Check your email.</h2>
        <p className="text-3xl mb-12">We have sent an email with password reset information to {email}
        </p>


        <form className="mt-24" onSubmit={resendForm}>
          <p className="text-2xl">Didn't receive the email? Check spam or promotion folder</p>
            <input 
                type="submit" 
                name="submit" 
                value="Resend email"
                className="border-0 bg-[#579191] w-full p-3 rounded-3xl text-white font-bold text-2xl mt-8 cursor-pointer"
            />
        </form>

        <Link to={'/login'}>
            <button className="border  w-full p-3 rounded-3xl text-{#040308} font-bold text-2xl mt-8 cursor-pointer">Back to login</button>
        </Link>
    </section>
  )
}

export default PasswordSent