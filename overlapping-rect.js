var rectArray = [];
var coordArray =[];
var widthStep = screen.width/10;
var heightStep = screen.height/10;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };  

for (x= widthStep; x < screen.width - widthStep; x += 100) {
    for (y= heightStep; y < screen.height-heightStep; y += 100) {
        let w = getRandomInt(100,500);
        rectArray.push([x, y, w]);
    }
}

for (i=0;i<15;i++){
    let x = rectArray[Math.floor(Math.random() * rectArray.length)][0];
    let y = rectArray[Math.floor(Math.random() * rectArray.length)][1];
    let w = rectArray[Math.floor(Math.random() * rectArray.length)][2];
    coordArray.push([x, y, w])
}

function setup(){
    createCanvas(displayWidth,displayHeight)
};

function draw(){
    background(0)
    console.log(coordArray);
    for (i=0; i<15;i++){
        rect(coordArray[i][0],coordArray[i][1],coordArray[i][2],100)
    }
    noLoop();
};