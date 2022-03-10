const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const resize = () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
};
window.addEventListener('load' , () => {
    resize();
    
});

window.addEventListener('resize' , resize);
let snake = new Snake();
snake.show(ctx);
console.log(snake);
const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.show(ctx);
    snake.update();
}
animate();