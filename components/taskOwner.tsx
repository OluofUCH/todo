import React from 'react'

interface TaskOwnerProps{
  owner: Array<string>;
}

export default function Taskowner(props: TaskOwnerProps) {
  return (
    <div className='flex gap-[-6rem]'>
      {props.owner.map((item)=>(

        <div className='w-[29px] h-[29px] bg-[#00569E] flex justify-center items-center rounded-full border border-white'>
        <p className='font-[400] text-[12px] tracking-[0%] leading-[100%] text-white'>
          {item}
        </p>
      </div>
      ))}
    </div>
  )
}
