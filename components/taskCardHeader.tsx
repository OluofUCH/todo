'use client'
import {useState} from 'react'
import React from 'react'
import Options from "@/components/ui/options"
import Image from 'next/image'

export default function Taskcardheader(props: header) {
  
  const [showOptions, setShowOptions] = useState(false)
  const handleCancel = () =>{
setShowOptions(false)
  }
  const handleShowOptions = () =>{
setShowOptions(true)
  }
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 justify-center items-center'>
            <div className='bg-[#40A737] h-[9px] w-[9px] rounded-full'></div>
            <p className='font-500 text-[#707070] text-[8px] tracking-[0%] leading-[100%]'>
                {props.category}
            </p>
        </div>

        <div>
            <button className='font-[500] cursor-pointer text-black text-22px tracking-[0%] leading-[100%]' onClick={handleShowOptions}>
              <div className="relative">
              <Image src="/images/svg/menu.svg" height="10" width="10" className="h-[2px] w-[16px]" alt="icon"/>
                                           </div>
            </button>
        {showOptions && <Options id={props.id}  columnId={props.columnId} cancel={handleCancel} edit={props.edit} refresh={props.refresh}/>}
        </div>
    </div>
  )
}

interface header{
  category: string;
  id: string;
  columnId: string;
  refresh: ()=>void;
  edit: ()=>void;
}
