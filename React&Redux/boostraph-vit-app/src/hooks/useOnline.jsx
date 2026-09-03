import React, { useState } from 'react'

const useOnline = (intitance=true) => {
    const [online, seOnline] = useState(intitance)
    
   
    return{
        online,
        seOnline
        
    }




 
}

export default useOnline
