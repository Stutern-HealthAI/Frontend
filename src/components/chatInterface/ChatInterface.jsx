import React from 'react'
import { IoCameraOutline, IoAttachSharp, IoMicOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";

function ChatInterface() {
  return (
    <section className="min-h-screen">
        <div className="h-[85dvh] rounded-b-2xl"></div>
        <div className="h-[15dvh] flex justify-center items-center">
            <div className="flex items-center justify-evenly border border-[#0F2424] rounded-xl w-[90dvw] px-4 m-auto">
                <textarea type="text"
                    placeholder="Type message here"
                    className="text-3xl min-h-10 p-2 bg-transparent outline-0 w-full resize-none overflow-hidden"
                ></textarea>

                <div className="text-4xl flex items-center">
                    <IoMdMore />
                    <IoMicOutline />
                    <IoAttachSharp />
                    <IoCameraOutline />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ChatInterface