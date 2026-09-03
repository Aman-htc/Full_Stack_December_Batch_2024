  


import React, { useState } from 'react'
import { UserContext } from '../Context'
  
  function UserProvider({children}) {

    const[ name , setName] = useState('aman kushwaha')
    return (
      <div>
        <UserContext.Provider value={{name}}>
            {children}
        </UserContext.Provider>
      </div>
    )
  }
  
  export default UserProvider
  