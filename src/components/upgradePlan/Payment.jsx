import React, { useContext } from 'react'
import mastercard from '../../assets/mastercard.png'
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { AuthContext } from '../../hooks/context'

function Payment() {

  const { isView, viewPassword } = useContext(AuthContext)

  return (
    <>
      <section className="p-8 flex flex-col items-center">
        <h2 className="text-6xl text-[#079393] font-extrabold py-12">Payment</h2>
        <form className="w-[50rem] text-2xl ">
          <div className="w-full border border-[#8A8A8A] p-6 flex items-center my-2 rounded ">
            <input type="text"
              name="cardtype"
              // value={"#"}
              placeholder="Credit Card"
              className="w-[90%] outline-0"
            />
            <select>
              <option value="mastercard"><img src={mastercard} alt="mastercard" className="w-10 h-10" /></option>
            </select>
          </div>
          <div className="w-full border border-[#8A8A8A] p-6 flex items-center my-2 rounded ">
            <input type="password" 
                name="cardnum" 
                id="showPass"
                placeholder="Card Number"
                // value={"#"}
                onChange={"#"}
                className="w-[95%] outline-0 "
            />
            {isView 
                ? <IoMdUnlock className="cursor-pointer text-3xl text-[#8A8A8A]" onClick={viewPassword}/> 
                : <IoMdLock className="cursor-pointer text-3xl text-[#8A8A8A]" onClick={viewPassword}/>
            }
          </div>
          <div className="w-full flex items-center my-2 gap-4">
            <input type="text"
              name="ExpDate"
              // value={"#"}
              placeholder="Expiration Date"
              className="w-2/4 border border-[#8A8A8A] p-6 rounded outline-0  "
            />
            <input type="text"
              name="securityCode"
              // value={"#"}
              placeholder="Security Code"
              className="w-2/4 border border-[#8A8A8A] p-6 rounded outline-0  "
            />
          </div>
          <input type="text"
            name="holderName"
            // value={"#"}
            placeholder="Card Holder Name"
            className="w-full border border-[#8A8A8A] p-6 my-2 rounded outline-0 "
          />
          <div className="text-left flex items-center my-4 text-2xl gap-4">
            <input type="checkbox"
              name="save"
              value={"#"}
            />
            <label className="text-[#079393] text-2xl">Save this info for later</label>
          </div>
          <input 
              type="submit" 
              name="submit" 
              value="Pay Now"
              className="border bg-[#079393] w-full p-3 rounded-xl text-white font-medium text-2xl mt-16 cursor-pointer"
          />
        </form>
      </section>
    </>
  )
}

export default Payment