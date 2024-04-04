class Circle{

    constructor(x,y){
        this.pos = createVector(x,y)
        this.vel = createVector(random(30), random(-20, 0))
    }

    draw() {
        fill(0, 255, 0)
        circle(this.pos.x,this.pos.y, 20)
    }

    update() {
        this.applyForce(gravity)

        this.pos.add(this.vel)

        if (this.pos.y > height) {
            this.vel.y *= -0.95
            this.pos.y = height
        }

        if (this.pos.x > width) {
            this.vel.x *= -0.95
            this.pos.x = width
        }
    }

    applyForce(f) {
        this.vel.add(f);
    }
}

let circles = [];

let gravity;

function setup(){
    createCanvas(400,400);
    background(51);

    for (let i = 0; i <100; i++){
        let x = random(width);
        let y = random(height);
        circles.push(new Circle(x,y));
    }

    gravity = createVector(0,0.5)
}

function draw(){
    background(51);

    for (let circle of circles) circle.update()

    for (let circle of circles) circle.draw()

}
