export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  get getWidth() {
    return this.width;
  }
  set setWidth(width) {
    this.width = width;
  }
  get getHeight() {
    return this.height;
  }
  set setHeight(height) {
    this.height = height;
  }
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}
export class Position {
  constructor() {
    this.x = x || 0;
    this.y = y || 0;
  }
  get getX() {
    return this.x;
  }
  get getY() {
    return this.y;
  }
  set setX(newX) {
    this.x = newX;
  }
  set setY(newY) {
    this.y = newY;
  }
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(newSize) {
    let newWidth = Math.max(1, newSize.width);
    let newHeight = Math.max(1, newSize.height);
    newWidth = Math.min(newWidth, this.screenSize.width - this.position.x);
    newHeight = Math.min(newHeight, this.screenSize.height - this.position.y);
    this.size.resize(newWidth, newHeight);
  }
  move(newPosition) {
    let newX = Math.max(0, newPosition.x);
    let newY = Math.max(0, newPosition.y);
    newX = Math.min(newX, this.screenSize.width - this.size.width);
    newY = Math.min(newY, this.screenSize.height - this.size.height);
    this.position.move(newX, newY);
  }
}
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}
