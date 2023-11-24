import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import ForgotPassPage from './pages/ForgotPassPage.jsx'
import InputEmail from './components/ForgotPassword/InputEmail.jsx'
import PasswordSent from './components/ForgotPassword/PasswordSent.jsx'
import SignUpForm from './components/SignUp/SignUpForm.jsx'
import SignUpVerification from './components/SignUp/SignUpVerification.jsx'
import { ContextProvider } from './hooks/context.jsx'
import NewChatPage from './pages/NewChatPage.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
    ]
  },
  {
    path: "/login",
    element: <SignInPage />
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/forgotpassword",
        element: <InputEmail />
      },
      {
        path: "/forgotpassword/sent",
        element: <PasswordSent />
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <SignUpForm />
      },
      {
        path: "/signup/verifyaccount",
        element: <SignUpVerification />
      }
    ]
  },
  {
    path: "/newchat",
    element: <NewChatPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={route} />
    </ContextProvider>
  </React.StrictMode>,
)
