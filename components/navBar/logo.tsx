import React from 'react'
import Image from "next/image"

function Logo() {
  return (
      <div className='w-full h-[43px] pl-[15px] md:pl-[43px]   flex gap-[16px] items-center'>
         <div className="relative">
        
              <Image src="/images/svg/codesandbox.svg" height="10" width="10" className="h-[24px] w-auto" alt="icon"/>
              </div>
        <p className="text-black hidden md:block text-[8px] lg:text-[16px] font-bold tracking-[0%] leading-[100%]">Pro Manage</p>
    </div>
  )
}

export default Logo