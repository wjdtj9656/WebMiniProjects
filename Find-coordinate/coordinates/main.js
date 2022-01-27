const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
addEventListener('resize', () => {
    console.log(target.getBoundingClientRect().right);
})
addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    
    tag.innerHTML =`(${x}px, ${y}px)`;
    if(x / maxX > 0.8 && y / maxY < 0.2){
        tag.style.transform = `translate(${x - 100}px,${y}px)`
    }
    else if(x / maxX > 0.8){
        tag.style.transform = `translate(${x - 60}px, ${y - 50}px)`;
    }
    else if(y / maxY > 0.8){
        tag.style.transform = `translate(${x}px, ${y-60}px)`;
    }
});
})