export class Sprite {
  /**
   * Creates a sprite with the given parameters.
   * @param {Context} ctx
   * @param {Number} x
   * @param {Number} y
   * @param {Number} width
   * @param {Number} height
   * @param {String} color
   */
  constructor(ctx, x, y, width, height, color) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  /**
   * Draws the sprite.
   */
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Removes a sprite.
   */
  remove() {}

  /**
   * Translates the sprite on a given axis of x or y.
   * @param {String} direction
   * @param {Number} value
   */
  translate(direction, value) {
    switch (direction) {
      case "x":
        this.ctx.fillRect(this.x + value, this.y, this.width, this.height);
        break;
      case "y":
        this.ctx.fillRect(this.x, this.y + value, this.width, this.height);
        break;
    }
  }
}
