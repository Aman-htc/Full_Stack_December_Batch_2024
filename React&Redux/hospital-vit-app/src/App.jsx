
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'


import HospitalRouter from './layout/HospitalRouter';
import About from "./components/About";
import DoctorPage from "./components/DoctorPage";
import ServicsPage from "./components/ServicsPage";



function App() {


  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route element={<HospitalRouter/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          
          <Route path="/about" element={<About/>}/>
          <Route path="/doctors" element={<DoctorPage/>}/>
          <Route path="/services" element={<ServicsPage/>}/>

        </Route>
        

      </Routes>
      
      </BrowserRouter>


      






    </>
  )
}

export default App


