let burgerBtn = document.querySelector('.header__toggle-menu_btn');
let burgerList = document.querySelector('.header__nav');
let burgerLink = document.querySelectorAll('.header__link');
let burgerLinkBtn = document.querySelector('.header__button');
let burgerLock = document.querySelector('body');

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
let img = document.querySelector(".gear__cover-image");
let imgList = ["img/gear1.jpg", "img/gear2.jpg", "img/gear3.jpg"];
let i = 0;

function nextImg() {
    if (++i == imgList.length) i = 0;
    img.src = imgList[i];
}
setInterval(nextImg, 5000);




