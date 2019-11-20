export default function gameSketch(p) {
  let resolution = 20;
  let money;
  let w;
  let h;
  let employee;

  p.setup = () => {
    p.createCanvas(500, 500);

    // Due to the fact that we are scaling the employee, we need to scale the grid accordingly
    w = p.floor(p.width / resolution);
    h = p.floor(p.width / resolution);

    // Slow down the animation due to scaling
    p.frameRate(5);

    // Employee
    class Employee {
      constructor() {
        this.body = [];

        // employee starts in the middle of the game page
        this.body[0] = p.createVector(p.floor(w / 2), p.floor(h / 2));

        // Directions of the employee
        this.xdirection = 0;
        this.ydirection = 0;

        // Score
        this.payMen = 0;
        this.payWomen = 0;
      }

      setDirection(x, y) {
        this.xdirection = x;
        this.ydirection = y;
      }

      update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdirection;
        head.y += this.ydirection;
        this.body.push(head);
      }

      endGame() {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        // End Game if employee hits the walls
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
          return true;
        }

        // End Game if employee hits itself
        for (let i = 0; i < this.body.length - 1; i++) {
          let partBody = this.body[i];
          if (partBody.x === x && partBody.y === y) {
            return true;
          }
        }
        return false;
      }

      grow = () => {
        // Need to expand the array of the body of the employee
        let head = this.body[this.body.length - 1].copy();
        this.body.push(head);
        this.payMen++;
        this.payWomen = this.payMen * 0.85;
      };

      collectMoney = location => {
        // Coordinates
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;

        if (x === location.x && y === location.y) {
          this.grow();
          return true;
        }
        return false;
      };

      show() {
        for (let i = 0; i < this.body.length; i++) {
          p.noStroke();
          p.fill(13, 1, 48);
          p.rect(this.body[i].x, this.body[i].y, 1, 1);
        }
      }
    }

    employee = new Employee();

    // Money
    moneyLocation();
  };

  const moneyDrawing = () => {
    p.noStroke();
    p.fill(133, 187, 101);
    p.rect(money.x, money.y, 1, 1);
  };

  const moneyLocation = () => {
    // Set a random spot for the money
    let x = p.floor(p.random(w));
    let y = p.floor(p.random(h));
    money = p.createVector(x, y);
  };

  p.keyPressed = () => {
    switch (p.keyCode) {
      case p.LEFT_ARROW:
        employee.setDirection(-1, 0);
        break;
      case p.RIGHT_ARROW:
        employee.setDirection(1, 0);
        break;
      case p.DOWN_ARROW:
        employee.setDirection(0, 1);
        break;
      case p.UP_ARROW:
        employee.setDirection(0, -1);
        break;
      default:
    }
  };

  p.draw = () => {
    // Background
    p.background(255, 254, 231);
    p.textSize(20);
    p.fill(13, 1, 48);
    p.text(`Payment`, 10, 30);
    p.text(`Men: €${employee.payMen},-`, 10, 55);
    p.text(`Women: €${employee.payWomen},-`, 10, 75);

    p.scale(resolution);

    // employee
    // If the money has been collected, create a new money location
    if (employee.collectMoney(money)) {
      moneyLocation();
    }
    employee.update();
    employee.show();

    if (employee.endGame()) {
      p.background(255, 0, 0);
      p.fill(13, 1, 48);

      // Message
      const message1 = "A new decade is knocking on our door";
      const message2 = "and we still have no equal pay...";
      const message3 = "#stop #genderpaygap";
      const message4 = "This is no game for us";

      p.textSize(1.4);
      p.text(message4, 1.5, 5);

      p.textSize(1);
      p.text(message1, 1.5, 9);
      p.text(message2, 1.5, 10);
      p.text(message3, 1.5, 12);

      p.fill(0, 102, 153);

      // Game shuts down completley
      p.noLoop();
    } else {
      moneyDrawing();
    }
  };
}
