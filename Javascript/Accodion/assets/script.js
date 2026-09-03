

const acc = document.querySelectorAll(".accordion");

  acc.forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });





let age=15;
let re= age >= 18 ? age >=60 ? 'siniar chitizen': 'aman':'atul';
console.log(re)



let number=5;

for(let i=1; i<=10;i++){
  console.log

}

let n=1;
// while(n<=10){
//   console.log(number*n);
//   n++
// }

do{
  if(n===5){
    n++;
    continue
  }
  console.log(number*n);
  n++
}while(n <=10);


for(let i=1; i <=5; i++){
  // console.log(''.repeat(5-i))
  console.log("*".repeat(i))
}


for (let i = 1; i <= 5; i++) {
  let space = " ".repeat(5 - i);  
  let star = "*".repeat(i ); 
  console.log(space + star );
}


for (let i = 1; i <= 5; i++) {
  let space = " ".repeat(5 - i);  
  let star = "*".repeat(2*i-1 ); 
  console.log(space + star );


}

console.log('amana kushwaha'.replace('aman','vishal'))


let numbers=[1,10,2,3,7,8,9,12,54,56,23,14,23]
let revers=numbers.sort((a,b)=> a- b)
console.log(revers)







let Name=['aman','atul','vishal','golu']

Name.forEach((m,i)=>{

  Name[i].length >=2;
  
})

console.log(Name)





