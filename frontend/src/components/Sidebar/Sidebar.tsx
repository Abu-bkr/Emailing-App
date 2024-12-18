import React from 'react'
import SidebarSimpleOption from './SidebarSimpleOption'
import SidebarMultipleOption from './SidebarMultipleOption'
import ComposeButton from './ComposeButton'

// type SidebarOptions{
//   option:String,
//   icon:React.ReactNode,
//   suboption:?Array<SidebarOptions>,
// }
const Draft = ['Draft']
const Sidebar:React.FC = () => {
  return (
    <aside className="bg-white shadow-md p-4">
      {/* Sidebar Content */}
      <nav className="w-64 bg-white">
          {/* Compose button */}
          <ComposeButton /> 
          <ul className="space-y-1 mt-4">
            <SidebarSimpleOption link='Inbox'/>
            <SidebarSimpleOption link='Snoozed'/>
            <SidebarSimpleOption link='Sent'/>
            <SidebarSimpleOption link='Spam'/>
            <SidebarSimpleOption link='Trash'/>
            <SidebarMultipleOption linkslist={Draft}/>
          </ul>
        </nav>
    </aside>
  )
}

export default Sidebar