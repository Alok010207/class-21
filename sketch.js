var car,bus;

function setup() {
  createCanvas(400,400);

  car=createSprite(200, 200, 80, 60);
  bus=createSprite(300,200,60,80);

  car.shapeColor="white";
  bus.shapeColor="white";
  
  o1=createSprite(50,50,50,50);
  o2=createSprite(350,50,50,50);
  o3=createSprite(50,350,50,50);
  o4=createSprite(350,350,50,50);

  o1.shapeColor="white";
  o2.shapeColor="white";
  o3.shapeColor="white";
  o4.shapeColor="white";

  o1.debug=true;
  o2.debug=true;
  o3.debug=true;
  o4.debug=true;
  

   
  

  car.debug=true;
  bus.debug=true;
  
}

function draw() {
  background("purple"); 
  
  bus.y=mouseY;
  bus.x=mouseX;

 
  if( touch(o1,bus)){
    o1.shapeColor="blue";
    bus.shapeColor="blue";

  }
  else if(touch(o4,bus)){
    o4.shapeColor="red";
    bus.shapeColor="red";
  }
  else{
    o4.shapeColor="white";
    

    o1.shapeColor="white";
    bus.shapeColor="white"; 
  }
  //text(bus.x,50,50);

  drawSprites();
}

function touch(a,b){
  if(a.x-b.x < a.width/2+b.width/2 &&
    b.x-a.x < a.width/2+b.width/2 &&
    a.y-b.y < a.height/2+b.height/2 &&
    b.y-a.y < a.height/2+b.height/2 ){
    return true;
  }
  else{
   return false;
  }


}