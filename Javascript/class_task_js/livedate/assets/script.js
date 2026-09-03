let d = ['sunday','monday','tuesday','wednesday','thrusday','friday','satuardy'];
let is24hour = false;

function showTime() {
  const now = new Date();
  let hour=now.getHours()
  let minutes=now.getMinutes()
  let seconds=now.getSeconds()

  

  let da = d[now.getDay()];
  let date = now.getDate();
  let year = now.getFullYear();
  let mon = now.getMonth() + 1;
  let current = `${date}/${mon}/${year}`;

  // document.getElementById('clock').textContent = t;
  document.querySelector('.day').textContent = da;
  document.querySelector('.date').textContent = current;
  document.querySelector('.hour').textContent = hour;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
  
}

// document.querySelector('.formate-24h').addEventListener('click', () => {
  // is24hour = !is24hour;
  // document.querySelector('.formate-24h').textContent =
  //   is24hour ? 'Switch to 12 hour' : 'Switch to 24 hour';
  // showTime();
// });

setInterval(showTime, 1000);
showTime();

