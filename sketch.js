var Paper, ground;
var bin;
var b;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  Paper1 = loadImage("unnamed.png");
  bin1 = loadImage("images.png");
  b = loadImage("p.jpg");
}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  

  packageSprite = createSprite(200, 620, 10, 10);
  packageSprite.addImage(Paper1);
  packageSprite.scale = 0.2;
  // packageSprite.visible = true;

  packageSprite1 = createSprite(600, 590, 10, 10);
  packageSprite1.addImage(bin1);
  packageSprite1.scale = 0.7;

  //Create a Ground
  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  Paper = Bodies.circle(width / 2, 200, 5, {
    restitution: 1.5,
    isStatic: true
  });

  World.add(world, Paper);
  // World.add(world, Dustbin);

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
  World.add(world, ground);

  
  chain = new Chain(packageSprite.body,packageSprite1.body);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(b);

  if (keyCode === UP_ARROW) {
     packageSprite.x = packageSprite.x + 0.9;
     packageSprite.y = packageSprite.y + -0.9;
   }

   if (keyCode === DOWN_ARROW) {
      packageSprite.y = packageSprite.y + 0.5;
    }

  // if (packageSprite.istouching(packageSprite1)) {
  // packageSprite.visible = false;
  //}

  drawSprites();
}
