import React from 'react'
import Navlink from "./navLink"

const navItems = [
    {name:"Dashboard", href:"/dashboard", src:"/images/svg/grid.svg"},
    {name:"Board", href:"/", src:"/images/svg/layout.svg"},
    {name:"Analytics", href:"/analytics", src:"/images/svg/database.svg"},
    {name:"Settings", href:"/settings", src:"/images/svg/settings.svg"},
]

function Navbar() {
  return (
    <div className='flex flex-col gap-[16px]'>
{navItems.map((items, index)=>(
<div key={index}>

    <Navlink name={items.name} href={items.href} img={items.src}/>
</div>
))}
    </div>
  )
}

export default Navbar