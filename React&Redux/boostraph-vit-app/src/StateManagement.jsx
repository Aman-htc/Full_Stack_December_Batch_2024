import React, { useState } from 'react'
import ComponentA from './components/ComponentA'

// props driling use 

function StateManagement() {
  
  const[name, setName]=useState('mr.aman kushwahah')
  return (
    <div>
      <h5>Statemanagement jsx</h5>

      <ComponentA name={name}/>
      

    </div>
  )
}

export default StateManagement
