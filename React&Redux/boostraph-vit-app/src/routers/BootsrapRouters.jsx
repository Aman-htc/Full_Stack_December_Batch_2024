import { BrowserRouter, Route, Routes } from "react-router-dom";
import BootsrapLayout from "../layout/BootsrapLayout";


import Breadcrumbs from "../components/Breadcrumbs";
import Cardss from "../components/RBCards";
import Imagess from "../components/Imagess";
import ListGroups from "../components/ListGroups";
import Figures from "../components/Figures";
import Spinnerss from "../components/Spinnerss";
import Tabless from "../components/Tabless";
import Paginations from "../components/Paginations";
import Navbars from '../components/Navbars';
import Toastss from '../components/Toastss';
import Login from '../pages/Login'
import RBBadges from "../components/RBbadges";
import RBButtonGroups from "../components/RBButtonGroups";
import RBModals from "../components/RBModals";



function BootsrapRouters() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route element={<BootsrapLayout />}>

          <Route path="/badge-bootsrap" element={<RBBadges />} />

          <Route path="/button-bootsrap" element={<RBButtons />} />
          <Route path="/breadcrumb-bootsrap" element={<Breadcrumbs />} />
          <Route path="/buttongroup-bootsrap" element={<RBButtonGroups />} />
          <Route path="/cards-bootsrap" element={<Cardss />} />
          <Route path="/images-bootsrap" element={<Imagess />} />
          <Route path="/listgroup-bootsrap" element={<ListGroups />} />
          <Route path="/figure-bootsrap" element={<Figures />} />
          <Route path="/pagination-bootsrap" element={<Paginations />} />
          <Route path="/spinners-bootsrap" element={<Spinnerss />} />
          <Route path="/tables-bootsrap" element={<Tabless />} />
          <Route path="/navbar-bootsrap" element={<Navbars/>}/>
          <Route path="/modal-bootsrap" element={<RBModals/>}/>
          <Route path="/toasts-bootsrap" element={<Toastss/>}/>
          <Route path="/login-bootsrap" element={<Login/>}/>



        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default BootsrapRouters;
