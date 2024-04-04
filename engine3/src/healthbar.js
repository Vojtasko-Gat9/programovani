class Healthbar extends Component {

    hp = 100

    start() {
        this.bar = new RectRenderer(this.hp / 2, 10, () => fill(0, 255, 0))
        new GameObject(this.gameObject.pos.x, this.gameObject.pos.y)
            .addComponent(this.bar)
    }

    update() {
        this.bar.gameObject.pos.set(this.gameObject.pos)
        this.bar.gameObject.pos.y -= 25

        this.bar.size.x = this.hp / 2
        
    }

}