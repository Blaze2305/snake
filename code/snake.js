class snake{
  constructor(){
    this.x=0;
    this.y=0;
    this.dir_x=1;
    this.dir_y=0;
    this.length=0;
    this.tail=[];
    this.score=0;
  }

  check(){
    let a=0;
    for(let m=0;m<this.tail.length;m++){
      if(this.tail[m].x==this.x && this.tail[m].y==this.y){
        a=1
      }
    }
    if(this.x>width-5*size || this.x<0 || this.y>height-5*size || this.y<0){
      a=1
    }
    if(a==1){
      return(true);
    }
    else{
      return(false)
    }
  }


  update(){
    for(let i=0;i<this.tail.length-1;i++){
      this.tail[i]=this.tail[i+1];
    }
    this.tail[this.length-1]=createVector(this.x,this.y)

    this.x+=this.dir_x*size;
    this.y+=this.dir_y*size;
    this.x=constrain(this.x,0,width-4*size);
    this.y=constrain(this.y,0,height-4*size);
  }

  show(a){
    if(a){
      fill(200);
      for(let i=0;i<this.tail.length;i++){
        push();
        fill(i*5+100);
        rect(this.tail[i].x,this.tail[i].y,size,size);
        pop();
      }
      rect(this.x,this.y,size,size);
    }
    else{
      fill(255,0,0,100);
      for(let i=0;i<this.tail.length;i++){
        push();
        rect(this.tail[i].x,this.tail[i].y,size,size);
        pop();
      }
      rect(this.x,this.y,size,size);
    }
  }

  change_dir(a,b){
    this.dir_x=a;
    this.dir_y=b
  }

  eat(food){
    if(food.x==this.x && food.y==this.y){
      this.length+=1;
      this.score+=100;
      return(true);
    }
    return(false);
  }

}
