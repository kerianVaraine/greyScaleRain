/*jshint esversion: 6 */
var bars = [];

function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  const cnvX = (windowWidth - width) / 2;
  const cnvY = (windowHeight - height) / 2;
  cnv.position(cnvX, cnvY);

  for (var i = 0; i < round(windowWidth / 10); i++) {
    bars[i] = new Bar();
  }
}

//  function sets how many bars to draw  //
function draw() {
  background(0, 20);

  for (var i = 0; i < bars.length; i++) {
    bars[i].display();
    bars[i].rain();
  }
}

//  creating Bar function to call //
function Bar() {
  this.height = round(random(10, 300)); //height of rain drop//
  this.x = round(random(0, windowWidth)); //x position of rain drop//
  this.y = round(random(-20, -500)) - this.height;  //sets drops above canvas//
  this.width = 5; //width
  this.col = color(round(random(25, 200)));
  this.speed = round(random(5, 10));

  //  function to display bar at Bars randmoised location  //
  this.display = function () {
    noStroke();
    fill(this.col);
    rect(this.x, this.y, this.width, this.height);
  };

  //  function to move individual bars    //
  this.rain = function () {
    if (this.y < windowHeight + 100) {
      this.y += this.speed;
    } else {
      this.y = random(-20, -500) - this.height;
    }
  };
}

//  This changes the canvas size when browser refreshed //
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
