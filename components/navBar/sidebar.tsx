import React from 'react'
import Navbar from "./navBar"
import Logo from "./logo"
import Logoutbtn from "@/components/ui/logoutBtn"

function Sidebar() {
  return (
    <div className=' min-h-screen fixed left-0 top-0 pt-[32px] pb-[84px] py-[10px] w-1/6 z-99  justify-between flex flex-col bg-white shadow-[7px_-1px_12px_0px_#0000001C]'>
       <div className='w-full flex flex-col gap-8'>

        <Logo />
        <Navbar />
       </div>
<Logoutbtn />
      
    </div>
  )
}

export default Sidebar;