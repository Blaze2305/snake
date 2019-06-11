class snake{
  constructor(){
    this.x=0;
    this.y=0;
    this.dir_x=1;
    this.dir_y=0;
    this.length=0;
    this.tail=[];
  }

  update(){
    for(let i=0;i<this.tail.length-1;i++){
      this.tail[i]=this.tail[i+1];
    }
    this.tail[length-1]=createVector(this.x,this.y)

    this.x+=this.dir_x*size;
    this.y+=this.dir_y*size;
    this.x=constrain(this.x,0,width-2*size);
    this.y=constrain(this.y,0,width-2*size);
  }

  show(){
    fill(255);
    for(let i=0;i<this.tail.length;i++){
      rect(this.tail[i].x,this.tail[i].y,size,size);
    }
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
