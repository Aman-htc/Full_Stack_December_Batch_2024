

// let fruits=['apple','banana','moango']
// fruits.push('mango')
// fruits.pop()
// fruits.reduce((sum ,itme)=>sum + itme.length,0)
// console.log(fruits)



// fruits.splice(1,2,'orange')
// console.log(fruits)
// let index = fruits.indexOf('banana')

// console.log(fruits)
// console.log(index)
// filter()
// let state=['Bihar','up','delhi','jharkhand']

// let maan=state.filter(result => result.length <=2)
// console.log(maan)


// map()
// let fruit=['apple','banana','mango']

// let update=fruit.map(item => item.toUpperCase())
// let update=fruit.map((itme,i)=>{
//     return itme.toUpperCase();
// })
// console.log(update)

//forEach()
// let village=['arna','jhirwan','kaparpura','luhshi']

//  village.forEach(function (item) {
//     console.log(item)

    
// });


// for of
// for (const element of state) {
//     console.log(element)
    
// }


// splice
// let Name=['maan','vishal','atul','golu']
// Name.splice(2,0,'mohit','rohan')
// console.log(Name)

let number=[1,2,5,6]
// console.log(number.splice(1,3))
// console.log(number)

// number.forEach((num)=>{
//     console.log(num)

// })
number.forEach((num)=> console.log(num) )
// console.log(number1)

for (const element of number) {
    console.log(element)
    
}
number.map((num)=>{
    console.log(num)
})
 let numberadd=number.reduce( (num,itmes) => num+itmes)
 console.log(numberadd)
 let greater2=number.filter( num => num>=2)
 console.log(greater2)

 const sort=[12,8,3,4,56,78,2,42,2,23,44,55,34,22]
//  console.log(sort.sort((a,b)=>a-b))
const datasort= sort.sort((a,b)=>a-b)
console.log(datasort)
console.log(sort)




// sort
// let Name=['aman','suraj','golu',
// 'ramesh','sujjit','bishwajit'

// ]
// Name.sort()
// console.log(Name)

// nuumber sort ke liye
// let number = [1,2,3,54,5,12,34,55,56,15,21,34];
// number.sort((a, b) => a - b);
// console.log(number);



// slice

// let color=['red','pink','yellow','orange','green','blue']
// let add=color.slice(1,2)
// console.log(add)
// console.log(color)

// includes
// let fruits=['apple','mango','banana','kiwi']
// console.log(fruits.includes('mango'))
// let check=fruits.includes('mango')
// console.log(check)

// concat
// let studentList=['Aman','Vishal','Atul','Golu','karna','kuldeep']
// let sudentList2=['sudhansu','ramu','ujaw','siwan','pari','arnika']

// let allStudent= studentList.concat(sudentList2)
// console.log(allStudent)



// join

// let studentList=['Aman','Vishal','Atul','Golu','karna','kuldeep']
// console.log(studentList.join('  |   '))

// console.log(studentList)

// with

let studentList=['Aman','Vishal','Atul','Golu','karna','kuldeep']
let a=studentList.with(1,'ramu')
console.log(a)
console.log(studentList)

let fruit=[1,2,3,4,5,6,7]
let totalLength=fruit.reduce((sum ,itmes)=>sum+itmes)
console.log(totalLength)


let student=[
    {name:'aman',Marks:80},
    {name:'vishal',Marks:50},
    {name:'suraj',Marks:30}
]

// let print=student.forEach((students )=>console.log(students.Marks))
let print=student.filter((mark )=> mark.Marks >= 50)
console.log(print)
console.log(student)


(() => {
    console.log('welcome to Indixpert')

})()












    






