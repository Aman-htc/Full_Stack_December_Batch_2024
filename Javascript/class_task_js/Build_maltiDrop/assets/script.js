
const dropdownBtns = document.querySelectorAll('.dropdown-btn');




dropdownBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    
    if (window.innerWidth <= 900) {
      const dropdown = btn.nextElementSibling;
      dropdown.classList.toggle('show')
    }
  });
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.style.display = ''; 
    });
  }
});








