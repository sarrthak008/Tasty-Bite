import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home';
import './index.css';

import { BrowserRouter ,Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
const routerHandler = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
])

root.render(<RouterProvider router={routerHandler}/>)
)*/

root.render(
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
)