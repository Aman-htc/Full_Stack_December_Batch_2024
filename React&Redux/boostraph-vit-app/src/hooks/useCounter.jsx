import React, { useState } from 'react'

const useCounter = (intitance =0) => {

    const [count, setCount] = useState(intitance)
    const increase =()=>{setCount(count + 1)}
    const decrease =()=>{setCount(count + 1)}



  return {
    count,
    increase,
    decrease
  }
    
}

export default useCounter
