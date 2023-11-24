import React, { createContext, useState } from "react"

const AuthContext = createContext()

const ContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isView, setIsView] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userFullName, setUserFullName] = useState(" ")

    // toggle password visibility
    const viewPassword = () => {
        setIsView(!isView)

        let showPass = document.getElementById("showPass")
        if (showPass.type === "password") {
            showPass.type = "text"
        } else {
            showPass.type = "password"
        }   
    }

    //set fullname
    const getFullNameValue = e => {
        setUserFullName(e.target.value)
    }

    // set email
    const getEmailValue = e => {
        setEmail(e.target.value)
    }

    // set password
    const getPasswordValue = e => {
        setPassword(e.target.value)
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            getEmailValue,
            getPasswordValue,
            isView,
            setIsView,
            viewPassword,
            email,
            password,
            userFullName,
            setUserFullName,
            getFullNameValue
        }}
        >
            {props.children}
        </AuthContext.Provider>

    )
}

export {ContextProvider, AuthContext}