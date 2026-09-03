// number


// let a=23.98776

// console.log(a.toFixed(4))

// let number=prompt('enter your number')
// console.log(parseFloat(number).toFixed(4))
// console.log(isNaN(number))



// date
let a = new Date()
// console.log(a)
// let newdate=new Date('2023-3-25')
// console.log(newdate)

// year

// let month=['jan','Feb','Mar','Apr','May','Jun','Junly','Aug','sep','Oct','Num','Dec']
let Day=['sun','mon','thu','wed','thri','fri','sat']
// console.log(`year: ${a.getFullYear()}`)
// console.log(`month: ${month[a.getMonth()]}`)
console.log(`Day: ${Day[a.getDay()]}`)

// console.log(`date: ${a.getDate()}`)

// console.log(`Time: ${a.getHours()} : ${a.getMinutes()}: ${a.getSeconds()}`)
// console.log(`Miliseconds ${a.getTime()}`)


// set time
// a.setDate(30)
// a.setMonth(0)
console.log(`date: ${a.getDate()}`)
console.log(`month: ${month[a.getMonth()]}`)
console.log(`Time: ${a.getUTCHours()} : ${a.getUTCMinutes()}: ${a.getUTCSeconds()}`)

console.log(a)
console.log(a.toString())
console.log(a.toLocaleString())
