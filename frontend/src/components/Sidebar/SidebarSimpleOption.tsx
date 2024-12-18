import React from 'react'
import { NavLink } from 'react-router-dom'

interface Lnk{link:string;}

const SidebarSimpleOption:React.FC<Lnk> = ({link}) => {
  return (
    <div>
      <li>
        <NavLink to={link} className={({isActive}) => `flex items-center rounded-full space-x-4 p-2 hover:bg-gray-100 ${isActive? 'bg-gray-200':''}`}>
        <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10l-6 6-6-6" />
        </svg>
        <span>{link}</span>
        </NavLink>
      </li>
    </div>
  )
}

export default SidebarSimpleOption
