import React from 'react'
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';

function PricingPlan() {
  return (
    <>
        <section className="p-16">
            <div className="text-center">
                <h2 className="text-5xl font-extrabold">Pricing Plan</h2>
                <p className="text-2xl mt-6">A yearly subscription to unlimited access to the chatbot</p>
            </div>
            <div className="flex gap-16 justify-center items-center my-24 ">
                <div className="border-2 border-[#AEC0C0] rounded-2xl p-8 h-[40rem] w-[32rem]">
                    <h3 className="text-3xl my-16 font-bold">Start plan</h3>
                    <ul className="text-left text-2xl leading-10 my-8">
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            Access to text to text chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            No access to voice to text chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            No access to text to voice chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            No access to voice to voice chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            No access to both text and voice chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            No access to online doctor
                        </li>
                    </ul>
                    <p className="text-2xl font-bold my-10">Free</p>
                </div>

                <div className="border-2 border-[#AEC0C0] rounded-2xl p-8 h-[40rem] w-[32rem]">
                    <h3 className="text-3xl my-16 font-bold">Premium plan</h3>
                    <ul className="text-left text-2xl leading-10 my-8">
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            Access to text to text chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            Access to voice to text chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            Access to text to voice chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            Access to voice to voice chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            Access to both text and voice chat
                        </li>
                        <li className="flex items-center gap-2">
                            <TbArrowBadgeRightFilled />
                            Access to online doctor
                        </li>
                    </ul>
                    <p className="text-2xl font-bold my-10">₦5,000</p>
                    <Link to={'/payment'}>
                        <button className="border-0 bg-[#079393] text-white font-bold text-2xl outline-0 w-full p-4 rounded hover:scale-105 ">pay now</button>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default PricingPlan