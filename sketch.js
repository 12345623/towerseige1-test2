const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var slingshot;
var striker;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 striker= new Striker(200,100)

 slingshot= new SlingShot(striker.body,{x:200,y:300});
}

function draw() {
  background(255,255,255);
  drawSprites();
}