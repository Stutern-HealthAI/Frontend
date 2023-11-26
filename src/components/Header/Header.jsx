import logo from '../../assets/healthAI-logo.svg'
import { IoIosArrowDown } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import LanguageSelect from '../common/LanguageSelect';
import { useContext, useState } from 'react';
import { AuthContext } from '../../hooks/context';

const NavBar = () => {

    const { openSideNav } = useContext(AuthContext)


    return (
        <>
            <nav className="flex justify-between items-center p-4 fixed w-screen z-50 ">
                <div className="flex items-baseline">
                    <img src={logo} alt="app logo" />
                    <h1 className="text-4xl font-bold">Health AI</h1>
                </div>
                <div className="flex items-center w-1/4 text-2xl justify-around">
                    <LanguageSelect />
                    
                    <div className="flex items-center justify-around w-1/4 text-5xl bg-[#07939312] p-1">
                        <PiUserCircleFill />
                        <IoIosArrowDown onClick={openSideNav}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar