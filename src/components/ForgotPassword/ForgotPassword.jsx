import React from 'react'
import bgdatom from '../../assets/abstract-bgd-atom.png'
import logo from '../../assets/healthAI-logo-fff.svg'
import { Outlet } from 'react-router-dom'

function ForgotPassword() {
  return (
    <main className="bg-no-repeat bg-cover h-screen bg-center" 
        style={{backgroundImage: `url(${bgdatom})`}}
    >
        <div className="flex items-baseline p-8">
            <img src={logo} alt="app logo" className=""/>
            <h1 className="text-4xl font-bold text-white">Health AI</h1>
        </div>
        <section className="bg-white w-4/6 h-4/5 m-auto rounded-3xl p-8"
            style={{boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.3)"}}
        >
            <div className="text-right text-xl font-bold pe-10">
                <select className="outline-0">
                    <option value="english">English (US)</option>
                    <option value="english">English (US)</option>
                    <option value="english">English (US)</option>
                    <option value="english">English (US)</option>
                </select>

            </div>

            <Outlet />
        </section>
    </main>
  )
}

export default ForgotPassword