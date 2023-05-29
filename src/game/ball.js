export class Ball {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = (this.game.width - this.width) / 2;
    this.y = this.game.height - this.game.platform.height - this.height;
    this.maxSpeed = 10;
    this.dx = this.maxSpeed;
    this.dy = -this.maxSpeed;
    this.image = document.getElementById("ball");
    this.frameX = 0;
    this.maxFrame = 14;
    this.fps = 120;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }

  update(deltaTime) {
    this.x += this.dx;
    this.y += this.dy;
    // change frames
    if (this.frameTimer < this.frameInterval) {
      this.frameTimer += deltaTime;
    } else {
      this.frameTimer = 0;

      if (this.frameX < this.maxFrame) {
        this.frameX += 1;
      } else {
        this.frameX = 0;
      }
    }
    // game over
    if (this.y > this.game.height) {
      this.game.field.setNewGame();
    }

    // collision with screen borders
    if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width;
      this.dx = -this.maxSpeed;
    }
    if (this.x < 0) {
      this.x = 0;
      this.dx = this.maxSpeed;
    }
    if (this.y < 0) {
      this.y = 0;
      this.dy = this.maxSpeed;
    }
    // collision with top border of platform
    if (
      this.y - this.dy < this.game.platform.y - this.height &&
      this.y >= this.game.platform.y - this.height &&
      this.x > this.game.platform.x - this.width &&
      this.x < this.game.platform.x + this.game.platform.width + this.width
    ) {
      this.y = this.game.platform.y - this.height;
      this.dy = -this.maxSpeed;
      if (
        this.x <
        this.game.platform.x + (this.game.platform.width - this.width) / 2
      ) {
        this.dx = -this.maxSpeed;
      } else {
        this.dx = this.maxSpeed;
      }
    }
    // collision with left and right borders of platform
    // constants
    const isBallFliesToPlatformOnTheLeft =
      this.x + this.width - this.dx < this.game.platform.x &&
      this.x + this.width >= this.game.platform.x;
    const isBallFliesToPlatformOnTheRight =
      this.x - this.dx > this.game.platform.x + this.game.platform.width &&
      this.x <= this.game.platform.x + this.game.platform.width;
    const isBallOnTheHeightOfPlatform =
      this.y > this.game.platform.y - this.height &&
      this.y < this.game.platform.y + this.game.platform.height + this.height;
    // logic
    if (
      (isBallFliesToPlatformOnTheLeft || isBallFliesToPlatformOnTheRight) &&
      isBallOnTheHeightOfPlatform
    ) {
      isBallFliesToPlatformOnTheLeft
        ? (this.x = this.game.platform.x - this.width)
        : (this.x = this.game.platform.x);
      this.dx = -this.maxSpeed;

      const ballTouchTopHalfOfPlatformHeight =
        this.y + this.height <
        this.game.platform.y + this.game.platform.height / 2;

      if (ballTouchTopHalfOfPlatformHeight) {
        this.dy = -this.maxSpeed;
      } else {
        this.dy = this.maxSpeed;
      }
    }
    // collision with blocks
    this.game.field.blocks.forEach((block) => {
      if (
        this.x + this.width - this.dx < block.x &&
        this.x + this.width >= block.x &&
        this.y + this.height > block.y &&
        this.y < block.y + block.height
      ) {
        this.x = block.x - this.width;
        this.dx = -this.maxSpeed;
        block.collisionWithBall();
      } else if (
        this.x - this.dx > block.x + block.width &&
        this.x <= block.x + block.width &&
        this.y + this.height > block.y &&
        this.y < block.y + block.height
      ) {
        this.x = block.x + block.width;
        this.dx = this.maxSpeed;
        block.collisionWithBall();
      } else if (
        this.y + this.height - this.dy < block.y &&
        this.y + this.height >= block.y &&
        this.x + this.width > block.x &&
        this.x < block.x + block.width
      ) {
        this.y = block.y - this.height;
        this.dy = -this.maxSpeed;
        block.collisionWithBall();
      } else if (
        this.y - this.dy > block.y + block.height &&
        this.y <= block.y + block.height &&
        this.x + this.width > block.x &&
        this.x < block.x + block.width
      ) {
        this.y = block.y + block.height;
        this.dy = this.maxSpeed;
        block.collisionWithBall();
      }
    });
  }

  draw(context) {
    context.drawImage(
      this.image,
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

  reset() {
    this.x = (this.game.width - this.width) / 2;
    this.y = this.game.height - this.game.platform.height - this.height;
    this.dx = this.maxSpeed;
    this.dy = -this.maxSpeed;
  }
}
