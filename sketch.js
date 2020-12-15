const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground








function setup(){
    createCanvas(1360,500);
    engine = Engine.create();
    world = engine.world;

ground1=new Ground(1000,350,300,15)
box1=new Block(900,320,20,20)




}


function draw(){
    background("black")
Engine.update(engine)
ground1.display()
box1.display()
}










