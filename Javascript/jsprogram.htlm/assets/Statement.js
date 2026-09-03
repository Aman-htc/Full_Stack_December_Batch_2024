// What is Statement
// Sometime you might have to execute a block of code based off some condition
// 

//  Simple Ex
// let amanage=20
// if(amanage>18){
//         console.log("You are drive a car")
// }
// else{
//         console.log("You are not drive a car")
// }

// And Advaced ex

// const amna=document.getElementById("mysubmit")
// const vishal=document.getElementById("mytext")
// const p=document.getElementById("p")
// let age;
// amna.onclick=function(){
//     age=vishal.value
//     age=Number(age)
//     if(age>18){
//         p.textContent=("you are drive a car")
//         // alert("your are drive a car")
//     }
//     else{
//         p.textContent=("your not drive a car")
//         // alert("your are not drive a car")
//     }
// }

// .Checked=Property that determines the checked state of an 
//            HTML checked or radio button Element

// ex

// const mycheckBox=document.getElementById("mycheckBox")
// const  visaBtn=document.getElementById("visaBtn")
// const MasterCardBtn=document.getElementById("MasterCardBtn")
// const paypalBtn=document.getElementById("paypalBtn")
// const mysubmit=document.getElementById("mysubmit")
// const subreslut=document.getElementById("subreslut")
// const paymentresult=document.getElementById("paymentresult")

// mysubmit.onclick=function(){
//     if( mycheckBox.checked){
//         subreslut.textContent="You are a subcribed !"
        
//     }
//     else{
//         subreslut.textContent="You are NOT a subcribed !"
//     }
//     if(visaBtn.checked){
//         paymentresult.textContent="You are paying with visa !"
    
//     if( MasterCardBtn.checked){
//         paymentresult.textContent="You are paying with mastercard !"
//     }
//     else if(paypalBtn.checked){

//         paymentresult.textContent="You are paying with paypal!"
//     }
//     else{
//         paymentresult.textContent="you must select a payment type"
//     }
//     }
// }
// alert("aman")


// if(confirm("are you sure")){
//     alert("user clicked ok")
// }
// else{
//     alert("use clicked cancel")
// }

            //    TERRARY OPERATOR

    // Terrary Operator = a shortcut to if{} and else{} statements
                    //    helps to asigan a variable based on a condition 
                    //    condition ? code Iftrue: codeIfFalse;

// let age=30;
// let aman=age>18?"you are a drive": "you are not drive a car"
// console.log(aman)
// let time=9;
// let greeting =time<12?"Good morning":"good afternoon"
// console.log(greeting)


        // SWITCH IN JAVASCRIPT

        // switch = can be an efficient replacement to else if staements 

        // let day=3;
        // switch(day){
        //     case 1:
        //         console.log("it is Monday")
        //         break;
        //         case 2:
        //             console.log("it is tuesday")
        //             break;
        //             case 3:
        //                 console.log("it is wednesday ")
        //                 break;
        //                 case 4:
        //                     console.log("it is thursday")
        //                      break;
        //                      case 5:
        //                         console.log("it is friday")
        //                         break;
        //                         case 6:
        //                             console.log("it is saturday")
        //                             break;
        //                             case 7:
        //                                 console.log("it is sunday")
        //                                 break;
        //                                 default:
        //                                     console.log('${day}is not a day')
        // // }
        

        