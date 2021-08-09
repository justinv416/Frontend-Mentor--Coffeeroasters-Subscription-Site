const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list-mobile');
navList.classList.add('hide')
hamburger.addEventListener('click', () => {
    navList.classList.toggle('hide')
})