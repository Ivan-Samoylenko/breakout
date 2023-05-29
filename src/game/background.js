export class Background {
  constructor(game) {
    this.game = game;
    this.image = document.getElementById("background");
    this.width = 1195;
    this.height = 1195;
  }

  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      0,
      0,
      this.game.width,
      this.game.height
    );
  }
}
