const btnTheme = document.querySelector('#toogle-theme');
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#closeBtn");
const contactUs = document.querySelector("#contact");
let clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchemove');

btnTheme.addEventListener(clickEvent, function() {
    document.body.classList.toggle('dark-theme'); 
});

closeBtn.addEventListener(clickEvent, function() {
    modal.style.display = 'none';
});

contactUs.addEventListener(clickEvent, function() {
    modal.style.display = 'block';
});
