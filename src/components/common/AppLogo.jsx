import React from 'react'
import logo from '../../assets/healthAI-logo-fff.svg'
import { Link } from 'react-router-dom'

function AppLogo() {
  return (
    <>
        <Link to={'/'}>
            <div className="flex items-baseline p-8 text-white cursor-pointer">
                <img src={logo} alt="app logo" className=""/>
                <h1 className="text-4xl font-bold ">Health AI</h1>
            </div>
        </Link>
    </>
  )
}

export default AppLogo