import React from 'react'
import { Link } from 'react-router-dom'

function UpgradePlanModal() {
  return (
    <div className="bg-[#00A3B5] rounded-2xl h-[40rem] w-[50rem] absolute top-[15%] left-[30%] text-3xl p-4 text-white">
        <p className="text-4xl w-4/5 m-auto my-24">Please upgrade to a paid plan to<br></br> access this feature</p>
        <Link to={'/pricing'}>
          <button className="p-4 rounded-xl border-4 border-white w-[90%] my-16 font-extrabold hover:scale-105 ease-in-out duration-300">
            Upgrade
          </button>
        </Link>
    </div>
  )
}

export default UpgradePlanModal