import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import Add from './pages/Add.jsx'
import Home from './pages/Home.jsx'
import Edit from './pages/Edit.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='add' element={<Add/>} />
      <Route path='edit/:id' element={<Edit/>} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}> 
    <App />
  </RouterProvider>,
)
