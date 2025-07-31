// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) { 
  this.width = width;
  this.height = height;
    Size.prototype.resize = function (a, b) {
    this.width = a;
    this.height = b;
  };
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
    Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
  };
}

export class ProgramWindow {
  constructor() {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = { width: 800, height: 600 };
  }
  resize(g) {
    this.size.width = g.width < 1 ? 1 : g.width > 400 ? 90 : g.width;
    this.size.height = g.height < 1 ? 1 : g.height > 400 ? 75 : g.height;
  }  
   move(p) {
    this.position.x = p.x < 0 ? 0 : p.x > 700 ? 700 : p.x;
    this.position.y = p.y < 0 ? 0 :p.y > 500 ? 500 : p.y;
  }
}

export function changeWindow(Program) {
  const changed = Program;
  changed.size.width = 400;
  changed.size.height = 300;
  changed.position.x = 100;
  changed.position.y = 150;

  return changed;
}