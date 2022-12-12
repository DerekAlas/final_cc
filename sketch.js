let score = 0;
let rectX = 150;
let rectY = 450;
//let play_;

// function preload(){
//   point_ = loadSound('point.wav');
// }

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
  //menu();
}

//button flags
let flag = true;
let playing = false;
let ins = false;
let menu_ = false;
//let over = true;

//button variables
let play_;
let instruct;
let home;
//let home1;

let pages = ["menu", "instruct", "over"];
let state = "menu";

function draw(){
//reference for buttons: https://p5js.org/reference/#/p5/createButton
//background(222, 222, 222);
//play_.mousePressed(modeOne);

//  modes();
  //modeOne();
  if(playing == true){
    play_.remove();
    instruct.remove();
    modeOne();
    //instruct();
  //  menu_ = true;
  }





  // if (ins === true){
  //   instruct.remove();
  //   play_.remove();
  //   instructions(home);
  //   ins = false;
  // }

  if(state == "menu"){
    //home.remove();
    if(flag == true){

      play_ = createButton('Play');
      instruct = createButton('Instructions');


      menu(play_, instruct);
      //instructions(home);
      flag = false; // so it only loops once
      //menu_ = true;
    }
    console.log("flag = ", flag);
  }
  else if(state == "instruct") {
    play_.remove();
    instruct.remove();

    if(ins == true){
      background(222, 222, 222);
      fill(0);
      home = createButton('Menu');
      home.position(170, 400);
      home.mousePressed(function() {
        home.remove();
        state = "menu";
        flag = true;
      });
      instruct.remove();
      play_.remove();
      instructions();
      ins = false;
    }
  }
    //home.remove();
   if(state == "over"){
     gameOver();
     // function keyPressed(){
     //   if(keyCode === 32){
     //     restart();
     //     // state = "menu";
     //     // flag = true;
     //   }
     }
     //over = true;
      // if(over === true){
      //   home1 = createButton('Menu');
      //   home1.position(170, 400);
      //   home1.mousePressed(function() {
      //     home1.remove();
      //     state = "menu";
      //     flag = true;
      //     over = false;
      //   });
      //   gameOver(home1);
      //
      // }

    //console.log("over = ", over);
    console.log("instruct = ", state);


}

function menu(play_, instruct){
  background(222, 222, 222);
  fill(0);
  textSize(70);
  text('CATCH IT!', 30, 140);
  //play_ = createButton('Play');
  play_.position(this.width/2 - 30, 200);
  play_.mousePressed(playGame);
  instruct.position(this.width/2 - 30, 300);
  instruct.mousePressed(instr);



/*
  if(flag === false){
    home = createButton('Menu');
    instructions(home);
  }

/*  textSize(30);
  text('Play', 170, 220);
  textSize(30);
  text('Instructions', 120, 280);

  if(keyPressed && mouseX < 200 && mouseX > 160 && mouseY < 230 && mouseY > 210){
    modes();
  }*/
}


///////changing button flags/////////
function playGame(){
  playing = true;
}

function instr(){
  ins = true;
  state = "instruct";
}
//////////////////////////////////////

// function restart(){
//   flag = true;
//   state = "menu";
// }

/*
function home_(){

  //menu_ = true;
state = "menu";
  //if(menu_ === true){
    //home.remove();
    //menu(play_, instruct);
    flag = true;
  //}
}
*/

// function over_(){
//   over = true;
//   //state = "over";
//
// }


// function modes(){
//   background(222, 222, 222);
//   fill(0);
//   textSize(100);
//   text('NAME', 50, 140);
// }

//the actual game
function modeOne(){
  // let time = frameCount;
  //controls the speed of the rectangle
  if(frameCount < (time + 750)){
    if(keyIsDown(LEFT_ARROW) && rectX >= 0){
      rectX -= 10;
    }
    if(keyIsDown(RIGHT_ARROW) && rectX <= 300){
      rectX += 10;
    }
  }

  if(frameCount >= (time + 750)){
    if(keyIsDown(LEFT_ARROW) && rectX >= 0){
      rectX -= 15;
    }
    if(keyIsDown(RIGHT_ARROW) && rectX <= 300){
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

  if(frameCount > (time + 500)){
    ball2.display0();
    ball2.collide();
  }

  if(frameCount > (time + 1000)){
    ball4.display_();
    ball4.collide_();
  }
  console.log("state = ", state)
}


function gameOver(){
  //state = "over";
  //over_();
  background(222, 222, 222);
  fill(0);
  textSize(100);
  text('GAME', 50, 200);
  text('OVER', 50, 350);
  textSize(25);
  text('SCORE:', 50, 450);
  text(score, 250, 450);
console.log("state = ", state);
keyPressed();
}

// function keyPressed(){
//   if(keyCode === 32){
//     restart();
//     // state = "menu";
//     // flag = true;
//   }
// }

  // if(mousePressed()){
  //   flag = true;
  // }
  // function keyPressed(){
  //   if(keyCode === 32){
  //     state = "menu";
  //   }
  // }



function instructions(){
  //console.log(state)
  // background(222, 222, 222);
  // fill(0);
  textSize(70);
  text('CATCH IT!', 30, 140);
  textSize(15);
  text('Catch the balls before they fall of the screen', 50, 200);
  text('Use arrow keys to move', 50, 250);
  text('Red, Blue, and Green balls earn 1 point each', 50, 300);
  text('Yellow balls earn 5 points', 50, 350);
  //home = createButton('Menu');


  console.log("state = ", state);

}

// function keyPressed(){
//   if(keyCode === 32 && state == "over"){
//     state = "menu";
//     flag = true;
//   }
 //}

//creates varible to make framecount "restart" when game starts
 function mousePressed(){
   time = frameCount;
 }
