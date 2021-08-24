class playerArcher{

    constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    var options={
        isStatic: true
    }

    this.body = Bodies.rectangle(options);
    this.image("./assets/playerArcher.png");
    this.body.setAngle(270);
    }

    display(){
var pos = this.body.position;
var angle = this.body.angle;
if (keyIsDown(UP_ARROW)){
    this.body.angle =- 0.05;
}
if (keyIsDown(DOWN_ARROW)){
    this.body.angle =+ 0.05;
}
push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0 ,0, this.width, this.height);
pop();


    }
}