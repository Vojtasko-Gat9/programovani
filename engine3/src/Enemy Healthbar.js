class EnHealthbar extends Component {

    EnHp = 30

    start() {
        this.bar = new RectRenderer(this.EnHp / 2, 10, () => fill(0, 255, 0))
        new GameObject(this.gameObject.pos.x, this.gameObject.pos.y)
            .addComponent(this.bar)
    }

    update() {
        this.bar.gameObject.pos.set(this.gameObject.pos)
        this.bar.gameObject.pos.y -= 25

        this.bar.size.x = this.EnHp / 2
        
    }

}