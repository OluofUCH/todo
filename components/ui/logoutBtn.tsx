"use client"
import React from 'react'
import Image from "next/image"
function Logoutbtn() {
  return (
    <button className="w-full h-[43px]  py-[10px]  flex gap-[19px] justify-center  items-center" >
      <div className="relative text-black text-[16px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H7" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 15L19 10L14 5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10H7" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </div>
            <p className="text-black hidden sm:block text-[16px] font-medium tracking-[0%] leading-[100%] ">Log out</p>
        </button>
  )
}

export default Logoutbtn