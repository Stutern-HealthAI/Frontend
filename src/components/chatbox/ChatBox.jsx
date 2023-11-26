import React from 'react'
import { PiSpeakerLowLight } from "react-icons/pi";
import { MdSaveAlt, MdOutlineDeleteOutline } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";

function ChatBox({style, alias, queryMessage, floatStyle}) {

  return (
    <div className="flex items-center flex-row-reverse gap-8 w-[80%] rounded-2xl my-4 p-2" style={floatStyle}>
        <div className="rounded-full text-5xl font-bold bg-[#AEC0C0] p-6" >{alias}</div>
        <div className="w-full min-h-[8rem]">
            <div className="flex text-2xl text-white min-h-[inherit] justify-start p-2 items-start w-full border rounded-2xl" style={style}>
                <PiSpeakerLowLight/>
                <p className="w-[90%] text-left">{queryMessage}</p>
            </div>
            <div className="flex items-center text-[#079393] text-xl gap-5 float-right justify-end mt-2">
                <MdSaveAlt />
                <MdOutlineDeleteOutline />
                <RiShareForwardLine />

            </div>
        </div>
    </div>
  )
}

export default ChatBox