let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.querySelector('.btn');
let mountains_front = document.getElementById('mountains_front');
let loup = document.querySelector('.loup');
let header = document.querySelector('.header');



window.addEventListener('scroll', function(){
  let value = window.scrollY;
  loup.style.left = value * 2 + 'px';
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top= value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  text.textContent = "Let's Explore";
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5+ 'px';
});