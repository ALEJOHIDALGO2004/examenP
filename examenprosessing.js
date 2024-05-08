let redCircle, blueCircle;
let redSpeed = 2;
let blueSpeed = 1;

function setup() {
  createCanvas(600, 600);


  redCircle = new Circle(100, height / 2, 50, color(255, 0, 0));
  blueCircle = new Circle(500, height / 2, 50, color(0, 0, 255));
}

function draw() {
  background(220);

  // Movimiento
  redCircle.move(redSpeed);
  blueCircle.move(blueSpeed);
  redCircle.display();
  blueCircle.display();


  checkCollision(redCircle, blueCircle);
  checkWalls(redCircle);
  checkWalls(blueCircle);
}


class Circle {
  constructor(x, y, diameter, color) {

    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;

    this.speedY = random(-3, 3);
    this.speedX = random(-3, 3);
  }


  move(speed) {
    this.x += this.speedX * speed;
    this.y += this.speedY * speed;
  }


  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }


  changeColor(newColor) {
    this.color = newColor;
  }


  changeDirectionX() {
    this.speedX *= -1;
  }


  changeDirectionY() {
    this.speedY *= -1;
  }
}


function checkCollision(circle1, circle2) {

  let distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);

  if (distance < circle1.diameter / 2 + circle2.diameter / 2) {

    circle1.changeColor(color(148, 0, 211));
    circle2.changeColor(color(148, 0, 211));

    redSpeed *= -1;
    blueSpeed *= -1;

    setTimeout(() => {
      circle1.changeColor(color(230, 0, 0));
      circle2.changeColor(color(0, 0, 230));
    }, 1500);
  }
}


function checkWalls(circle) {

  if (circle.x > width - circle.diameter / 2 || circle.x < circle.diameter / 2) {
    circle.changeDirectionX();
  }

  if (circle.y > height - circle.diameter / 2 || circle.y < circle.diameter / 2) {
    circle.changeDirectionY();

    if (circle.y < circle.diameter / 2) {
      circle.changeColor(color(255, 165, 0));

    }
  }
}
