function Posititon(x, y) {
    this.x = x;
    this.y = y;
}
function Snake() {
    this.x = Math.floor((Math.random() * columns) + 1) * squareSize;
    this.y = Math.floor((Math.random() * rows) + 1) * squareSize;
    this.squareSize = squareSize;
    this.xspead = 1 * this.squareSize;
    this.yspead = 0;
    this.total = 0;
    this.tail = [];
    this.dir = (x, y) => {
        this.xspead = x * this.squareSize;
        this.yspead = y * this.squareSize;
    }
    this.update = () => {


        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];

        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = [this.x, this.y];
        }


        this.x += this.xspead;
        this.y += this.yspead;
    }
    this.show = (ctx) => {
        ctx.fillStyle = "#eee";
        ctx.strokeStyle = "#252525";
        ctx.lineWidth = 2;
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i][0], this.tail[i][1], this.squareSize, this.squareSize);
            ctx.strokeRect(this.tail[i][0], this.tail[i][1], this.squareSize, this.squareSize);

        }
        ctx.fillRect(this.x, this.y, this.squareSize, this.squareSize);
        ctx.strokeRect(this.x, this.y, this.squareSize, this.squareSize);

    }
    //eat is an boolean function 
    this.eat = (food) => {
        if (Math.abs(this.x - food.x) < 1 && Math.abs(this.y - food.y) < 1) {
            this.total++;
            return true;
        }

        else {
            return false;
        }
    }
}
