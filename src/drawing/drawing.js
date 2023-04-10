import { clearScreen, drawBall, moveBall, drawPaddle } from "drawing";

let drawingId = null;

const drawing = (refs) => {
  clearScreen(refs);
  drawBall(refs);
  moveBall(refs);
  drawPaddle(refs);

  if (refs.y - refs.ballRadius * 2 > refs.canvas.height) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(drawingId);
  }
};

export const startDrawing = (refs) => {
  drawingId = setInterval(() => {
    drawing(refs);
  }, 10);
};

export const endDrawing = () => {
  clearInterval(drawingId);
  drawingId = null;
};
