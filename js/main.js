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
let image = document.querySelector(".gear__cover-image");
let images = ["img/gear1.jpg", "img/gear2.jpg", "img/gear3.jpg"], i = 0;
let currentPos = 0;

function nextImage() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}
setInterval(nextImage, 5000);

