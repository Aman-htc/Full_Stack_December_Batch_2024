import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
// import './assets/scss/components/theme.scss';


import NavRouters from "./routers/NavRouters";

import { WishlistProvider } from "./contexts/providers/WishlistProvider";
import { AddCardProvider } from "./contexts/providers/AddToCardProvider";

function App() {

  return (
    
    <WishlistProvider>

      <AddCardProvider>
        <NavRouters />
      </AddCardProvider>
    </WishlistProvider>


  );
}

export default App;
