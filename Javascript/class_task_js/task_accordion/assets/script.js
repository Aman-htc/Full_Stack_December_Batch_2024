

const acc = document.querySelectorAll(".header");




// acc.forEach(el => {
//   el.addEventListener("click", function () {






//     const panel = this.nextElementSibling;
//     const icon= this.querySelector('.icon')




//     if (panel.style.display === "block" ) {
//       panel.style.display = "none";
//       icon.textContent = '+';

//     } else {
//       panel.style.display = "block";
//       icon.textContent ='-'

//     }
//   });
// });





acc.forEach(el => {
  el.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    const icon = this.querySelector('.icon');


    acc.forEach(otherEl => {
      const otherPanel = otherEl.nextElementSibling;
      const otherIcon = otherEl.querySelector('.icon');

      if (otherEl !== this) {

        otherPanel.classList.add('show')

        otherIcon.textContent = '+';

      }
    });
    panel.classList.toggle('show')
    if (icon.textContent === '+') {
      icon.textContent = '-'
    } else {
      icon.textContent = '+'
    }




  });
});







// const container = document.getElementById('container');
// const createBtn = document.getElementById('create');
// const removeBtn = document.getElementById('remove');

// createBtn.addEventListener('click', () => {
//   const box = document.createElement('div');
//   box.classList.add('box');
//   container.appendChild(box);
// });

// removeBtn.addEventListener('click', () => {
//   const lastBox = container.lastElementChild;

//   lastBox.remove();


// });



const input = document.querySelector('.inputValue');
const addBtn = document.querySelector('.btn-task');
const task = document.querySelector('.task')

addBtn.addEventListener('click', () => {

  let inpValue = input.value.trim();
  if (inpValue === '') {
    alert('enter you task')
  } else {
    let licreat = document.createElement('li')
    licreat.textContent = inpValue
    let del = document.createElement('button')
    del.textContent = 'delete'
    del.addEventListener('click', () => {
      licreat.remove()
      input.value = '';
    })
    licreat.appendChild(del);
    task.appendChild(licreat);



  }


})



const ma = document.querySelector('.name');
 const Name = document.getElementById('schoolNmae');

const mai = document.querySelector('.text');

let studentList = [['aman', 'vishal', 'suraj'], ['mukesh', 'ramesh', 'ranjan']]

ma.addEventListener('click',()=>{
  let Num=Name.value
  
 
  if(Num === 'aman'){
    mai.textContent = studentList[0].join(',')

  }else{
    alert('no found value')
  }

})

































