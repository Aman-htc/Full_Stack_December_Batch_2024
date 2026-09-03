// let ma=document.querySelector('#btn')
// let vishal=document.querySelector(".box")
// ma.addEventListener('click', function (){
//     vishal.style .background="green"
// })
// event Object

// 


// const form=document.querySelector('form')
// const firstName=document.querySelector('input')
// const paragraph=document.querySelector('p')
// const button=document.querySelector('button')
// form.onsubmit=function(event){
//     if(firstName.value ===''){
//         event.preventDefault();

//         paragraph.textContent="please enter your first name"
        
//     }
// }
// const btn=document.querySelector("input")
// function changeBg(e){
//     console.log(e)
// }
// btn.addEventListener('click',changeBg)

// 
// 
// Handling event
// const aman=document.querySelector("#btn")
// const mn=document.querySelector('body')
// function changeBg(){
//    mn .style .background="black"
// }
// aman.onclick=changeBg
// const vishal=document.querySelector('#aman')
// const atul=document.querySelector('.box')
// vishal.addEventListener("click",function(){
//     atul.style.background="red"
// })


// sum(displayconsole,12,3); 
// function sum(callback,x,y){
//     let result=x+y;
//     callback(result);
// }
// function displayconsole(result){
//     console.log(result)
// }
// function displayconsole(result){
//     document.getElementById('at').textContent=result
// }



// hello(amna);

// function hello(callback){
//     console.log("hello")
//     callback();

// }


// function amna(){
//     console.log("amna")
// }
// function goodby(){
//     console.log("goodby")
// }
// let aamn=document.getElementById('btn')
// let aman=document.getElementById("aman")
// let atul=document.getElementById('atul')
// let box=document.querySelector('.box')
// let ahh=0;
// aamn.onclick=function(){
//     ahh++;
//     box.textContent=ahh;

// }
// atul.onclick=function(){
//     ahh--;
//     box.textContent=ahh
// }
// aman.onclick=function(){
//     ahh=0;
//     box.textContent=ahh
// }

// let a=34;
// let b
// let c;

// b=window.prompt("enter firs value")
// b=Number(b)

// c=a+b;
// console.log(c)
// let aman=document.getElementById('bt')
// aman.addEventListener("click",()=>{
//    b= document.getElementById("my text").value ;
//     b=Number(b)
//     c=a*b;
//     document.getElementById('myh2').textContent=c
// })

// const aman=document.getElementById('btn')
// const visahl=document.getElementById('aman')
// const atul=document.getElementById("atul")
// const box=document.getElementById('box')
// let ramesh=0;
// aman.onclick=function(){
//     ramesh++;
//     box.textContent=ramesh

// }
// visahl.onclick=function(){
//     ramesh=0
//     box.textContent=ramesh
// }
// atul.onclick=function(){
//     ramesh--;
//     box.textContent=ramesh
// }
                 // callback

// function loadScript(src,callback){
//     var script=document.createElement("script")
//     script.src=src;
//     script.onload=function(){
//         console.log("Load with src:" +src)
//         callback(src);
//     }
//     script.onerror=function(){
//         console.log("Error Loading sript with:"+src)
//     }
//     document.body.appendChild(script)

// }
// function hello(src){
//     alert("hellow world"+src)

// }
// function morning(src){
//     alert("morning world"+src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",morning)
  


//  let a=fetch("https://goweather.herokuapp.com/weather/Ny")
//  a.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.text()
    

//  })
//  a.then((value2)=>{
//     console.log(value2)
//  })
 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

{}
fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify({
     title: 'foo',
     body: 'bar',
     userId: 1,
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   },
 })
   .then((response) => response.json())
   .then((json) => console.log(json));
 