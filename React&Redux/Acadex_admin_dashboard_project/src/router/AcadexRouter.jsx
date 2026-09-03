import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom"
import AcadexLayout from '../layout/AcadexLayout';

import { AcadexAccounts, AcadexClass, AcadexDashboard, AcadexEvents, AcadexHelps, AcadexLibrary, AcadexTeacher, AcdexStudents, Departments, SignIn, SignUp, TimeTable} from '../components/main/index';
import ProtectedAcadex from '../utils/ProtectedAcadex';
import { AcadexSettings } from '../components/main/index';
import NotFoundPage from '../page/NotFoundPage';





function AcadexRouter() {


  const router = createBrowserRouter([


   {path:'*',element:<NotFoundPage/>},


   
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
     
  






    {
      element: <ProtectedAcadex />,
      children: [
        {
          path:'/',
          element: <AcadexLayout />,

          children: [
            { path: '/', element: <AcadexDashboard /> },
            { path: '/settings', element: <AcadexSettings /> },

            { path: '/accounts', element: <AcadexAccounts /> },
            { path: '/class', element: <AcadexClass /> },

            { path: '/help', element: <AcadexHelps /> },
            { path: '/events', element: <AcadexEvents /> },
            { path: '/library', element: <AcadexLibrary /> },
            { path: '/timetable', element: <TimeTable /> },
            { path: '/students', element: <AcdexStudents /> },

            { path: '/departments', element: <Departments /> },
            { path: '/teachers', element: <AcadexTeacher /> },


          ]
        }
      ]

    }
  












    





  ]);

return <RouterProvider router={router} />
}

export default AcadexRouter
