function Snake() {
    this.x = 100;
    this.y = 100;
    this.squareSize = 10;
    this.xspead = 1*this.squareSize;
    this.yspead = 0;
    this.dir = (x , y) =>{
        this.xspead = x*this.squareSize;
        this.yspead = y*this.squareSize;
    }
    this.update = () => {
        this.x += this.xspead;
        this.y += this.yspead;
    }
    this.show = (ctx) => {
        ctx.fillStyle = "#eee";
        ctx.fillRect(this.x, this.y, this.squareSize, this.squareSize);
    }
}