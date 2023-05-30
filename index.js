
const typed = new Typed('.multiple-text', {
    strings: ['1 Get One Free', '2 Get Three Free', '5 Get 5000rs off'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const typed1 = new Typed('.multiple1-text', {
    strings: ['Ethinic Wear', 'New Brands', 'Kids Wear'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if ('bar') {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    }

    )
}
if('close'){
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })
}