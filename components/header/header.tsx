import React from 'react'
import Search from './search'
import Accsection from './accountSection'

function Header() {
  return (
    <div className='pt-[30px] bg-white w-5/6 fixed right-0 top-0 px-8 pr-[56px] z-50 flex items-center justify-between'>
        <Search />
        <Accsection />

        </div>
  )
}

export default Header