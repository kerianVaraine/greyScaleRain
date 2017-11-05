'esversion: 6';
var bars = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  let cnvX = (windowWidth - width) / 2;
  let cnvY = (windowHeight - height) / 2;
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
  this.height = round(random(10, 300));
  this.x = round(random(0, windowWidth));
  this.y = round(random(-20, -500)) - this.height;
  this.width = 5;
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
