class Ball {
    constructor(){
var options ={
	isStatic: false,
	'restitution': 0.3,
	'friction': 0.5,
    'density': 1.2
}
this.image = loadImage("paper ball.png");
this.body = Bodies.circle(100,200,21,options);
World.add(world, this.body);
}
display(){
 imageMode(CENTER);
 image(this.image,this.body.position.x, this.body.position.y, 60,60);
}
};