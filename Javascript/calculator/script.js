function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.src=src
        script.onload=function(){
            resolve(src+"done suessefully")
        }
        document.head.append(script)
    })
}

loadScript("https://cdn.jsdelivr.net/npm/bootstraps.2.2/dist/js")


// let a=loadScript("amankugfsnajdmnfsnj")
// a.then((value)=>{
//     console.log(value)
// })
// const main=async()=>{
//     console.log(new Date().getSeconds())
//     let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstraps.2.2/dist/js/bootstrap.boundle.min.js")
//     console.log(new Date().getSeconds())

// }
// main()






// use for async error handaling

let p= ()=>{
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error("Please this is not acceptable"))
    }, 3000);
})
}
let b=async()=>{
    try{
        let c=await p()
    console.log(c)

    }
    catch(err){
        console.log("this is error has been handaleing ")
    
}
}
b()



// use for async

let a=(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve(text)  
        }, 3000);
    })
}
// let f=async()=>{
//     let text=await a("aman kushwaha is the best man")
//         console.log(text)
//          text=await a("amans ")
//         console.log(text)
//          text=await a("aam")
//         console.log(text)
//         text=await a("amsn bcnkmkj")
//         console.log(text)
    
// }
// f ()

// IIFE USE
(async()=>{
    let text=await a("aman kysh")
    console.log(text)
    text =await a("aman kushwaha is the best")
    console.log(text)

})()


// (async()=>{
//     let n=await a()
//     console.log(n)
//     let z=await a()
//     console.log(z)
//     let x=await a()
//     console.log(x)


// })()


// async function aman(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            resolve(455) 
//         }, 3000);
//     })

// }
// async function atul(){
//     console.log("adding maudling")
//     console.log("Do something")
//     let s=await aman()
//     console.log()
//     console.log("Process data")
    
// }
// atul()

// 0
// }


// async function atul(){
//     let a=await aman()
//     console.log(a)
//     let b=await aman()
//     console.log(b)
//     let c=await aman()
//     console.log(c)

// }
// atul()


// (async()=>{
//     let a=await aman()
//     console.log(a)
//     let b=await aman()
//     console.log(b)
//     let c=await aman()
//     console.log(c)
//     let d=await aman()
//     console.log(d)
// })()



// async function aman(){
//   let dd=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("30")
//     }, 2000);
//   })
//   let m= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("40")
//     }, 4000);
//   })

//   let a=await dd
//   console.log(a)
//   let v=await m
//   console.log(v)
// }
// aman()

// Destruturing 

// let arr=["aman ","vishal","suraj","ranjan","diraj","Vikash",]
// let [, , ,...rest]=arr
// console.log(a,...rest)

// let obj={
//   a:1,
//   b:2,
//   c:3
// }

// let {a,b,c}=obj
// console.log(a,c)
// let arr=[3,45,67]
// let obj1={...arr}
// console.log(obj1)


let don1=document.getElementById("don1")
let don2=document.getElementById("don2")
let don3=document.getElementById('don3')
let don4=document.getElementById("don4")

    

// function loadScript(src,callback){
//     let script=document.createElement("script")
//     script.src=src
//     callback ()
//     document.body.appendChild(script)
//     // script.onerror=function(){
//     //     console.log(src)
//     // }
//     script.onload=function(){
//         console.log(src)
//     }
// }
// a=(src)=>{
//     alert("good moring bro",src)
// }
// // loadScript("aman kushwaha is the loadscripting the number ",a)

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",a)
// ;


// let arr=["aman ","vishal","atul","suraj","mukesh","ravi ","kuldeep"]

// let [b, ,d, ,f,...rest]=arr
// console.log(b, d, f,...rest)
// let a={
//     name:"aman kushwaha",
//     langauge:"java script",
// }
// console.log(a)
// let b={
// run:()=>{
//     alert("run")
// }



// }
// a.__proto__=b
// a.run()





// async function aman(text) {
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove(text)
//         }, 3000);
//     })
    
// }

// (async()=>{
//     let text=await aman("aman kushwaha")
//     console.log(text)
//     text=await aman("atul kushwaha")
//     console.log(text)
//     text =await aman("this very good boy")
//     console.log(text)
// })()





// const display=document.getElementById("display")

// function appendvalue(input){
//     display.value +=input

// }

// function add(){
//     try{
//     display.value=eval(display.value)
//     }
//     catch(error){
//         display.value="please check value"
//     }
// }
// function c(){
//     display.value="";
// }


let aman=document.getElementById("display")
function appendvalue(input){
    aman.value+=input
}
function add(){
    try{
    aman.value=eval(aman.value);
    }
    catch(error){
        aman.value="please check value";

    }
}
function c(){
    aman.value="";
}