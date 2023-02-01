import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes/Routes'

function App() { 

  return (
    <div className="bg-white">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App
