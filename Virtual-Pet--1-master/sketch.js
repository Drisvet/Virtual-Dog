var dog, happyDog, database, foodS, foodStock;

function preload()
{
  this.image = loadImage("dogImg.png");
  this.image = loadImage("happyDog.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,250,10,10);
  this.dog = loadImage("dogImg.png");

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  noStroke();
  textSize(35)
  fill("white")
  text("NOTE: Press UP_ARROW key to feed the dog.")

}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  if(x<-0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
