const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const frames_per_second = 10;
const squareSize = 10;
const canvas_width = window.innerWidth;
const canvas_height = window.innerHeight;
console.log(canvas_width);
console.log(canvas_height);
let food = {
    x: 0,
    y: 0
};
const pickLocation = () => {
    let columns = Math.floor(canvas_width / squareSize);
    let rows = Math.floor(canvas_height / squareSize);
    let random_row = Math.floor((Math.random() * rows) + 1);
    let random_column = Math.floor((Math.random() * columns) + 1);
    food.y = random_row * squareSize;
    food.x = random_column * squareSize;
    console.log('number of columns : ' , columns);
    console.log('number of rows: ' , rows);


}
const resize = () => {
    canvas.width = canvas_width;
    canvas.height = canvas_height;

};
window.addEventListener('load', () => {
    resize();

});

window.addEventListener('resize', resize);
let snake = new Snake();

pickLocation();

const animate = () => {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(food.x, food.y, squareSize, squareSize);
    snake.show(ctx);
    snake.update();
    setTimeout(() => {
        requestAnimationFrame(animate);

    }, 1000 / frames_per_second);

}
animate();
window.addEventListener('keydown', (e) => {
   
    //up
    if (e.keyCode == 38) {
        console.log('hey');
        snake.dir(0, -1);
        e.preventDefault();
    }
    //down
    else if (e.keyCode == 40) {
        snake.dir(0, 1);
        e.preventDefault();

    }
    //left
    else if (e.keyCode == 37) {
        snake.dir(-1, 0);
        e.preventDefault();

    }
    //right
    else if (e.keyCode == 39) {
        snake.dir(1, 0);
        e.preventDefault();
    
    }
});

