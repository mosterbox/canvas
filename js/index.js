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
    return `X: ${this.initX} Y: ${this.initY}`;
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
    return `width: ${this.initWidth}
        height: ${this.initHeight}`;
  }

  draw() {
    return `Drawing a Rectangle at:
      (${this.getCoords()})
      With dimentions:
        ${this.getDims()}
      Filled with color: ${this.getColor()}`;
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
    return `Drawing a Circle at:
      (${this.getCoords()})
    With dimentions:
      ${this.getRadius()}
    Filled with color: ${this.getColor()}`;
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function drawTriangle(context, left_padding, top_padding, height, width) {
    context.beginPath();
    context.moveTo(0 + left_padding, 0 + height + top_padding);
    context.lineTo(width / 2 + left_padding, 0 + top_padding);
    context.lineTo(width + left_padding, 0 + height + top_padding);
    context.fillStyle = "#FF0000";
    context.fill();
}

drawTriangle(context, 40, 50, 200, 200);
