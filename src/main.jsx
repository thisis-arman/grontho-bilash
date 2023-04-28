import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Books from './Components/Books.jsx';
import Blogs from './Components/Blogs.jsx';
import Shop from './Components/Shop.jsx';
import ReactBooks from './Components/ReactBooks.jsx';
import Cart from './Components/Cart.jsx';
import Register from './Components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/blog',
        element:<Blogs/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/react-books',
        element:<ReactBooks/>
      },
      {
        path:'/latest',
        element:<Books/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
