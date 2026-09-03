

const modal_box=document.getElementById('main-box')
const btnCancel=document.querySelector('.cancel-btn')
const openBtn=document.querySelector('.opne-box')


openBtn.addEventListener('click',()=>{
    modal_box.style.display='flex';
    openBtn.style.display='none';
})

btnCancel.addEventListener('click',()=>{
    modal_box.style.display='none';
    openBtn.style.display='flex';
})






// function changeTheme(color) {
//       document.body.style.background = color;
//       document.body.style.color = 'white';
//     }


document.querySelector('.red').addEventListener('click',()=>{
    document.body.style.background='red'

});

document.querySelector('.green').addEventListener('click',()=>{
    document.body.style.background='green'

});

document.querySelector('.blue').addEventListener('click',()=>{
    document.body.style.background='blue'

})
document.querySelector('.body').addEventListener('click',()=>{
    document.body.style.background=''

})