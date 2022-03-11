const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const frames_per_second = 10;
const squareSize = 20;
const canvas_width = window.innerWidth - 900;
const canvas_height = window.innerHeight - 200;
let last_key_code_pressed = 39;
let food = {
    x: 0,
    y: 0
};
let columns = Math.floor((canvas_width - squareSize) / squareSize);
let rows = Math.floor((canvas_height - squareSize) / squareSize);
const getRandomLocation = () => {
    let random_row = Math.floor((Math.random() * rows) + 1);
    let random_column = Math.floor((Math.random() * columns) + 1);
    let pos = new Position(random_column * squareSize, random_row * squareSize);
    return pos;
}

const pickLocation = () => {
    let random_row = Math.floor((Math.random() * rows) + 1);
    let random_column = Math.floor((Math.random() * columns) + 1);
    food.x = getRandomLocation().x;
    food.y = getRandomLocation().y;

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
    if (snake.eat(food)) {
        pickLocation();
    }
    snake.show(ctx);
    snake.death();
    snake.update();
    setTimeout(() => {
        requestAnimationFrame(animate);

    }, 1000 / frames_per_second);

}
animate();
window.addEventListener('keydown', (e) => {

    //up
    if (e.keyCode == 38) {
        if (last_key_code_pressed != 40) {
            snake.dir(0, -1);
            e.preventDefault();
            last_key_code_pressed = 38;
        }
    }
    //down
    else if (e.keyCode == 40) {
        if (last_key_code_pressed != 38) {
            snake.dir(0, 1);
            e.preventDefault();
            last_key_code_pressed = 40;
        }

    }
    //left
    else if (e.keyCode == 37) {
        if (last_key_code_pressed != 39) {
            snake.dir(-1, 0);
            e.preventDefault();
            last_key_code_pressed = 37;
        }

    }
    //right
    else if (e.keyCode == 39) {
        if (last_key_code_pressed != 37) {
            snake.dir(1, 0);
            e.preventDefault();
            last_key_code_pressed = 39;
        }


    }
});

