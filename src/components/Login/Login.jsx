import { useState } from 'react';
import bgdatom from '../../assets/abstract-bgd-atom.png'
import bgdweb from '../../assets/abstract-bgd-img.png'
import logo from '../../assets/healthAI-logo.svg'
import { 
    AiOutlineMail,
    AiOutlineLock,
    AiOutlineEye,
    AiOutlineEyeInvisible 
} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Login = () => {
    const [isView, setIsView] = useState(true);

    const viewPassword = () => {
        setIsView(!isView)
    }

    return (
        <main className="bg-no-repeat bg-cover h-screen bg-center" 
            style={{backgroundImage: `url(${bgdatom})`}}
        >
            <h2 className="text-6xl text-white p-8 font-semibold">Sign In</h2>
            <section className="m-auto border-0 h-4/5 w-4/5 backdrop-blur-md flex rounded-2xl"
                style={{boxShadow: "0px 0px 6.2px 0px rgba(14, 85, 85, 0.60), 0px 48px 48px -6px rgba(14, 85, 85, 0.63), 0px 4px 11.4px 0px rgba(14, 85, 85, 0.25)"}}    
            >
                <div className="w-3/5 bg-no-repeat bg-cover bg-center h-5/5 rounded-l-2xl text-white" 
                    style={{backgroundImage: `url(${bgdatom})`}}    
                >
                    <div className="flex items-baseline ">
                        <img src={logo} alt="app logo" className=""/>
                        <h1 className="text-4xl font-bold">Health AI</h1>
                    </div> 
                    <img src={logo} alt="login vector image" />
                    <p className="text-4xl">Welcome to Health AI Chat bot</p>
                    <p className="text-2xl">Just of couple of clicks and we start</p>
                    <div>000</div>
                </div>
                <div className="w-2/5 rounded-r-2xl bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center"
                    style={{backgroundImage: `url(${bgdweb})`}}        
                >
                    <form className="m-8 w-4/5">
                        <h1 className="text-4xl text-[#343434] font-bold">Welcome</h1>
                        <div className="mt-16">
                            <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282]">
                                <AiOutlineMail />
                                <input type="email" name="email" className="w-[90%] ps-2 outline-0"/>
                            </div>
                            <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282]">
                                <AiOutlineLock />
                                <input type="password" name="password" className="w-[90%] ps-2 outline-0"/>
                                {isView 
                                    ? <AiOutlineEye className="cursor-pointer" onClick={()=>viewPassword()}/> 
                                    : <AiOutlineEyeInvisible className="cursor-pointer" onClick={()=>viewPassword()}/>
                                }
                            </div>
                        </div>
                        <p className="text-right text-[#6F74DD] text-2xl"><Link to={"/"}>Forgot Password?</Link></p>
                        <input 
                            type="submit" 
                            name="submit" 
                            value="Log In"
                            className="border bg-[#579191] w-full p-3 rounded-xl text-white font-medium text-2xl mt-16 cursor-pointer"
                        />
                    </form>
                    <div className="flex items-center gap-2 text-2xl">
                        <hr className="bg-[#343434] w-24"/>
                        <p className="text-[#343434]">or</p>
                        <hr className="bg-[#343434] w-24"/>
                    </div>
                    <div className="flex justify-between w-4/5 mt-8">
                        <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282] cursor-pointer">
                            <p>Sign in with Google</p>
                        </div>
                        <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282] cursor-pointer">
                            <p>Sign in with Facebook</p>
                        </div>
                    </div>
                    <p className="text-2xl text-[#828282] mt-8">Have no account yet? <Link to={'/'} className="text-[#6F74DD]">Register</Link></p>
                </div>
            </section>
        </main>
    )
}

export default Login