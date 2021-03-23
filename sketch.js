const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var backgroundImage;
var gamestate="onSling"
var score=0

function preload(){
    backgroundImage=loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform=new Ground(150,305,300,170);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1= new Pig(810,350);
    log1= new Log(810,260,300,PI/2);
    bird= new Bird(200,50);
    ground = new Ground(600,height,1200,20);
    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    pig3= new Pig(810,220);
    log3= new Log(810,180,300,PI/2);
    box5= new Box(810,160,70,70);
    log4= new Log(760,120,150,PI/7);
    log5= new Log(870,120,150,-PI/7);
    sling=new Slingshot(bird.body,{x:200,y:50});
}

function draw(){
    background(backgroundImage);
    noStroke()
    textSize(35)
    fill("white");
    text("score:"+score,width-300,50) 
    Engine.update(engine);
    box1.display();
    box2.display();
    log1.display();
    pig1.display();
    bird.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    log4.display();
    log5.display();
    box5.display();
    ground.display();
    sling.display();
    platform.display();
    pig1.score();
    pig3.score();
}

function mouseDragged() {
    if(gamestate==="onSling"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    }
    function mouseReleased(){
         sling.fly();
         gamestate="launched"
    }
    function keyPressed(){
        if(keyCode===32){
            bird.trajectory=[];
            Matter.Body.setPosition(bird.body,{x:200,y:50})
    sling.attach(bird.body);
    gamestate="onSling"
        }
    }

