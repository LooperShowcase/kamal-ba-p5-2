function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");

  translate(width / 2, height / 2);

  let hr = hour();
  let mn = minute();
  let sc = second();
  strokeWeight(1);

  textSize(20);

  push();
  stroke("#48cae4");
  text(hr + ":" + mn + ":" + sc, -200, 180);
  pop();
  strokeWeight(5);
  noFill();

  rotate(-90);
  stroke("#00b4d8");

  console.log(text);
  push();
  stroke("#ffc6ff");
  let secondAangle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAangle);

  pop();

  push();
  rotate(secondAangle);
  stroke("#ef476f");
  line(0, 0, 90, 0);
  pop();

  let minuteAngel = map(mn, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, minuteAngel);

  push();
  rotate(minuteAngel);
  stroke("#06d6a0");
  line(0, 0, 80, 0);
  pop();

  push();
  stroke("#fcbf49 ");
  let hourAngrl = map(hr, 0, 60, 0, 360);
  arc(0, 0, 210, 210, 0, hourAngrl);
  pop();

  push();
  rotate(hourAngrl);
  stroke("#3a86ff");
  line(0, 0, 90, 0);
  pop();

  push();
  strokeWeight(3);
  rotate(90);
  stroke("#fdffb6");
  text("12", -10, -170);

  text("9", -170, 0);

  text("6", 0, 170);

  text("3", 170, 0);
}
