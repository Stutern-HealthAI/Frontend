import React from 'react'
import bgdatom from '../../assets/abstract-bgd-atom.png'
import { Outlet } from 'react-router-dom';
import LanguageSelect from '../common/LanguageSelect';
import AppLogo from '../common/AppLogo';

function SignUp() {

  return (
    <main className="bg-no-repeat bg-cover h-screen bg-center"
        style={{backgroundImage: `url(${bgdatom})`}}
    >
        <AppLogo />

        <section className="bg-white w-4/6 h-4/5 m-auto rounded-3xl p-8"
            style={{boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.3)"}}
        >
            <LanguageSelect />

            <Outlet />
        </section>
    </main>
  )
}

export default SignUp