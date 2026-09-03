import React, { useContext } from 'react'
import { UserContext } from '../contexts/Context'

function UseContextExe() {
     const {name}=useContext(UserContext)
  return (
    <div>
      <h3>hello {name}</h3>
    </div>
  )
}

export default UseContextExe
