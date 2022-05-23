var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(600, 400);

  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(300, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  // fill("pink");
  stroke(255, 0, 0);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  // fill("yellow");
  stroke(0,255, 0);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();

  push();
  rotate(hrAngle);
  // fill("green");
  stroke(0, 0, 255);
  strokeWeight(10);
  line(0, 0, 50, 0);
  pop();

  // push();
  // strokeWeight(10);
  // noFill();
  // stroke(255, 0, 0);
  // arc(0, 0, 250, 250, 0,360);
  // pop();

  stroke(255,0,255);
  point(0,0)
  strokeWeight(10);
  noFill();
  stroke(255, 0, 0);
  arc(0,0,300,300,0,scAngle);
  stroke(0, 255, 0);
  arc(0,0,280,280,0,mnAngle);
  stroke(0, 0, 255);
  arc(0,0,260,260,0,hrAngle);
  
}
