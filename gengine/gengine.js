export class Game {
  constructor(canvas, ctx, config) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.config = config;
  }

  init() {
    this.canvas.width = this.config.width;
    this.canvas.height = this.config.height;

    if (!this.config.defaultBackgroundColor) {
      this.config.defaultBackgroundColor = "rgba(0, 0, 0,1)";
    }

    this.canvas.style.backgroundColor = this.config.defaultBackgroundColor;
    this.config.methods.load();

    console.log("gengine.js initalized");

    this.gameLoop();
  }

  gameLoop(loop) {
    loop();
    window.requestAnimationFrame(this.gameLoop);
  }
}
