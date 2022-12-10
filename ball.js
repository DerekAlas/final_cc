class Ball{
  constructor(color){
    this.color = color;
    this.x = random(10, 360);
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.speed_ = 3; //yellow speed
    this.speed0 = 4; //green speed

    //controls how fast the red and blue balls fall
    //gets faster with time
    if(frameCount < 300){
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
      ellipse(this.x, this.y, this.width, this.height);
    }

    if(this.y >= 350){
      ellipse(this.x += random(-100, 100), this.y, this.width, this.height);
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

  collide(){
    if(this.y + 25 > 440 && this.y - 25 < 460 && this.x > rectX && this.x < rectX + 100){
      score++;
      this.reset();
    }
    if(this.y > 530){
      noLoop();
      gameOver();
    }
  }

  collide_(){
    if(this.y + 25 > 440 && this.y - 25 < 460 && this.x > rectX && this.x < rectX + 100){
      score += 5;
      this.reset();
    }
    if(this.y > 530){
      this.reset();
    }
  }
}
