export class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 3;
    this.width = 120;
    this.height = 120;
    this.blockImage = document.getElementById("block");
    this.frameX = 0;
    this.maxFrame = 4;
    this.fps = 30;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }

  update(deltaTime) {
    // animation
    if (this.frameTimer < this.frameInterval) {
      this.frameTimer += deltaTime;
    } else {
      this.frameTimer = 0;

      if (this.state < 3 && this.frameX < this.maxFrame) {
        this.frameX += 1;
      }
    }
  }

  draw(context) {
    if (this.state > 0) {
      context.drawImage(
        this.blockImage,
        this.frameX * this.width,
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  collisionWithBall() {
    if (this.state === 2 || this.state === 1) {
      this.state = 0;
    } else if (this.state === 3) {
      this.state = 2;
    }
  }
}
