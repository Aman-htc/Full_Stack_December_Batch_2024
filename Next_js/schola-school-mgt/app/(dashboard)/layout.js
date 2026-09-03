import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    // <div className="container-fluid">

    //   <div className="row vh-100">

    //     {/* Sidebar */}
    //     <div className="col-12 col-md-1 col-lg-2 p-0 d-flex">
    //       <Sidebar />
    //     </div>

    //     {/* Main Content */}
    //     <div className="col-12 col-md-11 col-lg-10">
    //       {children}
    //       <Footer />
    //     </div>

    //   </div>
    // </div>
   
    <div className="container-fluid">
      <div className="row min-vh-100">

        {/* Sidebar */}
        <div className="col-12 col-md-1 col-lg-2 p-0 d-flex">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-11 col-lg-10 d-flex flex-column">
          <div className="flex-grow-1">
            {children}
          </div>

          <Footer />
        </div>

      </div>
    </div>
  );
}