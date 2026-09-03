
// for loop



// for(let a=0;a<=100;a++){
//     console.log(a)
// }



// let sum=0
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log("sum:",sum)



// let a=["aman","vishal","suraj","aman","a"]
// for(let i=0;i<=a.length;i++){
//     console.log(a[i])
// }


// for(let i=0;i<=10;i++){
//     for(let j=1;j<10;j++){
//         console.log(`${i}*${j}=${i*j}`)
//     }

// }


// for in loop


// const student= {
//     name:"aman",
//     age:20,
//     course:"web Designing",
//     roll:23,

    

// }
// for(let key in student){
//     console.log(`${key}:${student[key]}`)
    
// }


// for of loop

// const fruite=["aman","ishal","amsnbn","ashb"]
// for(let fruit of fruite){
//     console.log(fruit)
// }

// while loop

// let i=10;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// let num=1;
// let sum=0;
// while(num<=10){
//     sum+=num;
//     num++;
// }
// console.log(num)



// let password= " ";

// while(password==="1233"){
//     password=prompt("Enter your password")

// }
// alert("sucssfully")


// do while


// do{
//     if(b == 10){
//         b++;
//         continue;
//     }
//     console.log(n * b);
//     b++;

// }while(b <= 10)





// let count=1;
// do{
//     console.log(count)
//     count++;
// }
// while(count<=5);

/*let password;
do{
    password=prompt("Enter your password(must bee least 3 charcteers):");

}while(password.length < 3)

// alert("password accepted!")
document.body.style.backgroundColor = "#ff0000";*/














let furit = prompt('Enter your color code 1 2 3  choice any option');
switch(furit){
    case '1':
        document.body.style.backgroundColor = 'red';
        break;

    case '2':
        document.body.style.backgroundColor = 'yellow';
        break;

    default:
        document.body.style.backgroundColor = 'black';
}
