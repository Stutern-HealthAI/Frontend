import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import docVector from '../../assets/onlineDoctorAbout.png'
import diagVectot from '../../assets/aboutDiagnostic.png'


function About() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
  return (
    <>
        <section className="p-16">
            <div className="flex justify-between">
                <h2 className="text-5xl font-extrabold">Learn More</h2>
                <button className="flex items-center gap-2 text-3xl mr-4 "
                    onClick={goBack}
                >
                    <IoMdArrowBack /> Back
                </button>
            </div>

            <div>
                <div className="flex items-center gap-8">
                    <p className="w-[50%] text-2xl leading-10 text-left">
                        Welcome to HealthAI, where innovation meets healthcare for a smarter, 
                        accessible, and user-friendly medical consultation experience. 
                        HealthAI is a revolutionary AI-powered symptom and diagnosis guidance 
                        application designed to empower users with preliminary medical advice 
                        through an intelligent and interactive chatbot.
                    </p>
                    <div className="w-[50%] p-16 flex justify-center items-center"><img src={docVector} alt="doctor image" className="w-[40rem] h-[30rem]" /></div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="w-[50%]"><img src={diagVectot} alt="patient image" /></div>
                    <div className="w-[50%] text-left flex flex-col gap-10">
                        <div>
                            <h3 className="text-3xl font-bold">Our Vision</h3>
                            <p className="text-2xl leading-10">
                                At HealthAI, our vision is to bridge the gap between individuals 
                                and healthcare by harnessing the power of artificial intelligence.
                                We believe in providing users with quick, accurate, and accessible 
                                information to help them make informed decisions about their health.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">Our Mission</h3>
                            <p className="text-2xl leading-10">
                                Our mission is to improve healthcare accessibility by offering a platform 
                                that analyzes symptoms, provides preliminary advice, and aids users in 
                                determining the urgency of seeking professional medical care
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About