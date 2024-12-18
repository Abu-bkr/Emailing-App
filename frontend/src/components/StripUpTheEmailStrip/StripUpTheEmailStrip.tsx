import React from 'react'



const StripUpTheEmailStrip:React.FC = () => {
  return (
    <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10l-6 6-6-6" />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default StripUpTheEmailStrip