

console.log('stara')
setTimeout(()=>{
    console.log('aman kushwaha')

},0)

let promies=new Promise((resolve, reject) => {
    resolve('done')
})
promies.then((value)=>{
    console.log(value)
})

console.log('end')