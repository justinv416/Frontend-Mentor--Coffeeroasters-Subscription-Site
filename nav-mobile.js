const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list-mobile');
hamburger.addEventListener('click', () => {
    navList.classList.toggle('hide')
})