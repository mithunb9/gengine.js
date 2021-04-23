import { Game } from "./gengine/gengine.js";
import { Sprite } from "./gengine/core/Sprite.js";
import { clamp, Clamper } from "./gengine/utils/utils.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const load = () => {
  console.log("Assets Loaded");
};

const loop = () => {
  const sprite = new Sprite(ctx, 30, 30, 50, 50, "rgba(0, 0, 0, 1)");
  sprite.draw();
  sprite.translate("x", 200);
};

const config = {
  width: 800,
  height: 600,
  defaultBackgroundColor: "rgba(69, 69, 69,1)",
  methods: { load, loop },
};

const game = new Game(canvas, ctx, config);
game.init();

console.log(clamp(15, 15, 30));

const clamper = new Clamper(10, 20);

console.log(clamper.clamp(9));
