const input=document.getElementById("display")

function appendvalue(value){
    input.value+=value
}
function add(){
    try{
    input.value=eval(input.value)
    }
    catch(error){
        input. value="please checked value"
        
    }
}
function c(){
    input.value="";
}





// counter program


// const btn1=document.getElementById("btn1")
// const btn2=document.getElementById("btn2")
// const btn3=document.getElementById("btn3")
// const pbtn=document.getElementById("p")
// let p=0;
// // btn1.onclick=function(){
// //     p ++;
// //     pbtn.textContent=p

// // }
// btn2.onclick=function(){
//     p=0
//     pbtn.textContent=p
// }
// btn3.onclick=function(){
//     p--;
//     pbtn.textContent=p
// }

