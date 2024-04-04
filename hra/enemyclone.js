class enemyclone{
    constructor(pos) {
        this.pos = pos;
    }

    update() {
        //@ts-ignore
        var enemyDir = p5.Vector.sub(player, this.pos);
        enemyDir.setMag(0.5);
        this.pos.add(enemyDir);
    }

    draw() {
        fill(0,200,0);
        circle(this.pos.x, this.pos.y, enemySize);
    }
}