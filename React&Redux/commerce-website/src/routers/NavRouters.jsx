import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom"
import NavbarLayout from '../layouts/NavbarLayout'
import Electronics from '../pages/Electronics'
import Compuer from '../pages/Compuer'
import Leptops from '../pages/Leptops'
import Printer from '../pages/Printer'
import Storage from '../pages/Storage'
import OfferJone from '../pages/OfferJone'
import Gaming from '../pages/Gaming'
// import CctvCamers from '../pages/products/electronics/CctvCamers'
// import LedTelivision from '../pages/products/electronics/LedTelivision'
// import MobilesProduct from '../pages/products/electronics/MobilesProduct'
// import ProSepaker from '../pages/products/electronics/ProSepaker'
// import TablesProducts from '../pages/products/electronics/TablesProducts'
// import BluetoothSpeaker from '../pages/products/electronics/BluetoothSpeaker'
import NotFoun404 from '../pages/NotFoun404'
// import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/products/HomePage'
// import ProtectedRouters from '../utils/ProtectedRouters'
import AddToCardList from '../pages/AddToCardList'
import AddWishList from '../pages/AddWishList'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Changpassword from '../pages/Changpassword'
// import { WishlistContext } from '../contexts/Context'
// import  from '../pages/AddWishList'


function NavRouters() {
  // const Navigate = useNavigate()

  const router = createBrowserRouter([

    { path: '*', element: <Navigate to="/404" /> },
    { path: '/404', element: <NotFoun404 /> },

    



    {
      path: "/",
      element: <NavbarLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        
        {path: "electronics",element: <Electronics/>},
        
      //  { path: "/login", element: <LoginPage /> },
        // {
        //   element: <ProtectedRouters />,
        //   children: [


            // {
            //   path: "electronics",element: <Electronics />,
              // children: [
              //   { index: true, element: <CctvCamers /> },
              //   { path: "electronics-television", element: <LedTelivision /> },
              //   { path: "electronics-mobile", element: <MobilesProduct /> },
              //   { path: "electronics-Protable", element: <ProSepaker /> },
              //   { path: "electronics-tablets", element: <TablesProducts /> },
              //   { path: "electronics-bluetooth", element: <BluetoothSpeaker /> },

              // ]
            // },

            { path: "computers", element: <Compuer /> },
            { path: "laptop", element: <Leptops /> },
            { path: "printer", element: <Printer /> },
            { path: "storage", element: <Storage /> },
            { path: "offer-zone", element: <OfferJone /> },
            { path: "gaming", element: <Gaming /> },
            { path: "/wishlist", element: <AddWishList/> },
            { path: "/add-cart", element: <AddToCardList/> },
            {path: "/order",element: <Order/>},
            {path: "/profile",element: <Profile/>},
            {path: "/change-password",element: <Changpassword/>},

          ],
        },


    //   ]
    // },


  ]);

  return <RouterProvider router={router} />
}

export default NavRouters
