import React, { useContext, useRef, useState, useEffect } from 'react'
import { IoCameraOutline, IoAttachSharp, IoMicOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import chatBulb from '../../assets/ChatEllipse.svg'
import { AuthContext } from '../../hooks/context';
import SideBar from '../sidebar/SideBar';
import ChatModal from '../chatModal/ChatModal';
import ChatPattern from '../chatModal/ChatPattern';
import UpgradePlanModal from '../chatModal/UpgradePlanModal';
import EndChatModal from '../chatModal/EndChatModal';
import ChatBox from '../chatbox/ChatBox';

function ChatInterface() {

    const [openChat, setOpenChat] = useState(false)
    const [openPattern, setOpenPattern] = useState(false)
    const [query, setQuery] = useState("")

    const { showUpgrade, endChat } = useContext(AuthContext)

    const chatBoxRef = useRef(null);

    // Function to scroll the chatbox to the bottom
    const scrollToBottom = () => {
        if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom when component mounts or query changes
    }, [query]);


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

    const captureOnChange = (e) => {
        setQuery(e.target.value)
    }


  return (
    <section className="">
         <SideBar />
        <div className="h-[74dvh] rounded-b-2xl flex flex-col-reverse overflow-auto scroll-smooth">

            <div className="w-[90%] mx-auto min-h-[5rem]"
                ref={chatBoxRef}
            >
                {query && <ChatBox style={{backgroundColor: "#079393"}} queryMessage={query} alias={"AI"} floatStyle={{float: "right"}}/>}
            </div>
        </div>

        <div className="absolute right-10 top-[15%] cursor-pointer hover:scale-105 ease-in-out duration-200 "
            onClick={openChatModal}
        >
            <img src={chatBulb} alt="cat bulb" className="relative w-24 h-24" />
            <IoChatbubblesOutline className="absolute top-[20%] left-[18%] text-white text-6xl"/>
        </div>
        {openChat && <ChatModal />}

        {showUpgrade && <UpgradePlanModal />}
        {endChat && <EndChatModal />}

        {openPattern && <ChatPattern />}
        <div className="h-[15dvh] flex justify-center items-center">
            <div className="flex items-center justify-evenly border border-[#0F2424] rounded-xl w-[90dvw] px-4 m-auto">
                <textarea type="text"
                    placeholder="Type message here"
                    value={query}
                    onChange={captureOnChange}
                    className="text-3xl min-h-10 p-2 bg-transparent outline-0 w-full resize-none overflow-hidden"
                ></textarea>

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