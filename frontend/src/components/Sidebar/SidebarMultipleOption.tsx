import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface Link{linkslist:string[];}




const SidebarMultipleOption:React.FC<Link> = ({linkslist}) => {
  const [isHidden , setIsHidden] = useState(true);
  const toggleHiddenState = () => {
    setIsHidden(!isHidden);
  }
  return (
    <div>
      <li onClick={toggleHiddenState} className='flex items-center rounded-full space-x-4 p-2 hover:bg-gray-100'>
      <svg
            className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
              !isHidden ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox='0 0 24 24'
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10l-6 6-6-6" />
        </svg>
        <span>More</span>
      </li>
      <li id='sidebar-multiple-option' className={`${isHidden? 'hidden':'flex flex-col space-y-2 mt-2'}`}> 
       {linkslist.map((link, index) => (
        <NavLink to={link} key={index} end={index === 0} className={({isActive}) => `flex items-center rounded-full space-x-4 p-2 hover:bg-gray-100 ${isActive?'bg-gray-200':''}`}>
        <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox='0 0 24 24'
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10l-6 6-6-6" />
        </svg>
        <span>{link}</span>
    </NavLink>
       ))}
      </li>
    </div>
  )
}

export default SidebarMultipleOption
