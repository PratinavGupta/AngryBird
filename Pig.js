class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibile = 255;
  }

 display(){
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.visibile = this.visibile - 5;
     tint(255,this.visibile);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }

score(){
    if(this.visibile < 0   &&   this.visibile > - 10)
      score ++  ;
  }

}