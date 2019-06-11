class snake{
  constructor(){
    this.x=0;
    this.y=0;
    this.dir_x=1;
    this.dir_y=0;
    this.length=0;
  }

  update(){
    this.x+=this.dir_x*size;
    this.y+=this.dir_y*size;
    this.x=constrain(this.x,0,width-2*size);
    this.y=constrain(this.y,0,width-2*size);
  }

  show(){
    fill(255);
    rect(this.x,this.y,size,size);
  }

  change_dir(a,b){
    this.dir_x=a;
    this.dir_y=b
  }

  eat(food){
    if(food.x==this.x && food.y==this.y){
      length+=1;
      return(true);
    }
    return(false);
  }

}
