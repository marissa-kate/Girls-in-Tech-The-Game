new p5();

let x = 50;
let rad = 70;
let w=600;
let l = 700;
let y= l-100;

let ry = 100;
let delay = 1000;
let dead =0;
let score=0;
let gwc = "girls in tech";
let rx = int(random(20,  w-120));
let obstacles = ["sexist comments", "tokenism", "feeling unheard", "self doubt", "the gender gap", "unconscious bias", "imposter syndrome", "lack of confidence", "self-censoring", "sexual harassment", "not fitting in", "lack of support", "discouragement", "no representation", "loneliness"];
let obstacle = random(obstacles);
let coords = [];

function setup() {
  frameRate(30);
  createCanvas(600, 700);
}

function draw() {
  if(dead==1){
    choose();
  }
  else if(dead==2){
     death(); 
  }
  else if(dead==0){
    welcome();
  }
  else{
    victory();
  }
}

function move(){
  background(0);
      fill(12, 125, 91);
      rect(20, 20, w-140, rad, 15);
      fill(255);
      textSize(14);
      text("obstacle:", 50, 34);
      textSize(36);
      text(obstacle, 80, 70);
      fill(224, 118, 182);
      rect(w-95, 20, rad, rad, 15);
      fill(255);
      textSize(14);
      text("score:", w-85, 34);
      textSize(44);
      text(score, w-85, 75);
  if(keyCode===RIGHT_ARROW){
    die();
      x= constrain(x, 0, w-90);
      if(keyIsPressed===true){
        x+=10;
      }

  }
  else if(keyCode===LEFT_ARROW){
    die();
      x = constrain(x, 40, w-50);
      if(keyIsPressed===true){
      x-=10;
      }
  }
  fill(0, 0, 255);
  rect(x, y, 70, 70, 15);
}

function welcome(){
  background(0);
  fill(100, 200, 150);
  rect(95, 95, 400, 80, 15);
  fill(255);
  textSize(48);
  text("GIRLS IN TECH:", 120, 150);
  fill(12, 95, 121);
  rect(180, 185, 240, 50, 15);
  strokeWeight(0);
  fill(255);
  textSize(36);
  text("THE GAME!", 200, 220);
  stroke(121, 15, 89);
  fill(0);
  strokeWeight(12);
  rect(70, 320, 450, 120, 15);
  strokeWeight(0);
  fill(255);
  let instructions = "To Play: Use the L and R arrow keys to move.\nDodge all the obstacles that come your way.\nDodge 30 obstacles to win!";
  textSize(20);
  text(instructions, 90, 360);
  fill(224, 118, 182);
  rect(205, 565, 60, 45,15);
  textSize(34);
  fill(255);
  text("Press the UP Arrow To Begin", 60, 600);
  if(keyIsPressed){
    if(keyCode===UP_ARROW){
      dead = 1;
    }
  }
}

function choose(){
  background(0);
  move();
  if(score<5){
  ry+=15;
  fill(50, 200, 200);
  }
  else if(score<15){
    ry+=20;
    fill(50, 220, 220);
  }
  else if(score<20){
    ry+=25;
    fill(50, 240, 240);
  }
  else if(score<25){
    ry+=30;
    fill(50, 255, 255);
  }
  else if(score<30){
    ry+=35;
    fill(150, 255, 255);
  if(score>25){
    fill(220, 255, 255);
  }
  }
  else{
    dead=3;
  }
  if(ry>l-40){
    ry=100;
    rx=int(random(20, w-120));
    score+=1;
    obstacle = random(obstacles);
  }
  rect(rx, ry, rad, rad, 15);
}

function die(){
  for(let i = x; i<70+x;i++){
    for(let j = y;j<70+y;j++){
        let xy = createVector(i, j);
        coords.push(xy);
      }
    }
    //print("rx: ",rx)
    //print("x: ",coords[i].x)
    //if(rx=== coords[i].x && ry+rad/2===coords[i].y||rx+rad===coords[i].x && ry+rad/2===coords[i].y){
    for(let i = 0; i<coords.length; i++){
      if((rx===coords[i].x&&ry+rad/2=== coords[i].y)||(rx+rad==coords[i].x&& ry+rad/2==coords[i].y)){
      dead=2;
    }
  }
  if(dead!=2){
    coords=[];
  }
  }

function death(){
    let youLose = "GAME OVER";
    let score1 = "Your score was: ";
    let playAgain = "press SHIFT to play again!";
    background(0);
    fill(100, 200, 150);
    rect(70, 65, w-140, 100, 15);
    fill(255);
    textSize(60);
    text(youLose, 120, 140);
    fill(12, 95, 121);
    rect(200, 200, 220, 60, 15)
    fill(255);
    textSize(32);
    text("YOU LOST", 230, 240)
    stroke(121, 15, 95);
    strokeWeight(12);
    fill(0);
    rect(118, 370, 330, 60, 15);
    stroke(0);
    strokeWeight(0);
    fill(255);
    textSize(30);
    text(score1, 150, 410);
    text(score, 390, 410);
    fill(224, 118, 182);
    rect(175, 560, 115, 55, 15);
    fill(255);
    textSize(36);
    text(playAgain, 80, 600);
    again();
}

function victory(){
    background(0);
    fill(100, 200, 150);
    rect(80, 125, w-140, 100, 15);
    fill(255);
    textSize(55);
    text("YOU WIN!", 180, 195);
    let congrats = "It's a tough journey, but you've made it!\nAnd, you've proven how STRONG, RESILIENT,\nAND AMAZING girls in tech are!";
    let playAgain = "press SHIFT to play again!";
    textSize(24);
    text(congrats, 40, 380);
    fill(224, 118, 182);
    rect(175, 560, 115, 55, 15);
    fill(255);
    textSize(36);
    text(playAgain, 80, 600);
    again();
}

function again(){
    if(keyCode===SHIFT){
      background(0);
      score=0;
      fill(0, 0, 255);
      rx = int(random(20,  w-120));
      ry=70;
      coords = [];
      dead=0;
    }
}
