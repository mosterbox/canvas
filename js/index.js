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
  }
}
  drawDisplay() {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      const coords = this.getCoords();
      const size = this.getDims();
      context.rect(coords.x, coords.y, size.width, size.height);
      context.fillStyle = this.getColor();
      context.fill();
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

  drawDisplay() {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      const coords = this.getCoords();
      context.arc(coords.x, coords.y, this.getRadius(), 0, 2*Math.PI);
      context.fillStyle = this.getColor();
      context.fill();
  }
}
