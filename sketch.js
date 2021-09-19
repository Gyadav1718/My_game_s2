const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var canvas;
var ironMan,ironManImg,thor,thorImg,captain,captainImg,spyder,spyderImg;
var backgroundImg;
var ultron,ultronImg,hela,helaImg,ronan,ronanImg,killmonger,killmongerImg,thanos,thanosImg;
var ironmanS2;
function preload(){
ironManImg = loadImage("images/ironmanS2.1.png");
backgroundImg= loadImage("images/back.jfif");
ironmanS2 = loadAnimation("images/ironmanS2.1.png","images/ironmanS2.2.png","images/ironmanS2.3.png","images/ironmanS2.4.png");
}
function setup(){
canvas = createCanvas(800,800);
ironMan = createSprite(200,200,10,10);
ironMan.addImage(ironManImg);
ironMan.addAnimation("arcoverload",ironmanS2);
ironMan.scale = 0.5;

}
function draw(){
background(backgroundImg);
if(keyWentDown("s")){
  ironMan.changeAnimation("arcoverload",ironmanS2);
}
drawSprites();

}
