document.addEventListener('DOMContentLoaded', function () {

  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');

  var startDate = new Date("01,  16, 2020");
  //days.innerText = Math.floor((new Date - startDate) / 86400000) + 1;
  days.innerText =2000;
  countTime();

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    
    h = Math.floor(ms / 3600000);
    h = h < 10 ? "0" + h : h;

    m = Math.floor(ms % 3600000 / 60000);
    m = m < 10 ? "0" + m : m;

    s = Math.floor(ms % 3600000 % 60000 / 1000);
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    min.innerText = m;
    second.innerText = s;
  }

  setInterval(countTime, 1000);

}, false);
