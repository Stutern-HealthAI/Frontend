import logo from '../../assets/healthAI-logo.svg'
import { IoIosArrowDown } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";

const NavBar = () => {
    return (
        <>
            <nav className="flex justify-between items-center">
                <div className="flex items-baseline">
                    <img src={logo} alt="app logo" />
                    <h1 className="text-4xl font-bold">Health AI</h1>
                </div>
                <div className="flex items-center w-1/4 text-2xl justify-around">
                    <div className="lang_container">
                        <select>
                            <option value="english">English (US)</option>
                            <option value="english">English (US)</option>
                            <option value="english">English (US)</option>
                            <option value="english">English (US)</option>
                        </select>

                    </div>
                    <div className="flex items-center justify-around w-1/4 text-5xl bg-[#07939312] p-1">
                        <PiUserCircleFill />
                        <IoIosArrowDown />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar