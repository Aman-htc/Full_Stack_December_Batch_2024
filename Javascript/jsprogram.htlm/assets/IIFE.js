// What is iife
//  i i f e is javascript function that run as soon as 
// it is defiene

// EX

// async function aman(text) {
    

//  return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//            reslove(text) 
//         }, 4000);
//     })
// }
// (async()=>{
//     let text= await aman("aman kushwha ")
//     console.log(text)
//     text= await aman("vishal kushwaha")
//     console.log(text)
// })()



// Destructuring

let arr=["aman","atul","harshit","rishabh","karn","shudhansu","ujwal","kuldeep"]
let [a,, ,, d,, ,,...rest]=arr

console.log(a,d,...rest)

