let s;
let tale=[];
let count=0;

function setup(){
  createCanvas(800,800)
  s=new head(500,500);
  tale=tale.concat(s.add_tail(s))
  console.log(tale)
}


function draw(){
  background(0);
  s.show()
  s.movement()
  s.change_dir(count);
  for(i=0;i<tale.length;i++){
    tale[i].show();
    tale[i].update(s)
  }
}



class head{
  constructor(headx,heady){
    this.x=headx;
    this.y=heady;
    // this.length=length;
    this.move=[true,false,false,false]; // [up , down , left ,right]
    this.empty=[false,false,false,false];
    this.size=10;
  }

  show(){
      push();
      rectMode(CENTER);
      rect(this.x,this.y,this.size,this.size);
      pop();
  }

  add_tail(a){
    let tail=[]
    if(a.move[0]){
      tail.push(new tails(a,a.size,0,-1));
    }
    else if (a.move[1]) {
      tail.push(new tails(a,a.size,0,1));
    }
    else if (a.move[2]) {
      tail.push(new tails(a,a.size,1,0));
    }
    else if(a.move[3]){
      tail.push(new tails(a,a.size,-1,0));
    }
    return(tail);
  }

  change_dir(a){
    if(a==0){
      this.move[0]=true;
      this.move[1]=false;
      this.move[2]=false;
      this.move[3]=false;
    }
    else if (a==1) {
      this.move[0]=false;
      this.move[1]=true;
      this.move[2]=false;
      this.move[3]=false;
    }
    else if (a==2) {
      this.move[0]=false;
      this.move[1]=false;
      this.move[2]=true;
      this.move[3]=false;
    }
    else if (a==3) {
      this.move[0]=false;
      this.move[1]=false;
      this.move[2]=false;
      this.move[3]=true;
    }
  }

  movement(){
    if(this.move[0]){
      this.y-=1;
    }
    else if (this.move[1]) {
      this.y+=1;
    }
    else if (this.move[2]) {
      this.x-=1;
    }
    else if (this.move[3]) {
      this.x+=1;
    }

    if(this.y<0){
      this.y=height;
    }
    if(this.y>height){
      this.y=0;
    }
    if(this.x<0){
      this.x=width;
    }
    if(this.x>width){
      this.x=0;
    }
  }

}



class tails{
  constructor(parent,size,b,c){
    this.parent=parent;
    this.size=size;
    this.x=parent.x;
    this.y=parent.y;
    this.move=parent.move;
    this.b=-b;
    this.c=-c;
  }
  show(){
    push();
    rectMode(CENTER);
    stroke(255);
    fill(100);
    translate(this.x+this.size*this.b,this.y+this.c*this.size);
    rect(0,0,this.size,this.size);
    pop();
  }

  update(s){
    this.x=s.x;
    this.y=s.y;
  }
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    count=0;
  }
  if(keyCode===DOWN_ARROW){
    count=1;
  }
  if(keyCode===LEFT_ARROW){
    count=2;
  }
  if(keyCode===RIGHT_ARROW){
    count=3;
  }
}
