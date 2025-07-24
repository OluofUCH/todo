import React from 'react'
import Image from 'next/image'

export default function BoardHeader() {
  return (
  <div className='pt-[30px] w-full px-4  pr-[56px] flex items-center justify-between'>
          <p className="text-black text-[29px] font-bold tracking-[0%] leading-[100%]">Board</p>

          <div className='flex gap-2 items-center'>
         
          <p className="text-black text-[16px] font-[400] tracking-[0%] leading-[100%]">This week</p>
          <div className="relative">
                                       <Image src="/images/png/down.png" height="10" width="10" className="h-[5px] w-auto" alt="icon"/>
                                       </div>
          </div>
          </div>
  )
}
