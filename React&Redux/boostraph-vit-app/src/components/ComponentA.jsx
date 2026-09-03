import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { UserContext } from '../contexts/Context'

function ComponentA({name}) {
 
  return (
    <div>
        <h4>this is ComponentA {name} </h4>
        <ComponentB name={name}/>
      
    </div>
  )
}

export default ComponentA
