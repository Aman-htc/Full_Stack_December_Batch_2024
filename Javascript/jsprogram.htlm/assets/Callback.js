// loadScript
// Ex
// function loadScript(src){
//     let script=document.createElement("script")
//     script.src=src
//     script.onload=function(){
//         console.log(src)
//     }
//     document.body.appendChild(script)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

// // Eshi me callback Ex

// function loadScript(src,callback){
//     let script=document.createElement("script")
//     script.src=src
//     script.onload=function(){
//         console.log(src+"suessful loading ")
//         callback()
//     }
//     document.body.appendChild(script)
// }
// aman=()=>{
//     alert("good morning bro")
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",aman)


// Callback error handling function

// function loadScript(src){
//     let script=document.createElement("script")
//     script.src=src

//     script.onerror=function(){
//         console.log(src)
//     }
//     document.body.appendChild(script)

// }

// loadScript("aman kushwaha is the best man")


// pyramid of doom

function aman(dataid){
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            console.log(dataid)
            reslove("success")
            // if(nextdataid){
            //     nextdataid()
            // }
        }, 2000);

    })
}

// callback hell ex use

// aman(1,()=>{
//     aman(2,()=>{
//         aman(3,()=>{
//             console.log("success")
//         })
        
        
//     })
// })

// promise chaining ex use
// console.log("feacing data1....")
// aman("aman kushwaha").then((res)=>{
//     console.log("feacing data2....")
//     return aman("vishal kushwaha");
// }).then((res)=>{
//     console.log("feacing data3...")
//     return aman("atul kushawhaa")
    
// }).then((res)=>{
//     console.log("all Data is success")
// })



//  and async await
// ex use
// })
//  async function a(params) {
//     await aman(1);
//     await aman(2)
// await aman(3)

//     await aman( "sucess")
//  }
//  a()



// Any callback function Ex

// function vishalfrom(callback){
// let obj={
//     Name:"vishal ",
//     Lastname:"Kushwaha",
//     Fthername:"Ramashay prasad",
//     Mothername:"Lilawati Dev",
//     Address:"Arna bazar ,post: Jhirwan, police station: Uchakagaown,Distric:Gopalganj(Pin:841440,State:Bihar)"


// }
// console.log(obj)
// callback ();

// }
// v=()=>{
//     alert("Vishal is good from submitted");
// }
// vishalfrom(v)


// aman=function(callback){
//     let a={
//         name:"aman kushwaha",
//         age:"12",
//         Villagename:"arna",
//     }
//     console.log(a)
//     callback();
// }
// b=()=>{
//     alert("aman adress")
// }
// aman(b)



