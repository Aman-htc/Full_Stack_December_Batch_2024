import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom"
import AmazonLayout from '../layout/AmazonLayout';
import HomePage from '../page/HomePage';

import AddToCart from '../page/AddToCart';
import AddToWishlist from '../page/AddToWishlist';
import Sign from '../page/Auth/Sign';
import Orderlist from '../page/Orderlist';
import Profile from '../page/Profile';
import AccountSetting from '../page/AccountSetting';
import Logout from '../page/Logout';
import CategoriesLoayout from '../layout/CategoriesLoayout';
import Categories from '../page/Categories';
import ProductPage from '../page/ProductPage';
import Signup from '../page/Auth/Signup';
import ProductDetails from '../page/ProductDetails';
import NotFoundPage from '../components/NotFoundPage';
import ProtectedRoutes from '../utils/ProtectedRoutes';




function AmazonDataModeRoutes() {


  const router = createBrowserRouter([

    { path: '*', element: <NotFoundPage/> },
    // { path: '/404', element: <NotFoun404 /> },





    {
      path: "/",
      element: <AmazonLayout />,
      
      children: [
        {element :<ProtectedRoutes/>,
        children:[
        {
          path: "/product",
          element: <CategoriesLoayout />,
          children: [
            { index: true, element: <ProductPage /> },
            { path: "category/:slug", element: <Categories />}
          ]
        },
      ]
    },

        { index: true, element: <HomePage /> },
        { path: '/cart', element: <AddToCart /> },

        { path: '/sign-in', element: <Sign /> },
        { path: '/sign-up', element: <Signup /> },
        { path: '/order', element: <Orderlist /> },
        { path: '/profile', element: <Profile /> },
        { path: '/changpassword', element: <AccountSetting /> },

        { path: '/', element: <Logout /> },
        { path: "wishlist", element: <AddToWishlist /> },
        { path: "/product-list", element: <ProductDetails /> }
        


      ],
    },




  ]);

  return <RouterProvider router={router} />
}

export default AmazonDataModeRoutes
