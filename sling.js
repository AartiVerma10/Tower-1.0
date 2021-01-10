class Sling {
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null;
        
    }
    display(){
        if(this.sling.bodyA){
            this.pointA=this.sling.bodyA.position;
            this.pointB=this.sling.pointB;
            push();
            strokeWeight(4);
            stroke("black");
            line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y);
            pop();
        }

    }
}