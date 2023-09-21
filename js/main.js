let buregerBtn = document.querySelector('.header__toggle-menu_btn');
let buregerList = document.querySelector('.header__nav');
let buregerLink = document.querySelectorAll('.header__link');
let buregerLinkBtn = document.querySelector('.header__button');
let buregerLock = document.querySelector('body');

function burger() {
    buregerList.classList.toggle('burger');
    buregerBtn.classList.toggle('burger');
    buregerLock.classList.toggle('lock');
};

function burgerLinks() {
    buregerList.classList.toggle('burger');
    buregerBtn.classList.toggle('burger');
    buregerLock.classList.toggle('lock');
}

buregerBtn.addEventListener('click', burger);
buregerLinkBtn.addEventListener('click', burgerLinks);
buregerLink.forEach(a => {
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



