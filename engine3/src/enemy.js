class Enemy extends Component {

    start() {
        this.rb = this.getComponent(Rigidbody)

        this.rb.onCollisionEnter = col => {
            if(col.hit.normal.x == -1,1){
                player.getComponent(Healthbar).hp -= 5
            }
        }
    }

    update() {
        let playerPos = player.pos.x
        let myPos = this.gameObject.pos.x
        if (playerPos < myPos)
            this.rb.vel.x = -180
        else (this.rb.vel.x = 180)

        // player.getComponent(Healthbar).hp -= 10
    }
}