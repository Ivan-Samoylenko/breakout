import { Block } from "./block";

const test = [
  [
    { x: 480, y: 0 },
    { x: 600, y: 0 },
    { x: 600, y: 120 },
    { x: 1080, y: 480 },
  ],
  [{ x: 1080, y: 480 }],
  [{ x: 1080, y: 480 }],
  [{ x: 1080, y: 480 }],
  [{ x: 1080, y: 480 }],
  [{ x: 1080, y: 480 }],
];

export class Field {
  constructor(game) {
    this.game = game;
    this.blocks = test[2].map((block) => new Block(block.x, block.y));
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
    const random = Math.floor(Math.random() * 6);
    this.blocks = test[random].map((block) => new Block(block.x, block.y));
  }
}
