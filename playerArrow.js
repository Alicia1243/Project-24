class playerArrow{

    constructor(x, y, width, height){
this.x = x;
this.y = y;
this.width = width;
this.height = height;

var options={
    isStatic: true
}

this.body = Bodies.rectangle(player.x + 20, PlayerArrow = playerArcher, 3, 5, options);
this.image("./assets/arrow.png");
    }
}
display()
{
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0 ,0, this.width, this.height);
push();
}




if(keyCode === 32){
arrow.shoot(playerArcher.body.angle);
}