const btnTheme = document.querySelector('#toogle-theme');
const clickEvent = ('click' || 'touchstart');

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme'); 
});
