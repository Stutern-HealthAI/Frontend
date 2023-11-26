import React, { createContext, useState, useEffect } from "react"

const AuthContext = createContext()

const ContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isView, setIsView] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userFullName, setUserFullName] = useState("")
    const [showUpgrade, setShowUpgrade] = useState(false)
    const [endChat, setEndChat] = useState(false)


    useEffect(() => {
        if (showUpgrade === true) {
            setTimeout(() => {
                setShowUpgrade(false);
                console.log("timeout executed")
            }, 5000);
        }

        
        return;
    }, [showUpgrade]);

    //end task
    useEffect(() => {
        if (endChat === true) {
            setTimeout(() => {
                setEndChat(false);
            }, 5000)
        }
    }, [endChat])

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

    //open side nav
    const openSideNav = () => {
        const sideBarElement = document.getElementById("sideBar");
        if (sideBarElement) {
            sideBarElement.style.width = "25%";
        }
    }

    //close side nav
    const closeSideNav = () => {
        const sideBarElement = document.getElementById("sideBar");
        if (sideBarElement) {
            sideBarElement.style.width = "0";
        }
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
            getFullNameValue,
            openSideNav,
            closeSideNav,
            showUpgrade,
            setShowUpgrade,
            endChat,
            setEndChat
        }}
        >
            {props.children}
        </AuthContext.Provider>

    )
}

export {ContextProvider, AuthContext}