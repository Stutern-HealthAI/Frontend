import React from 'react'
import { PiSpeakerLowLight } from "react-icons/pi";
import { MdSaveAlt, MdOutlineDeleteOutline } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";

function ChatBox({style, alias, queryMessage, floatStyle, width}) {

  return (
    <div className="flex items-center gap-8 rounded-2xl my-4 p-2" style={floatStyle}>
        <div className="rounded-full text-2xl font-bold bg-[#AEC0C0] p-6" >{alias}</div>
        <div className="w-full min-h-fit">
            <div className="flex text-2xl text-white min-h-[inherit] justify-start p-2 items-start gap-2 w-full border rounded-2xl " style={style}>
                <PiSpeakerLowLight className="cursor-pointer"/>
                <p className="w-full text-left break-keep " style={width}>{queryMessage}</p>
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