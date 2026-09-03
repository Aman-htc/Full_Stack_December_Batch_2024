// const aman =(text,data)=>{
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             console.log(text,data)
//             reslove("sucessfully")
//             reject("error data not scessfully")
            
//         }, 3000);
//     })

// }
// aman("aman kushwha id number",45).then((res)=>{
//     return aman("atul kushwaha id number",49)
// }).then((res)=>{
//     return aman("vishal kumar id number",12)
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)

// })
const a=document.getElementById("await")
const text=document.getElementById("text")

const vishal =(text,date)=>{
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            console.log(text,date)
            reslove("weather is sucessfully")
            
        }, 4000);
    })
}

async function atul() {
    let b=("bihar weather is waiting.....")
    console.log(b)
    let text=await vishal("Bihar weather is ","45 digree")
    console.log('upweather is waiting.....')
    text=await vishal("Upweatther is today is 87 ","45dgree")
    
    

    
}
atul()