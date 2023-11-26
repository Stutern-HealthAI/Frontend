import React,{ useContext } from 'react'
import { AuthContext } from '../../hooks/context'

function ChatPattern() {
  const { setShowUpgrade } = useContext(AuthContext)

  const showUpgradeOnClick = () => {
    setShowUpgrade(true)
  }

  return (
    <div className="bg-[#00A3B5] p-4 h-[25rem] w-60 text-left text-white absolute right-[12%] bottom-[13%] rounded-2xl">
        <h2 className="text-2xl p-4 border border-white rounded-xl cursor-pointer hover:scale-105"
        >
          Text-to-Text
        </h2>
        <h2 className="text-2xl p-4 border border-white rounded-xl mt-2 cursor-pointer hover:scale-105"
          onClick={showUpgradeOnClick}
        >
          Text-to-Voice
        </h2>
        <h2 className="text-2xl p-4 border border-white rounded-xl mt-2 cursor-pointer hover:scale-105"
          onClick={showUpgradeOnClick}
        >
          Voice-to-Text
        </h2>
        <h2 className="text-2xl p-4 border border-white rounded-xl mt-2 cursor-pointer hover:scale-105"
          onClick={showUpgradeOnClick}
        >
          Voice-to-Voice
        </h2>
        <h2 className="text-2xl p-4 border border-white rounded-xl mt-2 cursor-pointer hover:scale-105"
          onClick={showUpgradeOnClick}
        >
          Both
        </h2>
    </div>
  )
}

export default ChatPattern