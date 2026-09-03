


const images = [
      "https://picsum.photos/id/1011/300/200",
      "https://picsum.photos/id/1025/300/200",
      "https://picsum.photos/id/1035/300/200",
      "https://picsum.photos/id/1043/300/200"
    ];
    let index = 0;
    const img = document.getElementById('slider');

    document.getElementById('next').addEventListener('click', () => {
      index = (index + 1) % images.length;
      img.src = images[index];
    });

    document.getElementById('prev').addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      img.src = images[index];
    });