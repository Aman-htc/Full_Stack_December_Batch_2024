

const item = document.getElementById('dragItem');
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
      box.addEventListener('dragover', e => e.preventDefault());

      box.addEventListener('drop', e => {
        box.appendChild(item);
      });
    })


  let str = 'hello'; 

  let reversed = str.split('').reverse().join('');
  console.log(reversed)

let obj = {name: 'Rachit'}; 
let str1 = JSON.stringify(obj);
console.log(str1) 


// count program

const count=document.getElementById('count')
const In =document.querySelector('.increase')
const re=document.querySelector('.reset')
const  de=document.querySelector('.decrease')

let counts=0
In.addEventListener('click',()=>{
  counts ++;
  count.textContent=counts

})
re.addEventListener('click',()=>{
  counts =0;
  count.textContent=counts

})
de.addEventListener('click',()=>{
  counts --;
  count.textContent=counts

})