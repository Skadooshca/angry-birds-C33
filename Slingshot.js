class Slingshot{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}
this.pointB=pointB
this.sling=Constraint.create(options);
World.add(world,this.sling);
this.sling1=loadImage("sprites/sling1.png");
this.sling2=loadImage("sprites/sling2.png");
this.sling3=loadImage("sprites/sling3.png");
}
    display(){
image(this.sling1,200,20);
image(this.sling2,170,20);
        strokeWeight(4);
if (this.sling.bodyA){
    var pointA=this.sling.bodyA.position;
    var pointB=this.pointB;
    push();
    strokeWeight(4);
    stroke("rgb(60,33,17)")


if (pointA.x<200){
    line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
    image(this.sling3,pointA.x-30,pointA.y-10,15,30)
    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)

}
else {

}
pop();
}
  }
    fly(){
        this.sling.bodyA=null}
        attach(bodyA){
this.sling.bodyA=bodyA
        }
}
