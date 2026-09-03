import { createBrowserRouter, RouterProvider } from "react-router-dom"

import BootsrapLayout from "../layout/BootsrapLayout"
import RBButtons from "../components/RBbuttons"

import Breadcrumbs from "../components/Breadcrumbs"



import RBListGroups from "../components/RBListGroups"
import RBFigure from "../components/RBFigure"
import Paginations from "../components/Paginations"
import RBSpinnerss from "../components/RBSpinnerss"
import Tabless from "../components/Tabless"
import Navbars from "../components/Navbars"
import RBAccordion from '../components/RBAccordion'

import Toastss from "../components/Toastss"
import Login from '../pages/Login'
import RBBadges from "../components/RBbadges"
import RBButtonGroups from "../components/RBButtonGroups"
import RBCards from "../components/RBCards"
import RBImages from "../components/RBImages"

import RBModals from "../components/RBModals"
import RBProgresBar from "../components/RBProgresBar"
import TodoList from "../components/TodoList"

import RBCarousel from "../components/RBCarousels"
import RBOverlays from "../components/RBOverlays"
import Tabss from "../components/Tabss"
import RBForms from "../forms/RBForms"
import Calculator from "../components/Calculator"
import RBDropdowns from "../components/RBDropdowns.JSX"
import RBFormBasicValid from "../forms/RBFormBasicValid"
import RBFormikValid from '../forms/RBFormikValid'
import RHForm from "../forms/RHForm"
import RHFormYup from "../forms/RHFormYup"
import StateManagement from "../StateManagement"
import Products from "../pages/Products"
// import AddLists from "../pages/AddLists"
import AddWishList from "../pages/AddWishList"
import AddToCardList from "../pages/AddToCardList"
import Blogs from "../pages/blog/Blogs"
import BlogDetails from "../pages/blog/BlogDetails"
import UseNavigateHook from "../pages/blog/UseNavigateHook"
import UseNavigatePage from "../pages/blog/UseNavigatePage"
import UseRefHook from "../pages/Hooks/UseRefHook"
import UseMemoHook from "../pages/Hooks/UseMemoHook"
import UseCallbakHook from "../pages/Hooks/UseCallbakHook"
import UseEffectHook from "../pages/Hooks/UseEffectHook"
import Axios from "../pages/Axios"
import FetchApi from "../pages/FetchApi"
import CoustomHook from "../pages/CoustomHook"
// import Exe from "../components/Exe.JSX";






function DataModeRouter() {

    const router = createBrowserRouter([
        {

            element: <BootsrapLayout />,
            children: [
                { path: "/", element: <RBBadges /> },
                { path: "/button-bootsrap", element: <RBButtons /> },

                { path: "/breadcrumb-bootsrap", element: <Breadcrumbs /> },
                { path: "/buttongroup-bootsrap", element: <RBButtonGroups /> },
                { path: "/cards-bootsrap", element: <RBCards /> },
                { path: "/images-bootsrap", element: <RBImages /> },
                { path: "/listgroup-bootsrap", element: <RBListGroups /> },
                { path: "/figure-bootsrap", element: <RBFigure /> },
                { path: "/pagination-bootsrap", element: <Paginations /> },
                { path: "/spinners-bootsrap", element: <RBSpinnerss /> },
                { path: "/tables-bootsrap", element: <Tabless /> },
                { path: "/navbar-bootsrap", element: <Navbars /> },
                { path: "/modal-bootsrap", element: <RBModals /> },
                { path: "/toasts-bootsrap", element: <Toastss /> },
                { path: "/login-bootsrap", element: <Login /> },
                { path: "/bropdown-bootsrap", element: <RBDropdowns /> },

                { path: "/Progresbar-bootsrap", element: <RBProgresBar /> },
                { path: "/tod-list", element: <TodoList /> },
                { path: "/accordion-bootsrap", element: <RBAccordion /> },

                { path: "/carousel-bootsrap", element: <RBCarousel /> },
                { path: "/overlay-bootsrap", element: <RBOverlays /> },
                { path: "/navtab-bootsrap", element: <Tabss /> },
                { path: "/form-bootsrap", element: <RBForms /> },
                { path: "/calculator", element: <Calculator /> },
                { path: "/form-bootsrap-basic-valid", element: <RBFormBasicValid /> },
                { path: "/form-bootsrap-formikvalid", element: <RBFormikValid /> },
                { path: "/react-hook-form", element: <RHForm /> },
                { path: "/react-hook-Yup-form", element: <RHFormYup /> },
                { path: "/state-management", element: <StateManagement /> },
                { path: "/Product-list", element: <Products /> },
                { path: "/Product-Add-list", element: <AddWishList /> },
                { path: "/Product-Add-cards", element: <AddToCardList /> },
                { path: "/ref", element: <UseRefHook /> },
                { path: "/memo", element: <UseMemoHook/> },
                { path: "/callback", element: <UseCallbakHook /> },
                { path: "/effect", element: <UseEffectHook /> },
                { path: "/blogs", element: <Blogs /> },
                { path: "/blogs/:id", element: <BlogDetails /> },
                // { path: "/blogs/:slug", element: <BlogDetails /> },
                 { path: "/navigate", element: <UseNavigateHook /> },

                 { path: "/navigate-page/:id", element: <UseNavigatePage /> },
                


                // { path: "/react-hook-exe", element:<Exe/> }
                 { path: "/axios", element: <Axios/> },
                 { path: "/fetch", element: <FetchApi/> },
                 { path: "/custom-hook", element: <CoustomHook/> },




            ]
        },
        {
               
            // path: "/Product-list",
            // element: <Products />,
            // children: [
            //     {
            //         path: "add-to-wishlist",
            //         element: <AddLists />
            //     }
            // ]
        }

        

    ]);

return (
    <RouterProvider router={router} />
)
}

export default DataModeRouter;
