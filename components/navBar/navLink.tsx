"use client"
import React from 'react'
import Link from "next/link"
import {usePathname} from 'next/navigation'
import Image from "next/image"
type nav = {
    name: string,
    href: string,
    img: string,
}

function Navlink(props: nav) {
    const pathname = usePathname();
    const isActive = pathname === props.href;
  return (
    <Link href={props.href} className={`w-full h-[43px] pl-[15px] lg:pl-[43px] py-[10px]  flex gap-[16px] items-center ${isActive ? 'bg-[#4391ED1A]' : 'bg-white'} `} >
      <div className="relative">

      <Image src={props.img} height="10" width="10" className="h-[24px] w-auto" alt="icon"/>
      </div>
        <p className={` text-[16px] sm:text-sm md:text-sm lg:text-[16px] font-medium hidden md:block tracking-[0%] leading-[100%] ${isActive ? "text-black" : 'text-[#707070]' }`}>{props.name}</p>
    </Link>
  )
}

export default Navlink


