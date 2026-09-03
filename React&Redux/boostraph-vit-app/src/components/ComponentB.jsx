import React from 'react'
import CompontentC from './CompontentC'

function ComponentB({name}) {
  return (
    <div>

      <h4>this is ComponentB{name} </h4>
      <CompontentC name={name} />

    </div>
  )
}

export default ComponentB
