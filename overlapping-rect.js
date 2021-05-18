var rectArray = [];
var coordArray =[];
var colorArrayStore = [
    ['#EF9CDA','#251605','#F6E27F','#2274A5','#E36414'],
    ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff","#fffffc"],
    ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"],
    ["#03071e","#370617","#6a040f","#9d0208","#d00000","#dc2f02","#e85d04","#f48c06","#faa307","#ffba08"],
    ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"],
    ["#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"],
    ["#bb0a1e","#dc143c","#8b0000","#800000","#cc1100"]
];
var colorArray = colorArrayStore[Math.floor(Math.random() * colorArrayStore.length)];
var backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
var widthStep = screen.width/3;
var heightStep = screen.height/3;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };  

for (x= screen.width/10; x < screen.width - widthStep; x += 100) {
    for (y= screen.height/10; y < screen.height-heightStep; y += 100) {
        let w = getRandomInt(100,500);
        rectArray.push([x, y, w]);
    }
}

for (i=0;i<15;i++){
    let x = rectArray[Math.floor(Math.random() * rectArray.length)][0];
    let y = rectArray[Math.floor(Math.random() * rectArray.length)][1];
    let w = rectArray[Math.floor(Math.random() * rectArray.length)][2];
    let h = rectArray[Math.floor(Math.random() * rectArray.length)][2];
    let c = (colorArray[Math.floor(Math.random() * colorArray.length)])
    coordArray.push([x, y, w, h, c])
}

function setup(){
    createCanvas(displayWidth,displayHeight)
};

function draw(){
    background(backgroundColor)
    noStroke();

    console.log(coordArray);
    for (i=0; i<15;i++){
        noStroke()
        rectColor = color(coordArray[i][4])
        rectColor.setAlpha(100)
        fill(rectColor)
        rect(coordArray[i][0],coordArray[i][1],coordArray[i][2],coordArray[i][3])
    };
    // draw borders
    fill(255);
    rect(0,0,screen.width,screen.height/15)
    rect(0,0,screen.width/10,screen.height)
    rect(screen.width-(screen.width/10),0,screen.width/10,screen.height)
    rect(0,screen.height-(screen.height/10),screen.width,screen.height)
};