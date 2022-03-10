function Snake() {
    this.x = 100;
    this.y = 100;
    this.xspead = 1;
    this.yspead = 0;
    this.squareSize = 10;
    this.dir = (x , y) =>{
        this.xspead += x;
        this.yspead += y;
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