//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage('images/dogImg.png');
  dogImg1 = loadImage('images/dogImg1.png');

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogImg);
  dog.scale = 0.15

  console.log(database)
  

  
  
}


function draw() {
  background(46, 139, 87);



  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
    dog.scale = 0.15
    //foodS = foodS - 1;
  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }
  

  drawSprites();
  //add styles here
  fill(0)
  textSize(20)
  text("Food Remaining" + foodS, 160, 170);
  fill(0)
  text("Press Up Arrow to feed dog",140, 140)



}

function readStock(data){
  foodS=data.val();
  console.log("readStock");
}

function writeStock(x){
  if(x <= 0 ){
    x = 0
  }
  else{
    x = x - 1;
  }

  database.ref('/').update({
    Food:x
  })
}
  




