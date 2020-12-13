// GET ELEMENTS 
const container = document.querySelector('.container')
const card = document.querySelector('.card')
const shoe = document.querySelector('.shoe')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase')


// EVEN LISTERNERS
container.addEventListener('mousemove', e => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})

container.addEventListener('mouseenter', e => {
    shoe.style.transform = ` translateZ(40px) rotate(-45deg)`;
    title.style.transform = 'translateZ(30px)';
    description.style.transform = 'translateZ(30px)';
    sizes.style.transform = 'translateZ(20px)';
    purchase.style.transform = 'translateZ(20px)';

    card.style.transition = 'none'

})

container.addEventListener('mouseleave', e => {
    card.style.transition = 'transform .5s ease-in-out'

    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    shoe.style.transform = ` translateZ(0) rotate(0)`
    title.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
})