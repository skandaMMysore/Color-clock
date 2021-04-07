const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(800,700);

  //creating global variables for functions of minutes,seconds and hours
  hr = hour();
  mn = minute();
  sc = second();

  
}

function draw() {
  background("black");
  //changing the angle Mode to Degrees in which it would be measured
  angleMode(DEGREES);
  
  //using map we can change any unit to circle here, from time its changed to circle
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  translate(100,150);
  line(0,0,500,500);
  pop();
  
  
  //drawing a minute hand from where the hand is converted according to the degrees of a circle
  mnAngle = map(mn,0,60,0,360);
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  translate(200,200);
  line(0,0,500,500);
  pop();

  //drawing a hour hand
  hrAngle = map(hr,0,60,0,360);
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  translate(300,350);
  line(0,0,500,500);
  pop();
  
  
  drawSprites();
}
