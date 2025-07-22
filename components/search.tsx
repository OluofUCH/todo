import Image from "next/image"

export default function Search() {
  return (
    <div className="flex gap-2 py-[4px] items-center ">
        <div className="relative">
                     <Image src="/images/svg/search.svg" height="10" width="10" className="h-[20px] w-[18px]" alt="icon"/>
                     </div>
        <p className="font-[400] text-[16px] tracking-[0%} leading-[100%] text-[#707070]">Search</p>
    </div>
  )
}
