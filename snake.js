function Snake() {
    this.x = 100;
    this.y = 100;
    this.squareSize = squareSize;
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
    //eat is an boolean function 
    this.eat = (food) => {
        return Math.abs(this.x - food.x) <1 && Math.abs(this.y - food.y) < 1;
    }
}