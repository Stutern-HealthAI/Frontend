import { useContext, useState, useEffect } from 'react';
import bgdatom from '../../assets/abstract-bgd-atom.png'
import bgdweb from '../../assets/abstract-bgd-img.png'
import loginVector from '../../assets/healthDocVector.svg'
import circle1 from '../../assets/circle1.png'
import circle2 from '../../assets/circle2.png'
import { 
    AiOutlineMail,
    AiOutlineLock,
    AiOutlineEye,
    AiOutlineEyeInvisible 
} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../../hooks/context';
import GoogleAndFacebook from '../common/GoogleAndFacebook';
import AppLogo from '../common/AppLogo';


const Login = () => {
    const [showText, setShowText] = useState(false)
    
    const {
        email,
        password,
        viewPassword,
        getEmailValue,
        getPasswordValue,
        isView,
        setEmail,
        setPassword,
        setUserToken,
        createNewThread, 
        setThreadId
    } = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (showText === true) {
            setTimeout(() => {
                setShowText(false);
                console.log("timeout executed")
            }, 2000);
        }
    
        
        return;
    }, [showText]); 


    const handleLoginSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const { data } = await axios.post('https://klus-hc.onrender.com/api/v1/users/login', {
                email: email,
                password: password
            });
    
            const { token } = data.data;
    
            console.log(token);
            setUserToken(token);
    
            console.log(data);
            // Handle the response 
            if (data.success === true) {
                console.log("Login successful");
    
                // Create a new thread after successful login
                try {
                    const data = await createNewThread();

                    const { thread_id } = data.data
                    console.log("login", thread_id)
                    setThreadId(thread_id)
                    
                    // Navigating to a new chat page after creating a thread
                    navigate('/newchat');
                    setEmail("");
                    setPassword("");
                } catch (threadErr) {
                    console.error("Error creating thread:", threadErr);
                    // Handle thread creation error if needed
                }
            }
    
        } catch (err) {
            console.error("Error: Invalid credentials");
            setShowText(true);
            setEmail("");
            setPassword("");
        }
    };

    

    return (
        <main className="bg-no-repeat bg-cover h-screen bg-center" 
            style={{backgroundImage: `url(${bgdatom})`}}
        >
            <AppLogo />
            
            <section className="m-auto border-0 h-4/5 w-4/5 backdrop-blur-md flex rounded-2xl"
                style={{boxShadow: "0px 0px 6.2px 0px rgba(14, 85, 85, 0.60), 0px 48px 48px -6px rgba(14, 85, 85, 0.63), 0px 4px 11.4px 0px rgba(14, 85, 85, 0.25)"}}    
            >
                <div className="w-3/5 bg-no-repeat bg-cover bg-center h-5/5 rounded-l-2xl text-white flex flex-col items-center gap-4" 
                    style={{backgroundImage: `url(${bgdatom})`}}    
                >
        
                    <img src={loginVector} alt="login vector image" className="w-3/5 h-3/5" />
                    <p className="text-4xl font-bold">Welcome to Health AI Chat bot</p>
                    <p className="text-2xl">Just of couple of clicks and we start</p>
                    <div className="flex gap-2 mt-8">
                        <img src={circle1} alt="nav dots" className="w-8" />
                        <img src={circle2} alt="nav dots" className="w-8" />
                        <img src={circle2} alt="nav dots" className="w-8" />
                    </div>
                </div>
                <div className="w-2/5 rounded-r-2xl bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center"
                    style={{backgroundImage: `url(${bgdweb})`}}        
                >
                    <form className="m-8 w-4/5" onSubmit={handleLoginSubmit}>
                        <h1 className="text-4xl text-[#343434] font-bold">Welcome</h1>
                        {showText ? <p className="text-red-600 text-xl">Invalid Email or Password, try again!</p> : null}

                        <div className="mt-16">
                            <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282]">
                                <AiOutlineMail />
                                <input type="email" 
                                    name="email" 
                                    placeholder="Email"
                                    className="w-[90%] ps-2 outline-0"
                                    value={email}
                                    onChange={getEmailValue}
                                />
                            </div>

                            <div className="border rounded-xl flex items-center p-2 text-2xl mb-4 text-[#828282]">
                                <AiOutlineLock />
                                <input type="password" 
                                    name="password" 
                                    id="showPass"
                                    placeholder="Password"
                                    className="w-[90%] ps-2 outline-0"
                                    value={password}
                                    onChange={getPasswordValue}
                                />

                                {isView 
                                    ? <AiOutlineEye className="cursor-pointer" onClick={viewPassword}/> 
                                    : <AiOutlineEyeInvisible className="cursor-pointer" onClick={viewPassword}/>
                                }

                            </div>
                        </div>
                        <p className="text-right text-[#6F74DD] text-2xl"><Link to={"/forgotpassword"}>Forgot Password?</Link></p>
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
                        <GoogleAndFacebook />
                    </div>
                    <p className="text-2xl text-[#828282] mt-8">Have no account yet? <Link to={'/signup'} className="text-[#6F74DD]">Register</Link></p>
                </div>
            </section>
        </main>
    )
}

export default Login