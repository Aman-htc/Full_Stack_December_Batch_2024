// let age=18;
// let mode="light"
// if(mode==="dark"){
//     color="black"
// }
// if(mode==="light"){
//     color="white"
// }
// console.log(color)


async function mani(){
let biharWeather= new Promise((resolve,rejct)=>{
    setTimeout(() => {
        resolve("50dg")
    }, 3000);
})
let upWeather=new Promise((resolve,rejct)=>{
    setTimeout(() => {
      resolve("30dg")  
    }, 1000);
})
console.log("BiharWeather please wating ")
let dat=await biharWeather
console.log("biharWeather tody is "+dat)

console.log("UpWeather is plaese waiting")
let data=await upWeather
console.log("upWeather today is "+data)




}
mani()