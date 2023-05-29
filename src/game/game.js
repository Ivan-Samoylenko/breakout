import { Background } from "./background";
import { Platform } from "./platform";
import { InputHandler } from "./input";
import { Ball } from "./ball";
import { Field } from "./field";

export default function breakout() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1200;
  canvas.height = 1200;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.background = new Background(this);
      this.platform = new Platform(this);
      this.input = new InputHandler();
      this.ball = new Ball(this);
      this.field = new Field(this);
    }

    update(deltaTime) {
      this.ball.update(deltaTime);
      this.platform.update(this.input.keys);
      this.field.update(deltaTime);
    }

    draw(context) {
      this.background.draw(context);
      this.platform.draw(context);
      this.ball.draw(context);
      this.field.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    window.requestAnimationFrame(animate);
  }

  animate(0);
}
