import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes} from 'react-router-dom'
import EmailsLayout from './components/EmailsLayout/EmailsLayout.tsx'
import Inbox from './components/Inbox/Inbox.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route path='*' element={<EmailsLayout />} />
        <Route path='' element={<EmailsLayout />} />
        <Route path='inbox' element={<EmailsLayout />} />
        <Route path='snoozed' element={<EmailsLayout />} />
        <Route path='draft' element={<EmailsLayout />} />
        <Route path='sent' element={<Inbox />} />
        <Route path='spam' element={<EmailsLayout />} />
        <Route path='trash' element={<EmailsLayout />} />
        </Route>
      </Routes>
    </>
  )
  )
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)