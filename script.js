var spin = 0.0
var x = width/2
var y = height/2

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
};

function arcSpin(w,h,start,stop,s){
    push();
    translate(width/2, height/2);
    rotate(s);
    arc(0, 0, w, h, start, stop);
    pop();
}

function draw() {
  background(255);
  noFill();
  arcSpin(450,450,0,30,spin*2);
  arcSpin(500,500,0,180,spin);
  arcSpin(550,550,0,90,spin*(-1));
  arcSpin(550,550,0,90,spin*(-1));
  
  spin += 0.1
}
