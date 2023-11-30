class Zombie{
    constructor(pos) {
        this.pos = pos.copy()
    }

    update() {
        // @ts-ignore
        var enemyDir = p5.Vector.sub(player, this.pos);
        enemyDir.setMag(1);
        this.pos.add(enemyDir);
    }

    draw() {

        fill(0, 200, 179);
        circle(this.pos.x, this.pos.y, enemySize);
    }
}