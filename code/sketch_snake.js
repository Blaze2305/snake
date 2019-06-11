let s;
let size=10;
let food;
let eaten;

function setup() {
  createCanvas(600,600);
  frameRate(10)
  add_food();
  s=new snake();
}

function draw() {
  background(0)

  push();
  noStroke();
  fill(255,0,0);
  rect(food.x,food.y,size,size)
  pop();


  grid()
  eaten=s.eat(food);
  if(eaten){
    add_food();
  }
  s.show();
  s.update();

}


function keyPressed(){
  if(keyCode===UP_ARROW){
    s.change_dir(0,-1);
  }
  else if (keyCode===DOWN_ARROW) {
    s.change_dir(0,1);
  }
  else if (keyCode===RIGHT_ARROW) {
    s.change_dir(1,0);
  }
  else if(keyCode===LEFT_ARROW){
    s.change_dir(-1,0);
  }
}

function grid(){
  let cols=floor(width/size);
  let rows=floor(height/size);

  for(let i=0;i<cols-1;i++){
    for(let j=0;j<rows-1;j++){
      stroke(255);
      noFill()
      rect(i*size,j*size,size,size);
    }
  }
}


function add_food(){
  let cols=floor(width/size);
  let rows=floor(height/size);

  food=createVector(floor(random(cols)),floor(random(rows)))
  food.mult(size);
}
