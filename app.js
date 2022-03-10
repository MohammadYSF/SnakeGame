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
window.addEventListener('keydown' , (e) => {
    //up
    if (e.keyCode == 38) {
        console.log('hey');
        snake.dir(0,-1);
    }
    //down
    else if (e.keyCode == 40) {
        snake.dir(0,1);
    }
    //left
    else if(e.keyCode == 37){
        snake.dir(-1,0);
    }
    //right
    else if(e.keyCode == 39){
        snake.dir(1,0);
    }
});