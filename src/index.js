import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const routerHandler = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
])

root.render(<RouterProvider router={routerHandler}/>)

