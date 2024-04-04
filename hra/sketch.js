const size = 25
const playerSize = size;
const playerSpeed = 3.5;
const enemySize = size-5;
const BruteSize = size+5;

var player;
var enemies=[];
var bullets=[];

function setup() {
    createCanvas(1500, 720);
    player = createVector(width / 2, height / 2);

    for (var i = 0; i < 3; i++){
        var randomPos = createVector(random(width),random(height));
        var enemy = new Zombie(randomPos);
        enemies.push(enemy);
    }
    for (var i = 0; i < 1; i++){
        var randomPos = createVector(random(width),random(height));
        var brute = new Brute(randomPos);
        enemies.push(brute);
    }
}
function draw() {
    background(255, 255, 106);
    var dir = createVector();

    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;

    dir.setMag(playerSpeed);
    player.add(dir);

    if (player.x > width) player.x = 0
    if (player.x < 0) player.x = width
    if (player.y > height) player.y = 0
    if (player.y < 0) player.y = height

    for (var enemy of enemies)        
        enemy.update()
    for (var brute of enemies)        
        brute.update()
    for (var bullet of bullets)
        bullet.update()
    
    fill(255,255,179);
    circle(player.x, player.y, playerSize);

    for (var enemy of enemies)
    enemy.draw();
    for (var brute of enemies)
    brute.draw();
    for (var bullet of bullets)
    bullet.draw();
}
function mousePressed(){
    bullets.push(new Projectiles(player));
}