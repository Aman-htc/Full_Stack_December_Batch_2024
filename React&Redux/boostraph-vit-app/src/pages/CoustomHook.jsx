import React from 'react'
import useCounter from '../hooks/useCounter'
import { Button } from 'react-bootstrap'
import useOnline from '../hooks/useOnline'
// import { Button } from 'bootstrap'

const CoustomHook = () => {
   const {online, seOnline }=useOnline()

   const {count, increase, decrease} = useCounter(20)
  return (
    <div>
        <p> Custom hook count{count}</p>
        <p>online: {online? 'online': 'ofline'}</p>
        <Button onClick={increase}>increse</Button>{''}
        <Button onClick={decrease}>decrease</Button>
        <Button onClick={()=>seOnline(!online)}>{online ? 'online' : 'ofline'}</Button>{''}
        
    </div>
  )
}

export default CoustomHook
