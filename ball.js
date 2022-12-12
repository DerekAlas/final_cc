class Ball{
  constructor(color){
    this.color = color;
    this.x = random(10, 360);
    this.x_ = this.x + random(-200, 200); //randomizes x-pos of yellow ball at last second
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.speed_ = 6; //yellow speed
    this.speed0 = 4; //green speed

    //controls how fast the red and blue balls fall
    //gets faster with time
    if(frameCount < 500){
      this.speed = random(1, 2);
    }

    /*
    if(frameCount >= 300 && frameCount < 750){
      this.speed = random(1, 5);
    }
    */

    if(frameCount >= 500){
      this.speed = random(1, 3);
    }
  }

  //controls red and blue balls
  display(){
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);
    this.y += this.speed;
  }

  //controls green ball
  display0(){
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);
    this.y += this.speed0;
  }

  //controls yellow ball
  display_(){
    fill(this.color);

    if(this.y < 350){
      ellipse(this.x_, this.y, this.width, this.height);
    }

    // if(this.y >= 300 && this.y < 350){
    //   ellipse(this.x + random(-100, 100), this.y, this.width, this.height);
    // }

    if(this.y >= 350){
      ellipse(this.x, this.y, this.width, this.height);
    }

    this.y += this.speed_;
  }

  reset(){
    this.y = 50;
    this.x = random(10, 360);

    /*
    if(frameCount < 300){
      this.speed = random(1, 3);
    }

    if(frameCount >= 300 && frameCount < 750){
      this.speed = random(1, 5);
    }

    if(frameCount >= 750){
      this.speed = random(1, 8);
    }
    */
  }

  reset_(){
    this.y = -1000;
    this.x = random(10, 360);
  }

  collide(){
    if(this.y + 25 > 440 && this.y - 25 < 460 && this.x > rectX && this.x < rectX + 100){
      score++;
      this.reset();
      //point_.play();
    }
    if(this.y > 530){
      noLoop();
      //gameOver();
      //over_();
      //over = true;
      state = "over";
    }
  }

  collide_(){
    if(this.y + 25 > 440 && this.y - 25 < 460 && this.x > rectX && this.x < rectX + 100){
      score += 5;
      this.reset_();
    }
    if(this.y > 530){
      this.reset_();
    }
  }
}
