// import { useState } from 'react'
// import { Button } from 'react-bootstrap'

// const Interview = () => {
//   const [status, setStatus] = useState(false)

//   return (
//     <div>
//       <Button
//         variant={status ? 'outline-success' : 'outline-danger'}
//         onClick={() => setStatus(!status)}
//       >
//         {status ? 'Online' : 'Offline'}
//       </Button>
//     </div>
//   )
// }

// export default Interview


// import React from 'react'
// import { set } from 'react-hook-form'

//  export  const Intervie = () => {
//    const [counter, setCounter]= useState(0)
//    const Increment =()=>{
//     setCounter((priv)=>priv + 1)


//    }
//    const Decrement =()=>{
//     setCounter((priv)=>priv -  1)


//    }
//   return (
//     <div>

//       <P>Counter: {counter}</P>
//       <Button  onClick={Increment}>Increase</Button>
//       <Button onClick={Decrement}>Decrease</Button>


//     </div>
//   )
// }

// let num =2
// if(num % 2=== 0){
//   console.log('even number')
// }else{
//   console.log('odd number')
// }


// const data=[1,2,45,67]
// const number= data.filter((num)=> num > 45 )
// console.log(number)
// Largest.sort((a,b)=>b-a)
// largest.slice(0,2)
// console.log(largest)

// for(let a=0;a<10;a++){
//   console.log(a)
// }

// const factorial =(num)=>{
//   let reast=1;
//   for(let a=1; a <=num; a++){
//     reast = reast*a

//   }
//   return reast
// }
// factorialnumber=factorial(5)
// console.log(factorialnumber)


// const Elment=<h1>jsx rull</h1>
// const root= ReactDOM.create.root(document.getElementById('h1'))

import axios from 'axios'
import React, { useReducer, useState } from 'react'
import { Button } from 'react-bootstrap'

const Interview = () => {
  
  const [state,dispatch]= useReducer(reducer ,0)
  const reducer= (state,action)=>{

    switch(action.type){
       case "Increase":
        return state +1
        case "Decrement":
        return state -1
    }

  }
  const add = (a=122,b=23)=>{
  console.log(a+b)
}
add()
  const data = ['aman', 'febueary'] 
  if (num > 0){
    console.log('positive number')

  }else{
    console.log('negetive number')
  }



  const [time, setTime] = useState()
  const now = new Date()
  const miliseconds= Date.now()
  const moneth = data[now.getMonth()]
  //  const seconds = math.floor(Date.now / 1000)
  console.log(now)
  const route= createBrowserRouter([
    
 ])

  
  

  return ( 

    <div>
      <RouterProvider router={route}/>
      
      counter:{state}
    <button onClick={()=>{dispatch({type:'Increase'})}}>Increase</button>
    <button onClick={()=>{dispatch({type:'Decrement'})}}>Decrease</button>

      <p>{miliseconds}</p>
      <Button onClick={(() => setTime(Math.floor(Date.now() / 1000)))}>Check time </Button>

    </div>
  )
}

export default Interview


const data= [1,2,3,4,5,6,7,8]

const sum = data.reduce((itme,index)=> itme + index,0)
console.log(sum)

const getdata= async()=>{
  const getpromies = await axios.get('')
  console.log(getpromies)

}
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

