// What is async await
// There is a specials systax to work with in promises in javascript

// EX

// async function getdata() {
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove(309)
//         }, 2000);
//     })
    
// }
// async function main() {
//     let a=await getdata()
//     console.log(a)
    
// }

// any ex
// async function getdata(text) {
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove(text)
//         }, 3000);
//     })
    
// }
// async function amain() {
//     let text=await getdata("Harshit kushwaha")
//     console.log(text)
//     text =await getdata("aman kushwaha ")
//     console.log(text)
//     text=await getdata("Atul Kushwaha")
//     console.log(text)
    
// }
// amain()

// Weather Ex

// async function getmain() {
//     let BiharWeather=new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove("40Dgree")
//         }, 3000);
//     })
//     let UpWeather=new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove("49Dgree")
//         }, 5000);
//     })
//     let DelhiWeather=new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove("43Dgree")
//         }, 6000);
//     })
//     console.log("Waiting for BiharWeather Today.....")
//     let biharweather=await BiharWeather
//     console.log("BiharWeather is today",biharweather)
//     console.log("Please waiting for Upweather  today.....")

//     let u=await UpWeather
//     console.log("upweather is today",u)
//     console.log("Delhi Weather is today please waiting....")
//     let delhiweather=await DelhiWeather

//     console.log("delhi weather is today",delhiweather)

// }
// getmain()


// parestic


// async function aman(text) {
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove(text)
//         }, 3000);
//     })
// }
// async function v() {
//     let text=await aman("aman kushwahah ")
//     console.log(text)
//     text=await aman("atul kushwaha")
//     console.log(text)
//     text=await aman("aman kushhfkbn")
//     console.log(text)
    
// }
// v()
// (async()=>{
//     let text=await aman("aman ")
//     console.log(text)
//     text =await aman("anbn ")
//     console.log(text)
// })()