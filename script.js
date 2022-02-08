const burger = document.getElementById('burger');
const headerUl = document.querySelector('.header-ul');

burger.addEventListener('click', () => {
    headerUl.classList.toggle("show");
});