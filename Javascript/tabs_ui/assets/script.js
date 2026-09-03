




// const hBtn=document.querySelector('.home-btn')
// const abtn=document.querySelector('.about-btn')
// const cBtn=document.querySelector('.con-btn')

// abtn.addEventListener('click',()=>{
//     document.querySelector('.active').style.display='none'
//     document.querySelector('.tab1').style.display='block'
//     document.querySelector('.tab').style.display='none'
// })
// cBtn.addEventListener('click',()=>{
//     document.querySelector('.active').style.display='none'
//     document.querySelector('.tab').style.display='block'
//     document.querySelector('.tab1').style.display='none'
// })
// hBtn.addEventListener('click',()=>{
//     document.querySelector('.active').style.display='block'
//     document.querySelector('.tab').style.display='none'
//     document.querySelector('.tab1').style.display='none'
// })






const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const value = tab.dataset.tab;
    content.textContent = `You selected: ${value}`;
  });
});

