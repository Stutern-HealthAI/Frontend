import React, { useContext, useRef, useState, useEffect } from 'react'
import { IoCameraOutline, IoAttachSharp, IoMicOutline, IoSendSharp } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import chatBulb from '../../assets/ChatEllipse.svg'
import { AuthContext } from '../../hooks/context';
import SideBar from '../sidebar/SideBar';
import ChatModal from '../chatModal/ChatModal';
import ChatPattern from '../chatModal/ChatPattern';
import EndChatModal from '../chatModal/EndChatModal';
import ChatBox from '../chatbox/ChatBox';
import UpgradePlanModal from '../upgradePlan/UpgradePlanModal'
import axios from 'axios';
import chatBot from '../../assets/chatBot.svg'
// import { useParams } from 'react-router-dom';

function ChatInterface() {

    const [openChat, setOpenChat] = useState(false)
    const [openPattern, setOpenPattern] = useState(false)
    const [queryMessage, setQueryMessage] = useState([])
    const [showUserMessage, setShowUserMessage] = useState(false)
    const [userMessage, setUserMessage] = useState("")
    const [responseMessage, setResponseMessage] = useState([])
    const [showBotMessage, setShowBotMessage] = useState(false)
    const [botMessage, setBotMessage] =  useState("")

    const { showUpgrade, endChat, userToken, threadId,  } = useContext(AuthContext)

    const apiUrl = import.meta.env.VITE_BASE_URL

    const chatBoxRef = useRef(null);

    // const { thread_id } = useParams()

    // Function to scroll the chatbox to the bottom
    const scrollToBottom = () => {
        if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom when component mounts or query changes
    }, [queryMessage]);


    const openChatModal = () => {
        setOpenChat(!openChat)
        if (openPattern === true) {
            setOpenPattern(false)
        }
    }

    const openPatternModal = () => {
        setOpenPattern(!openPattern)
        if (openChat === true) {
            setOpenChat(false)
        }
    }

    const captureMessageChange = (e) => {
        setUserMessage(e.target.value)
    }

    const submitFormOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          onFormSubmit(event);
        }
    };

    const onFormSubmit = async (e) => {
        e.preventDefault()

        if (userMessage) {
            setQueryMessage([...queryMessage, userMessage]);
            setShowUserMessage(true)
            setUserMessage('');

            
            try {
                const {data} = await axios.post(`${apiUrl}/messages`, {
                    user_message: userMessage,
                    thread_id: threadId
                    },
                    {
                        headers: {
                            Authorization: 'Bearer ' + userToken
                        }
                    }
                )
                //    console.log(data)
                
                if (data.success === true) {
                    const { content: message } = data.data.bot_message
                    // console.log(message)

                    console.log("fetched response successful");
                    setResponseMessage([...responseMessage, message])
                    setShowBotMessage(true)
                    setBotMessage(message)
                }
                
            } catch (err) {
                console.error("Error: no response received")
                // console.log(err)
            }
        }
    }
    


    const mergedMessages = queryMessage.map((message, index) => ({
        queryMessage: message,
        responseMessage: responseMessage[index] || '' // If no response exists for the message, default to an empty string
    }));

    // console.log("user query array:", queryMessage)
    // console.log("showUseressage:", showUserMessage)
    // console.log("user message:", userMessage)
    // console.log("bot query array:", responseMessage)
    // console.log("showbotmessage:", showBotMessage)
    // console.log("bot message:", botMessage)

    return (
        <section className="">
            <SideBar />
            <div className="h-[74dvh] rounded-b-2xl flex flex-col-reverse overflow-auto scroll-smooth">
                <div className="w-[90%] mx-auto min-h-[5rem] overflow-y-auto scrollbar-hide" ref={chatBoxRef}>
                    <div className="flex flex-col w-2/6">
                        <img src={chatBot} alt="chat bot" className="w-80 h-80" />
                        <ChatBox
                            style={{ backgroundColor: "#AEC0C0" }}
                            queryMessage={"Hey there!!!"}
                            alias={"AI"}
                            floatStyle={{float: "left", width: "20rem"}}
                        />
                        <ChatBox
                            style={{ backgroundColor: "#AEC0C0" }}
                            queryMessage={"Welcome to Health AI. I am your personal chatbot. How may I help you today?"}
                            alias={"AI"}
                            floatStyle={{float: "left"}}
                        />
                    </div>
                    {mergedMessages.map((mergedItem, index) => (
                        <div key={index}>
                            <ChatBox
                            style={{ backgroundColor: "#079393"}}
                            queryMessage={mergedItem.queryMessage}
                            alias={"ME"}
                            floatStyle={{float: "right", flexDirection: "row-reverse", width: "80%"}}
                            
                            />
                            {mergedItem.responseMessage && (
                                <ChatBox
                                style={{ backgroundColor: "#AEC0C0" }}
                                queryMessage={mergedItem.responseMessage}
                                alias={"AI"}
                                floatStyle={{float: "left", width: "80%"}}
                               
                                />
                            )}
                        </div>

                    ))}
                
                </div>
            </div>

            <div className="absolute right-10 top-[15%] cursor-pointer hover:scale-105 ease-in-out duration-200 "
                onClick={openChatModal}
            >
                <img src={chatBulb} alt="cat bulb" className="relative w-24 h-24" />
                <IoChatbubblesOutline className="absolute top-[20%] left-[18%] text-white text-6xl"/>
            </div>

            {openChat && <ChatModal />}

            {showUpgrade && <UpgradePlanModal /> }

            {endChat && <EndChatModal />}

            {openPattern && <ChatPattern />}

            <div className="h-[15dvh] flex justify-center items-center">
                <div className="flex items-center justify-evenly border border-[#0F2424] rounded-xl w-[90dvw] p-4 m-auto">
                    <form onSubmit={onFormSubmit} className="flex items-center w-full">
                        <textarea type="text"
                            id="form-textarea"
                            placeholder="Type message here"
                            value={userMessage}
                            onChange={captureMessageChange}
                            onKeyDown={submitFormOnEnter}
                            className="text-2xl h-fit p-1 bg-transparent outline-0 w-full resize-none overflow-y-auto scrollbar-hide break-keep "
                        ></textarea>
                        <button type="submit" className="text-[#00A3B5] text-4xl outline-0 "
                        >
                            <IoSendSharp />
                        </button>
                    </form>

                    <div className="text-4xl flex items-center">
                        <IoMdMore className="cursor-pointer" onClick={openPatternModal}/>
                        <IoMicOutline className="cursor-pointer" />
                        <IoAttachSharp className="cursor-pointer" />
                        <IoCameraOutline className="cursor-pointer" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ChatInterface