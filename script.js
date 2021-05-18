var spinArr = [];
var tempArr = [];   
var stepSize = 50;
var spin = 0.0;

for (i=-2; i < 2; i += 0.2) {
    tempArr.push(i)
};
for (i=0; i < tempArr.length; i++){
    spinArr.push([stepSize,tempArr[(Math.floor(Math.random() * tempArr.length))]])
    stepSize += 50;
};

function randElem(x) {
    return x[Math.floor(Math.random * x.length)]
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

};

function arcSpin(w,h,start,stop,s){
    push();
    stroke(color(255));
    translate(width/2, height/2);
    rotate(s);
    arc(0, 0, w, h, start, stop);
    pop();
}

function populateArcs(x) {
    for (i=0; i < spinArr.length; i++){
        arcSpin(x[i][0],x[i][0],0,180,spin*(x[i][1]))
    }
}

function draw() {
    background(0);
    noFill();
    strokeWeight(10);
  populateArcs(spinArr);
  console.log(spinArr)
  spin += 0.1
// noLoop()
  }

