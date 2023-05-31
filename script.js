document.querySelector('.menu-icon').addEventListener('click', function() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('active');
})