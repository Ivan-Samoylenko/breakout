const direction = {
  toLeftTop: 0,
  toRightTop: 1,
  toRightDown: 2,
  toLeftDown: 3,
};

export class Ball {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = (this.game.width - this.width) / 2;
    this.y = this.game.height - this.game.platform.height - this.height;
    this.maxSpeed = 12;
    // angle can be from 5 to 85
    this.angle = 45;
    // direction can be 0, 1, 2 or 3
    this.direction = direction.toRightTop;
    this.dx =
      -Math.cos((this.angle + this.direction * 90) * (Math.PI / 180)) *
      this.maxSpeed;
    this.dy =
      -Math.sin((this.angle + this.direction * 90) * (Math.PI / 180)) *
      this.maxSpeed;
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
    if (this.x >= this.game.width - this.width) {
      this.x = this.game.width - this.width;
      if (this.direction === direction.toRightTop) {
        this.direction = direction.toLeftTop;
      } else if (this.direction === direction.toRightDown) {
        this.direction = direction.toLeftDown;
      }
      this.angle = 90 - this.angle;
      this.getVector();
    }
    if (this.x <= 0) {
      this.x = 0;
      if (this.direction === direction.toLeftTop) {
        this.direction = direction.toRightTop;
      } else if (this.direction === direction.toLeftDown) {
        this.direction = direction.toRightDown;
      }
      this.angle = 90 - this.angle;
      this.getVector();
    }
    if (this.y <= 0) {
      this.y = 0;
      if (this.direction === direction.toLeftTop) {
        this.direction = direction.toLeftDown;
      } else if (this.direction === direction.toRightTop) {
        this.direction = direction.toRightDown;
      }
      this.angle = 90 - this.angle;
      this.getVector();
    }
    // collision with top border of platform
    if (
      this.y - this.dy < this.game.platform.y - this.height &&
      this.y >= this.game.platform.y - this.height &&
      this.x > this.game.platform.x - this.width &&
      this.x < this.game.platform.x + this.game.platform.width + this.width
    ) {
      this.y = this.game.platform.y - this.height;

      if (
        this.x + this.width / 2 <=
        this.game.platform.x + this.game.platform.width / 2
      ) {
        if (this.x + this.width / 2 - this.game.platform.x < 5) this.angle = 5;
        else if (this.x + this.width / 2 - this.game.platform.x > 125)
          this.angle = 85;
        else
          this.angle = Math.floor(
            (85 / 130) * (this.x + this.width / 2 - this.game.platform.x)
          );

        this.direction = direction.toLeftTop;
      } else if (
        this.x + this.width / 2 >
        this.game.platform.x + this.game.platform.width / 2
      ) {
        if (this.x + this.width / 2 - this.game.platform.x < 135)
          this.angle = 5;
        else if (this.x + this.width / 2 - this.game.platform.x > 255)
          this.angle = 85;
        else
          this.angle = Math.floor(
            (85 / 130) *
              (this.x +
                this.width / 2 -
                this.game.platform.x -
                this.game.platform.width / 2)
          );

        this.direction = direction.toRightTop;
      }
      this.getVector();
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
    if (isBallFliesToPlatformOnTheLeft && isBallOnTheHeightOfPlatform) {
      this.x = this.game.platform.x - this.width;

      const ballTouchTopHalfOfPlatformHeight =
        this.y + this.height <
        this.game.platform.y + this.game.platform.height / 2;

      if (ballTouchTopHalfOfPlatformHeight) {
        this.angle = 5;
        this.direction = direction.toLeftTop;
      } else {
        this.angle = 90 - this.angle;
        this.direction = direction.toLeftDown;
      }

      this.getVector();
    }
    if (isBallFliesToPlatformOnTheRight && isBallOnTheHeightOfPlatform) {
      this.x = this.game.platform.x;

      const ballTouchTopHalfOfPlatformHeight =
        this.y + this.height <
        this.game.platform.y + this.game.platform.height / 2;

      if (ballTouchTopHalfOfPlatformHeight) {
        this.angle = 85;
        this.direction = direction.toRightTop;
      } else {
        this.angle = 90 - this.angle;
        this.direction = direction.toRightDown;
      }

      this.getVector();
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

        if (this.direction === direction.toRightTop) {
          this.direction = direction.toLeftTop;
        } else if (this.direction === direction.toRightDown) {
          this.direction = direction.toLeftDown;
        }
        this.angle = 90 - this.angle;
        this.getVector();

        block.collisionWithBall();
      } else if (
        this.x - this.dx > block.x + block.width &&
        this.x <= block.x + block.width &&
        this.y + this.height > block.y &&
        this.y < block.y + block.height
      ) {
        this.x = block.x + block.width;

        if (this.direction === direction.toLeftTop) {
          this.direction = direction.toRightTop;
        } else if (this.direction === direction.toLeftDown) {
          this.direction = direction.toRightDown;
        }
        this.angle = 90 - this.angle;
        this.getVector();

        block.collisionWithBall();
      } else if (
        this.y + this.height - this.dy < block.y &&
        this.y + this.height >= block.y &&
        this.x + this.width > block.x &&
        this.x < block.x + block.width
      ) {
        this.y = block.y - this.height;

        if (this.direction === direction.toLeftDown) {
          this.direction = direction.toLeftTop;
        } else if (this.direction === direction.toRightDown) {
          this.direction = direction.toRightTop;
        }
        this.angle = 90 - this.angle;
        this.getVector();

        block.collisionWithBall();
      } else if (
        this.y - this.dy > block.y + block.height &&
        this.y <= block.y + block.height &&
        this.x + this.width > block.x &&
        this.x < block.x + block.width
      ) {
        this.y = block.y + block.height;

        if (this.direction === direction.toLeftTop) {
          this.direction = direction.toLeftDown;
        } else if (this.direction === direction.toRightTop) {
          this.direction = direction.toRightDown;
        }
        this.angle = 90 - this.angle;
        this.getVector();

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
    this.angle = 45;
    this.direction = direction.toRightTop;
    this.getVector();
  }

  getVector() {
    this.dx =
      -Math.cos((this.angle + this.direction * 90) * (Math.PI / 180)) *
      this.maxSpeed;
    this.dy =
      -Math.sin((this.angle + this.direction * 90) * (Math.PI / 180)) *
      this.maxSpeed;
  }
}
