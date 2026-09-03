

async function getProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      return res.json();
    }

    let products = [];
    getProducts().then(data => products = data);

    document.getElementById('search').addEventListener('input', e => {
      const text = e.target.value.toLowerCase();
      const filtered = products.filter(p => p.title.toLowerCase().includes(text));

      const result = document.getElementById('result');
      result.innerHTML = filtered.map(p => `<li>${p.title}</li>`);
    });



    
    
    
    
    // process bar

    const bar = document.getElementById('bar');
    const btn = document.getElementById('start');

    btn.addEventListener('click', () => {
      let width = 0;
      const progress = setInterval(() => {
        if (width >= 100) {
          clearInterval(progress);
        } else {
          width += 5;
          bar.style.width = width + "%";
        }
      }, 200);
    });