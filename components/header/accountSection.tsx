
import Image from "next/image"

export default function Accsection() {
  return (
    <div className="flex gap-6 items-center ">

       <div className="relative">
             <Image src="/images/svg/bell.svg" height="10" width="10" className="h-[20px] w-[18px]" alt="icon"/>
             </div>
       <div className="relative">
             <Image src="/images/svg/help.svg" height="10" width="10" className="h-[20px] w-auto" alt="icon"/>
             </div>
       <div className="relative">
             <Image src="/images/svg/profile.svg" height="10" width="10" className="h-[32px] w-auto" alt="icon"/>
             </div>


        </div>
  )
}
