const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const frames_per_second = 30;
const resize = () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
};
window.addEventListener('load' , () => {
    resize();
    
});

window.addEventListener('resize' , resize);
let snake = new Snake();

console.log(snake);
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.show(ctx);
        snake.update();
    setTimeout(() => {
        requestAnimationFrame(animate);
        
    }, 1000/frames_per_second);
  
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