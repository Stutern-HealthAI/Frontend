import React from 'react'
import heroImage from '../../assets/hero-webtoon.svg'
import logo from '../../assets/healthAI-logo.svg'
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="flex p-1 h-[85vh]">
            <div className="w-2/3 flex justify-center items-center">
                <img src={heroImage} alt="hero image" className="h-full w-full"/>
            </div>
            <div className="h-full flex flex-col justify-center items-center text-[#0F2424]">
                <div className="flex items-center">
                    <img src={logo} alt="app logo" />
                    <h1 className="text-6xl font-bold">Health AI</h1>
                </div>
                <p className="text-3xl mt-8">Channel the power of AI towards your health</p>
                <div className="flex justify-between w-full font-bold mt-16">
                    <Link to="/login">
                        <button className="rounded-lg border-0 bg-[#0F2424] text-white p-2 text-3xl w-60 h-16">
                            Chat now
                        </button>
                    </Link>
                    <Link to="#">
                        <button className="rounded-lg border-4 border-[#0F2424] p-2 text-3xl w-60 h-16">
                            Learn more
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection