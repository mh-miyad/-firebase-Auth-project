import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Register from './page/Register'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './page/Login'

const router = createBrowserRouter([
  { path:'/',
  element:<App/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },{
        path: "/",
    element: <Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
