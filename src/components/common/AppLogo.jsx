import React from 'react'
import logo from '../../assets/healthAI-logo-fff.svg'
import { Link } from 'react-router-dom'

function AppLogo() {
  return (
    <>
        <div className="flex items-baseline p-8 text-white ">
            <Link to={'/'}>
                <img src={logo} alt="app logo" className="cursor-pointer"/>
            </Link>
            <Link  to={'/'}>
                <h1 className="text-4xl font-bold cursor-pointer">Health AI</h1>
            </Link>
        </div>
    </>
  )
}

export default AppLogo