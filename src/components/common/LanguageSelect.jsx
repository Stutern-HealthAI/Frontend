import React, { useContext } from 'react'
import { AuthContext } from '../../hooks/context'
import axios from 'axios'

function LanguageSelect() {
  const { getSelectValue, selectLang } = useContext(AuthContext)

  const apiUrl = import.meta.env.VITE_BASE_URL
  
  console.log("language:", selectLang)

  const translateMessages = async () => {
    try {
      const { data } = await axios.post(`${apiUrl}/translations`, {
        request_language: selectLang,
        response_language: selectLang,
        user_message: {}
      })
    } catch (error) {
      
    }
  }

  return (
    <>
        <div className="text-right text-2xl font-bold pe-10">
            <select
              value={selectLang}
              onChange={getSelectValue}
              className="outline-0 cursor-pointer">
                <option value="english">English (US)</option>
                <option value="french">French (FR)</option>
                <option value="german">German (GER)</option>
                <option value="english">English (US)</option>
            </select>

        </div>
    </>
  )
}

export default LanguageSelect