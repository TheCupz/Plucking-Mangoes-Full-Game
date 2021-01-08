class Throwing{
    constructor(body,pointB){
       var options = {
           bodyA:body,
           pointB:pointB,
           stiffness: 0.004,
           length : 1
        }
        this.bodyA = body;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
        console.log(this.sling.bodyA);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}