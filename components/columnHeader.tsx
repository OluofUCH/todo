'use client'
import Image from 'next/image'

interface ColumnHeaderProps {
  columnId: string;
  onAdd: () => void;
}

export default function Columnheader(props: ColumnHeaderProps) {
 
  return (
    <div className='flex justify-between items-center text-black'>
            <p className='font-[500] text-16px tracking-[0%] leading-[100%]'>{props.columnId}</p>
            <div className='flex gap-2 items-center'>
                <button onClick={props.onAdd} className='font-[500] text-22px tracking-[0%] leading-[100%]'>
                  <div className="relative cursor-pointer">
                             <Image src="/images/png/plus.png" height="10" width="10" className="h-[14px] w-auto" alt="icon"/>
                             </div>
                </button>

                <div>
                <div className='items-center'>
                  <div className="relative">
                             <Image src="/images/svg/menu.svg" height="10" width="10" className="h-[2px] w-[16px]" alt="icon"/>
                             </div>
                             </div>
                </div>
            </div>
    </div>
  )
}
