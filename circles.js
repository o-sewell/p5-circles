var bubbles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble(width/2, height/2);
  }
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX,mouseY));
   for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

function draw() {
   background(0);
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}

function Bubble(x,y) {
  this.x = x;
  this.y = y;
  this.stroke = color(255,50);
  this.display = function() {
    stroke(this.stroke);
    noFill();
    ellipse(this.x,this.y, 50,50);
  };
  this.move = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
  this.clicked = function() {
    var d = dist(mouseX,mouseY,this.x,this.y);
    /* half of diameter */
    if (d < 50 / 2) {
      this.stroke = color(255,0,200);
    }
  }
}