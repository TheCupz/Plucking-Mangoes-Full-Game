class Tree {
  constructor(x, y) {
    var options = {
        'isStatic': true,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    //this.body = Bodies.rectangle(x, y, width, height, options);
    this.x = x;
    this.y = y;
    this.image = loadImage("tree.png");
    this.leftBody = Bodies.rectangle(850,310,16,170, {isStatic : true});
    this.rightBody = Bodies.rectangle(1020,310,16,170, {isStatic : true});
    this.mainBody = Bodies.rectangle(this.x, this.y, 16, 170, {isStatic : true});
    
    World.add(world, this.mainBody);
    World.add(world, this.rightBody);
    World.add(world, this.leftBody);
  }
  display(){
    //var pos =this.body.position;
    var posleft = this. leftBody.position;
    var posright = this. rightBody.position;
    var posmain = this.mainBody.position;
    push();
    translate(posleft.x, posleft.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    strokeWeight(4);
    stroke("yellow");
    fill("White");
    rotate(this.angle);
    pop();

    push();
    translate(posright.x, posright.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    strokeWeight(4);
    stroke("yellow");
    fill("White");
    rotate(-1*this.angle);
    pop();

    push();
    translate(posmain.x, posmain.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    strokeWeight(4);
    stroke("yellow");
    fill("White");
    imageMode(CENTER);
    image(this.image, 0, -70, 660, 650);
    pop();
  }
};
