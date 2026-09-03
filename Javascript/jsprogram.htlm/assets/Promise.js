// What is promise
// The soluation to the callback hell is promise ia a promise of code execution
// the code either executed or fail in both case in to notified

// What is consumer
// The consumer code of recive the final result of promise  through then & catch

// Ex Then reslove ke liye use

// let a=new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         reslove(23)
//         console.log('this is a value')
//     }, 3000);
// })
// a.then((value)=>{
//     console.log(value)
// })
// // ex catch error ke liye use

// let b = new Promise((reslove,reject)=>{
//     setTimeout(() => {
//        reject(34) 
//     }, 4000);
// })
// b.catch((error)=>{
//     console.log(error)
// })
// 


// USE FOR PROMISE CHANING

// aman1=()=>{
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             console.log("data1")
//             reslove("sucessfuly")
//         }, 3000);
//     })
// }
// aman2=()=>{
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             console.log("data2")
//             reslove("sucessfuly")
//         }, 3000);
//     })
// }
// aman3=()=>{
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataid)
//             reslove("sucessfuly")
//         }, 3000);
//     })
// }
// console.log("feacing data1....")
// aman1().then((res)=>{
//     console.log(res);
//     console.log("feacing data2.....")
//     aman2().then((res)=>{
//         console.log(res);
//         console.log("feacing data3...")
//         aman3().then((res)=>{
//             console.log(res);
//         })
//     })
// })

// ek or ex so soutform
// getdata=(dataid)=>{
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataid)
//             reslove("suesses fully")
//         }, 2000);
//     })
// }
// getdata(11).then((res)=>{
// console.log(res);

//     getdata(23).then((res)=>{
//         console.log(res);
//         getdata(10).then((res)=>{
//             console.log(res);
//         })
//     })
// })

// actually promise chaining ise bolate hai
// getdata(1)
// .then((res)=>{
//    return getdata(2);
// })
// .then((res)=>{
//    return getdata(3);
// })
// .then((res)=>{
//     console.log(res);
// })






// let prom=new Promise((reslove,reject)=>{
//     alert("hellow")
//     setTimeout(() => {
//         reslove(1)
//     }, 3000);
// })
// prom.then(()=>{
//     console.log("Aaman kuswaha")
// })
// prom.then(()=>{
//     console.log("Vishal kushwaha")
// })

// Promise API
// There are 6 static methodes of promise class


// let prom=new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         console.log("I am ready")
//         reslove(23)
//     }, 2000);
// });
// let prom2=new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         console.log("reject the value ")
//         reject(29)
//     },2000);
// })
//1, Promise.all()
// let p=Promise.all([prom,prom2])
// p.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

// 2, Promise.allSettled()
// let p=Promise.allSettled([prom,prom2])
// p.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })
// 3,Promise.race()
// let p=Promise.race([prom,prom2])
// p.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

// 4,Promise.any()
// let p=Promise.any([prom,prom2])
// p.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

// 5,Promise.resolve()


// function aman(datid,number){
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             console.log(datid,number);
//             reslove("succesfully")
//         }, 4000);
//     })

// }
// aman("aman kushwahah" ,12).then((res)=>{
// return aman("vishal kushwahah",23);
// }).then((res)=>{
//     return aman("atul kushwaha is best man",34)
// })
// .then((res)=>{
//     console.log(res)
// })

// let promise = new Promise((resolve, reject) => {
//     let success=false
//     if(success){
//         resolve('data is succesfully')
//     }else{
//         reject('data is not succesfully')
//     }
// })

// promise.then((res)=>{
//     console.log(res)
// }).catch((eror)=>{
//     console.log(eror)
// })




console.log('start')
setTimeout(() => {
    console.log('aman kushwaha')

}, 0);

    Promise.resolve().then((res) => {
        console.log('promise')
    })

// }, 0);
console.log('end')

Promise.resolve().then((res) => {
    console.log('amanamanam')
})

//  getdata= async() => {
//     const data = await fetch('https://dummyjson.com/test')
//     let data2 = await data.json() 
//     console.log(data2)


// }
// getdata()

const getdata = fetch('https://dummyjson.com/test')
getdata.then((res) => {
    return res.json()
}).then((data) => {
    console.log(data)
})



let promise = new Promise((resolve, reject) => {
   
        const data = true
        if (data) {
            resolve('data succesfully')

        } else {
            reject('data not succesfully')
        }

  



})


data3 = async()=>{
    let data =await promise
    console.log(data)
    



}
data3 ()



const Outerfuncation =()=>{
    let a=20;
    console.log(a)
    innerfuncation=()=>{
        a++
        console.log(a)

    }

}

Outerfuncation()
innerfuncation()
// inner()
// inner()


function Name(name='aman kushwaha',age=21) {
    console.log(`my name is ${name} and my age ${age}`)
    
}


Name()

let a=[12,12,34,56,78];
let b=[12,12,34,56,78];
const k = a.filter(num => num > 20)
console.log(k)
console.log(a)
const dataa=a.map((items)=> items.toFixed())
console.log(dataa)


if(a==b){
    console.log('ab and same hai')

}
else{
    console.log('aand b same nahi hai')
}
function data(){

}

const n=a.slice(0,4)
console.log(n)
console.log(a)
const m=a.splice(1,1)
console.log(m)
console.log(a)

