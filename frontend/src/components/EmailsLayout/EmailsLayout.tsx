import React, { Suspense } from 'react'
import StripUpTheEmailStrip from '../StripUpTheEmailStrip/StripUpTheEmailStrip'
// import AllEmailList from '../AllEmailList/AllEmailList'

const simulateDelay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
// Lazy load components for Suspense
const AllEmailList = React.lazy(() => 
  simulateDelay(3000).then(() => import('../AllEmailList/AllEmailList'))
);


const EmailsLayout:React.FC = () => {
  return (
        <main className="flex-1 p-2">
            <div className="bg-white shadow-md rounded-lg">
            {/* Toolbar */}
            <StripUpTheEmailStrip />
            {/* Email List */}
            <Suspense fallback={<Loading />}>
              <AllEmailList />
            </Suspense>
            </div>
        </main>
        )
}
function Loading(){
  return <h2> 🌀 Loading ....</h2>
}

export default EmailsLayout
