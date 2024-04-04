class Projectiles{
    constructor(pos) {
        this.pos = pos.copy();
    
        var mouse = createVector(mouseX,mouseY);
        // @ts-ignore
        this.dir = p5.Vector.sub(mouse,this.pos);
        this.dir.setMag(5)
    }

    update(){
        this.pos.add(this.dir);
    }
    draw(){
        fill(150,75,0)
        circle(this.pos.x,this.pos.y,5);
    }


}