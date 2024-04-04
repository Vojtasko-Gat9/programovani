let player


class Player extends Component {

    start() {
        this.rb = this.getComponent(Rigidbody);
        this.grounded = false;
        this.double = false;

        this.rb.onCollisionEnter = col => {
            if(col.hit.normal.x == -1,1){
                player.getComponent(Healthbar).EnHp -= 5
            }
        }

        this.rb.onCollisionEnter = col => {
            if (col.hit.normal.y == -1) {
                this.grounded = true;
            }
        }

        this.rb.onCollisionExit = col => {
            if (col.hit.normal.y == -1) {
                this.grounded = false;
            }
        }

    }

    update() {
        if (Input.keyJustPressed(' ') && this.double) {
            this.double = false;
            this.rb.vel.y = -600;

        }
        if (Input.keyJustPressed(' ') && Input.keyPressed('t')) {
            this.rb.vel.y = -1200;
        }

        if (this.grounded)
            this.double = true
        if (Input.keyPressed('a'))
            this.rb.vel.x = -300;
        else (this.rb.vel.x = 0)
        if (Input.keyPressed('d'))
            this.rb.vel.x = +300;



    }
}

function setup() {
    size(800, 600);

    new GameObject(width / 2, height - 5)
        .addComponent(new Rect(width, 10).setColor(0).setStroke())
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))


    new GameObject(width - 5, height / 2)
        .addComponent(new Rect(10, height).setColor(0).setStroke())
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    new GameObject(0, 300)
        .addComponent(new Rect(10, 600).setColor(0, 0, 0).setStroke())
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(0))

    player = new GameObject(500, 550)
        .addComponent(new Player())
        .addComponent(new Rect(25, 25).setColor(0, 255, 0).setStroke(0))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody(1))
        .addComponent(new Healthbar())

    new GameObject(100, 450)
        .addComponent(new Enemy())
        .addComponent(new Rect(25, 25).setColor(255, 0, 0).setStroke(0))
        .addComponent(new ShapeRenderer())
        .addComponent(new Rigidbody())


}

function draw() {
    background(51);

    translate(-player.pos.x + width / 2, -player.pos.y + height / 2);
}