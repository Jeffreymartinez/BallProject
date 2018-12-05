let balls = [];
let smallBalls = [];
let largeBalls = [];
let p = 0;


function setup() {
  createCanvas(1400, 800);

}


function draw(){
  background(0);
  stroke("yellow");
  strokeWeight(1.5);
  fill("orange");
  ellipse(mouseX, mouseY, 30, 30);
//shows your score
  textSize(37);
  fill("yellow");
  text('SCORE:', 20, 40);
  textSize(37);
  text(p, 170, 40);
//instruction text at the beginning
if(p<200){
  textSize(50);
  fill("red");
  text('DODGE THE CIRCLES',450, 400);
  textSize(40);
  text('by moving your mouse', 516, 450);
}
// p is a counter that tells time in the game. Depending on how much time is passed, make balls of different sizes at various intervals
  p = p+1
// this is for the large blue balls that are at the start.
//  this controls how many spawn at different times.
  if(p>1000 && p<3000){
    if (frameCount % 10 == 0) {
        let  b = new Ball(width, random(0,height), -3);
        balls.push(b);
        console.log(balls);
      }
    }
  else if(p>3000 && p<5000){
            if (frameCount % 7 == 0) {
                let  b = new Ball(width, random(0,height), -3);
                balls.push(b);
                console.log(balls);
              }
    }
    else if(p>6000 && p<7000){
      if (frameCount % 10 == 0) {
          let  b = new Ball(width, random(0,height), -3);
          balls.push(b);
          console.log(balls);
        }
    } else if(p>7000 && p<7500) {
      if (frameCount % 40 == 0) {
          let  b = new Ball(width, random(0,height), -3);
          balls.push(b);
          console.log(balls);
        }
    }else if(p>7500 && p<7900){
      if (frameCount % 35 == 0) {
          let  b = new Ball(width, random(0,height), -3);
          balls.push(b);
          console.log(balls);
        }
    }else if (p>9200 && p<9600){
      if (frameCount % 30 == 0) {
          let  b = new Ball(width, random(0,height), -3);
          balls.push(b);
          console.log(balls);
        }
    }
  else {
    if (frameCount % 20 == 0) {
        let  b = new Ball(width, random(0,height), -3);
        balls.push(b);
        console.log(balls);
      }
  }

//This is for the smaller red balls.
//   this makes the balls spawn in different amounts based on what time it is.


  if (p>5000 && p<6000){ //p>5000 && p<6000
    if (frameCount % 35 == 0) {
        let  b = new SmallBall(width, random(0,height), -3);
        smallBalls.push(b);
        console.log(smallBalls);
      }
    } else if(p>7000 && p<7900){  //p>7000 && p<7900
      if (frameCount % 20 == 0) {
          let  b = new SmallBall(random(0,width), 0, 3);
          smallBalls.push(b);
          console.log(smallBalls);
        }
    }else if(p>7900 && p<8500) {  //p>7900 && p<8500
      if (frameCount % 10 == 0) {
          let  b = new SmallBall(random(0,width), 0, 3);
          smallBalls.push(b);
          console.log(smallBalls);
        }
    }

else {
        if (frameCount % 20 == 0) {
            let  b = new SmallBall(width, random(0,height), -3);
            smallBalls.push(b);
            console.log(smallBalls);
      }
  }


  if (p>8500 && p<9500){ //p>5000 && p<6000
    if (frameCount % 35 == 0) {
        let  b = new LargeBall(width, random(0,height), -3);
        largeBalls.push(b);
        console.log(largeBalls);
      }
    } else if(p>9500 && p<11500){  //p>7000 && p<7900
      if (frameCount % 20 == 0) {
          let  b = new LargeBall(random(0,width), 0, 3);
          largeBalls.push(b);
          console.log(largeBalls);
        }
    }else {
        if (frameCount % 20 == 0) {
            let  b = new LargeBall(width, random(0,height), -3);
            largeBalls.push(b);
            console.log(largeBalls);
      }
  }
// end of ball-related if statements


	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].killBall();
	  }

    for (let i = 0; i < smallBalls.length; i++) {
  	 	      smallBalls[i].drawSmallBall();
         	  smallBalls[i].moveSmallBall();
          	smallBalls[i].speedSmallBall();
            smallBalls[i].killSmallBall();
          }

          for (let i = 0; i < largeBalls.length; i++) {
                  largeBalls[i].drawLargeBall();
                  largeBalls[i].moveLargeBall();
                  largeBalls[i].speedLargeBall();
                  largeBalls[i].killLargeBall();
                }

}
//creates the blue balls
class Ball {

	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}
//draws the big blue balls
	drawBall(){
    stroke("red");
    strokeWeight(1);
  	fill("blue");
    ellipse(this.x,this.y,70,70);
	}
//moves the larger balls
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y;
	}
//resets your characte/kills them and creates the game over screen
  	killBall(){
    		if (this.x >= mouseX-35 && this.x <= mouseX+35 && this.y > mouseY-35 && this.y < mouseY+35){
          background("black");
          fill("red");
          textSize(150);
          text('GAME OVER', 250, 400);
          textSize(50);
          text('refresh the page', 530, 500);
          textSize(37);
          fill("yellow");
          text('FINAL SCORE:', 20, 40);
          textSize(37);
          text(p, 285, 40);
          resetSketch;
    		}
  	}

}

//creates the class of balls.
class SmallBall {

  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
//draws the small red balls after a certain amount of time.
drawSmallBall(){
  if(p>5300 && p<8500){ //p>5300 && p<7000
    fill("red");
    ellipse(this.x, this.y, 30, 30);
  }
}
//moves the small red balls
moveSmallBall(){
  this.x = this.x+this.speed;
  this.y = this.y;
}
//Controls the direction and speed of the small red balls at different points in time
speedSmallBall(){
    if(p>5400 && p<7000){ //p>5400 && p<7000
      this.x = this.x-20;
      this.y = this.y;
    } else if(p>7000 && p<9000) { //p>7000 && p<9000
      this.y = this.y +this.speed;
      this.x = this.x;
    } else {
      this.x = this.x +this.speed;
      this.y = this.y;
    }
  }
//kills your character after a certain point
  killSmallBall(){
    if (this.x >= mouseX-30 && this.x <= mouseX+30 && this.y > mouseY-30 && this.y < mouseY+30 && p>5700 && p<7000){  //p>5700 && p<7000
      background("black");
      fill("red");
      textSize(150);
      text('GAME OVER', 250, 400);
      textSize(50);
      text('refresh the page', 530, 500);
      textSize(37);
      fill("yellow");
      text('FINAL SCORE:', 20, 40);
      textSize(37);
      text(p, 285, 40);
      resetSketch;
    }
  }
}

class LargeBall {

  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

drawLargeBall(){
    if (p>8500 && p<11500){ // p>8500 && p<11500
      fill("green");
      ellipse(this.x, this.y, 150, 150);
    }
}

moveLargeBall(){
  this.y = this.y+this.speed;
  this.x = this.x;
}

speedLargeBall(){
  if(p>9500 && p<11500){
    this.y = this.y+10;
    this.x = this.x
  }
}

killLargeBall(){
  if (this.x >= mouseX-75 && this.x <= mouseX+75 && this.y > mouseY-75 && this.y < mouseY+75 && p>8700 && p<11500){  //p>8700 && p<11500
    background("black");
    fill("red");
    textSize(150);
    text('GAME OVER', 250, 400);
    textSize(50);
    text('refresh the page', 530, 500);
    textSize(37);
    fill("yellow");
    text('FINAL SCORE:', 20, 40);
    textSize(37);
    text(p, 285, 40);
    resetSketch;
  }
}

}
