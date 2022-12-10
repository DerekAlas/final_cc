let score = 0;
let rectX = 150;
let rectY = 450;
let play_;

function setup(){
  createCanvas(400, 500);
  color1 = color(219, 20, 20);
  ball1 = new Ball(color1);
  color2 = color(1, 115, 14);
  ball2 = new Ball(color2);
  color3 = color(0, 59, 153);
  ball3 = new Ball(color3);
  color4 = color(250, 242, 12);
  ball4 = new Ball(color4);
  menu();
}

function draw(){
//background(222, 222, 222);
//play_.mousePressed(modeOne);
  //menu();
//  modes();
  modeOne();

}

function menu(){
  background(222, 222, 222);
  fill(0);
  textSize(100);
  text('NAME', 50, 140);
  play_ = createButton('Play');
  play_.position(170, 200);
  play_.mousePressed(modeOne);

/*  textSize(30);
  text('Play', 170, 220);
  textSize(30);
  text('Instructions', 120, 280);

  if(keyPressed && mouseX < 200 && mouseX > 160 && mouseY < 230 && mouseY > 210){
    modes();
  }*/
}

function modes(){
  background(222, 222, 222);
  fill(0);
  textSize(100);
  text('NAME', 50, 140);
}

function modeOne(){

  //controls the speed of the rectangle
  if(frameCount < 750){
    if(keyIsDown(LEFT_ARROW)){
      rectX -= 10;
    }
    if(keyIsDown(RIGHT_ARROW)){
      rectX += 10;
    }
  }

  if(frameCount >= 750){
    if(keyIsDown(LEFT_ARROW)){
      rectX -= 15;
    }
    if(keyIsDown(RIGHT_ARROW)){
      rectX += 15;
    }
  }

  background(222, 222, 222);
  fill(0);
  textSize(100);
  text(score, 170, 90);
  fill(0, 20, 20);
  rect(rectX, rectY, 100, 20);
  ball1.display();
  //ball2.display();
  ball3.display();
  //ball4.display();
  ball1.collide();
  //ball2.collide();
  ball3.collide();
  //ball4.collide();

  if(frameCount > 500){
    ball2.display0();
    ball2.collide();
  }

  if(frameCount > 1000){
    ball4.display_();
    ball4.collide_();
  }
}


function gameOver(){
  background(222, 222, 222);
  fill(0);
  textSize(100);
  text('GAME', 50, 200);
  text('OVER', 50, 350);
  textSize(25);
  text('SCORE:', 50, 450);
  text(score, 250, 450);
}
