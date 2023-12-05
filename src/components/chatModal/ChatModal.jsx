import React, { useContext } from 'react'
import { PiShareFat } from "react-icons/pi";
import { MdDeleteOutline, MdOutlineSaveAlt } from "react-icons/md";
import { RiChatNewLine, RiChatDeleteLine } from "react-icons/ri";
import { AuthContext } from '../../hooks/context';
import { useNavigate } from 'react-router-dom';


function ChatModal() {

    const { setEndChat, userToken, setThreadId, createNewThread } = useContext(AuthContext)

    console.log('chatmodal', userToken)

    const navigate = useNavigate()

    const openNewThread = async () => {
        try {
            const data = await createNewThread()

            const { thread_id } = data.data

            // console.log("thread id", thread_id);
            setThreadId(thread_id)

                console.log(data)
            // Handle the response 
            if (data.success === true) {
                console.log("create thread successful");
                
                //create new chat interface
                navigate(`/newchat/${thread_id}`);
                
            }
            
        } catch (err) {
            console.error("Error: invalid credentials")
        }
        
    }


    const showEndTaskModal = () => {
        setEndChat(true)
    }

    return (
        <div className="bg-[#00A3B5] w-[15%] h-[40%] absolute right-[6.5%] top-[20%] rounded-2xl ease-in-out duration-500">
            <div className="flex items-center gap-3 text-3xl text-white m-3 p-4 cursor-pointer hover:scale-105">
                <RiChatNewLine />
                <p onClick={openNewThread}>New chat</p>
            </div>
            <div className="flex items-center gap-3 text-3xl text-white m-3 p-4 cursor-pointer hover:scale-105">
                <PiShareFat />
                <p>Share chat</p>
            </div>
            <div className="flex items-center gap-3 text-3xl text-white m-3 p-4 cursor-pointer hover:scale-105">
                <MdOutlineSaveAlt />
                <p>Save chat</p>
            </div>
            <div className="flex items-center gap-3 text-3xl text-white m-3 p-4 cursor-pointer hover:scale-105">
                <RiChatDeleteLine />
                <p onClick={showEndTaskModal}>End chat</p>
            </div>
            <div className="flex items-center gap-3 text-3xl text-white m-3 p-4 cursor-pointer hover:scale-105">
                <MdDeleteOutline />
                <p>Delete chat</p>
            </div>
        </div>
    )
}

export default ChatModal