const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML =`(${x}px, ${y}px)`;
    if(x / maxX > 0.8){
        tag.style.left = `${x-100}px`;
        tag.style.top = `${y-60}px`;
    }
    if(y / maxY > 0.8){
        tag.style.top = `${y-60}px`;
    }
});