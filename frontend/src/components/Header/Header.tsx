import React from 'react'

const Header:React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            {/* Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x " alt="" aria-hidden="true" role="presentation" className='w-[109px] h-[40px] '></img>
          {/* <h1 className="text-lg font-bold">YourMail</h1> */}
        </div>
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search mail"
              className="border border-gray-300 rounded-full px-4 py-2 w-80"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M9.65 17.65a7 7 0 1 0 9.9-9.9a7 7 0 0 0-9.9 9.9z"
                />
              </svg>
            </button>
          </div>
          {/* Profile */}
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>    
  )
}

export default Header
