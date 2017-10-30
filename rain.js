var bars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //background(0);

  for (var i = 0; i < 150; i++) {
    bars[i] = new Bar();
  }
}

function draw() {
  background(100, 20);
  for (var i = 0; i < bars.length; i++) {
    bars[i].display();
    bars[i].rain();
  }
}

function Bar() {
  this.height = round(random(10, 300));
  this.x = round(random(0, windowWidth));
  this.y = round(random(-20, -500)) - this.height;
  this.width = 5;
  this.col = color(round(random(25, 200)));
  this.speed = round(random(5, 10));

  this.display = function () {
    noStroke();
    fill(this.col);
    rect(this.x, this.y, this.width, this.height);
  };

  this.rain = function () {
    if (this.y < windowHeight + 100) {
      this.y += this.speed;
    } else {
      this.y = random(-20, -500) - this.height;
    }
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
