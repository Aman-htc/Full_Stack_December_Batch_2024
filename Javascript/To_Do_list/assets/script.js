


const taskInput = document.getElementById('task');
const list = document.getElementById('list');
const add = document.getElementById('add');

add.addEventListener('click', () => {
  const value = taskInput.value.trim();
  if (value === "") {
    alert("Enter a task");

  } else {
    const now = new Date();
    let date = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear();
    let current = `${date}:${month}:${year}`


    const li = document.createElement('li');
    li.textContent = value;
    
    let cre = document.createElement('p')
    cre.textContent = current

    let del = document.createElement('button');
    del.textContent = "Delete";
    del.classList.add('btn')
    
    del.addEventListener('click', () => li.remove());
     li.appendChild(cre)

    li.appendChild(del);
   
    list.appendChild(li);

    taskInput.value = "";
  }


});




// time

// function showTime() {
//   const now = new Date();


//   let time = now.toLocaleTimeString();
//   document.getElementById('clock').textContent = time;
// }

// setInterval(showTime, 1000);
// showTime();