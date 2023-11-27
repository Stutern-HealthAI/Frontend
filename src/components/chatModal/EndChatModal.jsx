import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

function EndChatModal() {

  return (
    <div className="bg-[#00A3B5] rounded-2xl h-[40rem] w-[50rem] absolute top-[15%] left-[30%] text-3xl p-4 text-white">
        <p className="text-4xl w-4/5 m-auto my-24">Please note that I am just an AI, I recommend you communicate with a doctor online or visit the hospital</p>
        <Link to={'/'}><button className="p-4 rounded-xl border-4 border-white w-[90%] my-16 font-extrabold hover:scale-105 ease-in-out duration-300">End chat</button></Link>
    </div>
  )
}

export default EndChatModal