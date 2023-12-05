import React from 'react'
import google from '../../assets/googleLogo.svg'
import facebook from '../../assets/facebookLogo.svg'

function GoogleAndFacebook() {
  return (
    <>
        <div className="border rounded-xl flex items-center gap-1 p-2 text-xl mb-4 text-[#828282] cursor-pointer hover:scale-105">
            <img src={google} alt="google logo" className="w-10 h-10" />
            <p>Sign in with Google</p>
        </div>
        <div className="border rounded-xl flex items-center p-2 gap-1 text-xl mb-4 text-[#828282] cursor-pointer hover:scale-105">
            <img src={facebook} alt="facebook logo" className="w-10 h-10" />
            <p>Sign in with Facebook</p>
        </div>
    </>
  )
}

export default GoogleAndFacebook