class Brute{
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
        fill(0,200,50);
        circle(this.pos.x, this.pos.y, BruteSize);
    }
}