import { Block } from "./block";
import { stages } from "./stages";

export class Field {
  constructor(game) {
    this.game = game;
    this.blocks = stages[5].map((block) => new Block(block.x, block.y));
  }

  update(deltaTime) {
    if (this.blocks.length > 0) {
      this.blocks.forEach((block, index) => {
        if (block.state > 0) {
          block.update(deltaTime);
        } else {
          this.blocks.splice(index, 1);
        }
      });
    } else {
      this.setNewGame();
    }
  }

  draw(context) {
    if (this.blocks.length > 0) {
      this.blocks.forEach((block) => {
        block.draw(context);
      });
    }
  }

  setNewGame() {
    this.game.ball.reset();
    this.game.platform.reset();
    const random = Math.floor(Math.random() * 6);
    this.blocks = stages[random].map((block) => new Block(block.x, block.y));
  }
}
