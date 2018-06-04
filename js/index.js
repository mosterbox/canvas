class Shape {
  constructor(color, initX, initY) {
    this.color = color || '#000000';
    this.initX = initX || 0;
    this.initY = initY || 0;
  }

  getColor() {
    return this.color;
  }

  setColor(val) {
    this.color = val;
  }

  getCoords() {
    return {
        x: this.initX,
        y: this.initY
    };
  }

  moveTo(newX, newY) {
    this.initX = newX;
    this.initY = newY;
  }
}

class Rectangle extends Shape {
  constructor(params, initWidth, initHeight) {
    super(params, initWidth, initHeight);
    this.initWidth = initWidth  || 0;
    this.initHeight = initHeight || 0;
  }

  setWidth(newWidth) {
    this.initWidth = newWidth;
  }

  setHeight(newHeight) {
    this.initHeight = newHeight;
  }

  getDims() {
    return {
        width: this.initWidth,
        height: this.initHeight
    }
  }

  draw() {
    return {
      cords: this.getCoords(),
      dims: this.getDims(),
      color: this.getColor()
  };

  }
}

class Circle extends Shape {
  constructor(params, initRadius){
    super(params, initRadius);
    this.initRadius = initRadius || 0;
  }

  getRadius() {
    return this.initRadius;
  }

  setRadius(val) {
    this.initRadius = val;
  }

  draw() {
    return {
      cords: this.getCoords(),
      radius: this.getRadius(),
      color: this.getColor()
  };
  }
}

const rectangle = new Rectangle();

const drRec = rectangle.draw();

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.rect(20, 20, 150, 150);
context.fillStyle = '#000000';
context.fill();
