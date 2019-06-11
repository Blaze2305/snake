let s;
let size=20;
let food;
let eaten;
let reset_button;
let max_score=0;

function setup() {
  createCanvas(600,600);
  frameRate(10)
  add_food();
  reset_button=createButton("CLICK TO RESET");
  reset_button.mousePressed(restart);
  s=new snake();
}

function draw() {
  background(0)
  textSize(15)
  text('SCORE',530,20)
  text(s.score,550,40)
  if(max_score<s.score){
    max_score=s.score;
  }
  text('HIGH SCORE',60,540)
  text(max_score,60,560)
  push();
  noStroke();
  fill(148,0,211);
  rect(food.x,food.y,size,size)
  pop();


  grid()
  if(!s.check()){

    eaten=s.eat(food);
    if(eaten){
      add_food();
    }
    s.show(1);
    s.update();
  }
  else{
    console.log("YOU DIED!")
    s.show(0)
    noLoop();
  }

}


function keyPressed(){
  if(keyCode===UP_ARROW && s.dir_y!=1){
    s.change_dir(0,-1);
  }
  else if (keyCode===DOWN_ARROW && s.dir_y!=-1) {
    s.change_dir(0,1);
  }
  else if (keyCode===RIGHT_ARROW && s.dir_x!=-1) {
    s.change_dir(1,0);
  }
  else if(keyCode===LEFT_ARROW && s.dir_x!=1){
    s.change_dir(-1,0);
  }
}

function grid(){
  let cols=floor(width/size);
  let rows=floor(height/size);

  for(let i=0;i<cols-4;i++){
    for(let j=0;j<rows-4;j++){
      stroke(255,100);
      noFill()
      rect(i*size,j*size,size,size);
    }
  }
}


function add_food(){
  let cols=floor(width/size)-4;
  let rows=floor(height/size)-4;

  food=createVector(floor(random(cols)),floor(random(rows)))
  food.mult(size);
}


function restart(){
  s=new snake();
  loop();
}
