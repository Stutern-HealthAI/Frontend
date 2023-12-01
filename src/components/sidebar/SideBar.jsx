import React, { useContext } from 'react'
import AppLogo from '../common/AppLogo'
import bgdatom from '../../assets/abstract-bgd-atom.png'
import { AuthContext } from '../../hooks/context'
import profilePhoto from '../../assets/userProfilePhoto.svg'
import { Link } from 'react-router-dom'
import { TbMoneybag } from "react-icons/tb";
import { AiOutlineEye, AiOutlineDownload, AiOutlineSetting, AiOutlinePoweroff } from "react-icons/ai";

function SideBar() {

    const { email, userFullName, closeSideNav } = useContext(AuthContext)



  return (
    <section className="w-0 h-screen bg-cover fixed top-0 right-0 z-[1000] overflow-x-hidden ease-in duration-500 "
        style={{backgroundImage: `url(${bgdatom})`}}
        id="sideBar"
    >
        <div>
            <AppLogo />
            <button className="text-6xl text-white cursor-pointer absolute top-6 right-5" onClick={closeSideNav}>&times;</button>
        </div>
        
        <div className="flex gap-4 mx-6 border-0 bg-[#079393] rounded-xl p-4"
            style={{boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"}}
        >
            <img src={profilePhoto} alt="profile image" />
            <div className="text-white">
                <h3 className="text-2xl">{userFullName}</h3>
                <p className="text-2xl mt-4">{email}</p>
            </div>
        </div>
        <ul className="text-white m-8">
            <Link to={"/"}>
                <li className="flex text-3xl gap-4 items-center mb-4">
                    <AiOutlineEye />
                    <p>View Profile</p>
                </li>
            </Link>
            <Link to={"/"}>
                <li className="flex text-3xl gap-4 items-center mb-4">
                    <AiOutlineDownload />
                    <p>Saved Chats</p>
                </li>
            </Link>
            <Link to={"/"}>
                <li className="flex text-3xl gap-4 items-center mb-4">
                    <AiOutlineSetting />
                    <p>Settings</p>
                </li>
            </Link>
            <Link to={"/"}>
                <li className="flex text-3xl gap-4 items-center mb-4">
                    <TbMoneybag />
                    <p>Refer and Earn</p>
                </li>
            </Link>
        </ul>
        <div className="m-8 fixed bottom-0 w-[inherit]">
            <hr className="border-[#000] border w-[85%]"/>
            <Link to={"/"}><p className="text-3xl text-white text-left my-4">Upgrade to premium plan</p></Link>
            <div className="flex text-3xl gap-4 items-center mt-10">
                <AiOutlinePoweroff />
                <p>Logout</p>
            </div>
        </div>
        
        
    </section>
  )
}

export default SideBar