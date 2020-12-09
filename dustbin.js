class Dustbin {
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.image = loadImage("dustbin.png");
    this.body = Bodies.rectangle(x,y,75,0,options);
    this.body2 = Bodies.rectangle(x,y,10,100,options);
    this.body3 = Bodies.rectangle(x,y,10,100,options);
    World.add(world, this.body);
}
display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    image(this.image,0,0,75,100);
    pop();
}
};