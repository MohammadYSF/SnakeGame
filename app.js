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
document.addEventListener('keypress' , (e) => {
    if (e.key == "ArrowUp") {
        snake.dir(0,1);
    }
    else if (e.key == "ArrowDown") {
        snake.dir(0,-1);
    }
    else if(e.key == "ArrowLeft"){
        snake.dir(-1,0);
    }
    else if(e.Key == "ArrowRight"){
        snake.dir(1,0);
    }
});