const input = document.getElementById('search');
const list = document.querySelectorAll('#names li');

    input.addEventListener('input', () => {
      const text = input.value.toLowerCase();
      

      list.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(text) ? '' : 'none';
      });
    });



    // Character Counter

    const text = document.getElementById('text');
    const count = document.getElementById('count');

    text.addEventListener('input', () => {
      count.textContent = text.value.length;
    });