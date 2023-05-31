export class Platform {
  constructor(game) {
    this.game = game;
    this.width = 260;
    this.height = 40;
    this.x = (this.game.width - this.width) / 2;
    this.dx = 0;
    this.maxSpeed = 10;
    this.y = this.game.height - this.height;
    this.image = document.getElementById("platform");
  }

  update(input) {
    //horizontal moving
    this.x += this.dx;
    if (input.includes("ArrowRight") && !input.includes("ArrowLeft"))
      this.dx = this.maxSpeed;
    else if (input.includes("ArrowLeft") && !input.includes("ArrowRight"))
      this.dx = -this.maxSpeed;
    else this.dx = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
  }

  draw(context) {
    context.drawImage(
      this.image,
      0,
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
  }
}
