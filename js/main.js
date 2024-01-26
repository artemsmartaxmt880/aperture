const burgerBtn = document.querySelector('.header__toggle-menu_btn');
const burgerList = document.querySelector('.header__nav');
const burgerLink = document.querySelectorAll('.header__link');
const burgerLinkBtn = document.querySelector('.header__button');
const burgerLock = document.querySelector('body');

function burger() {
    burgerList.classList.toggle('burger');
    burgerBtn.classList.toggle('burger');
    burgerLock.classList.toggle('lock');
};

function burgerLinks() {
    burgerList.classList.remove('burger');
    burgerBtn.classList.remove('burger');
    burgerLock.classList.remove('lock');
}

burgerBtn.addEventListener('click', burger);
burgerLinkBtn.addEventListener('click', burgerLinks);
burgerLink.forEach(a => {
    a.addEventListener('click', burgerLinks)
})
// =================================================================
const img = document.querySelector(".gear__cover-image");
let imgList = ["img/gear1.jpg", "img/gear2.jpg", "img/gear3.jpg"];
let i = 0;

function nextImg() {
    if (++i == imgList.length) i = 0;
    img.src = imgList[i];
}
setInterval(nextImg, 5000);
