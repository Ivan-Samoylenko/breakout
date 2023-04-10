export const drawPaddle = (refs) => {
  const {
    canvas,
    ctx,
    paddleHeight,
    paddleWidth,
    paddleX,
    rightPressed,
    leftPressed,
  } = refs;

  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  if (rightPressed) {
    refs.paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    refs.paddleX = Math.max(paddleX - 7, 0);
  }
};

export const getMoveHandlers = (refs) => {
  function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      refs.rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      refs.leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      refs.rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      refs.leftPressed = false;
    }
  }

  return { keyDownHandler, keyUpHandler };
};

export const addPaddleMoving = ({ keyDownHandler, keyUpHandler }) => {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
};

export const removePaddleMoving = ({ keyDownHandler, keyUpHandler }) => {
  document.removeEventListener("keydown", keyDownHandler, false);
  document.removeEventListener("keyup", keyUpHandler, false);
};
