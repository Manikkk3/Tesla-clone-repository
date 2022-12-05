const menuBtn = document.getElementById("menu-btn");

const closeBtn = document.getElementById("close-btn");

const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener('click', () =>  {
    menuBtn.classList.add('hidden');
    
    mobileMenu.classList.toggle('hidden');

})

closeBtn.addEventListener('click', () => {

    mobileMenu.classList.toggle('hidden');
    menuBtn.classList.remove('hidden');

})