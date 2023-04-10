export const getRefs = (canvasEl) => {
  const canvas = canvasEl.current;
  const ctx = canvas.getContext("2d");
  const x = canvas.width / 2;
  const y = canvas.height - 30;
  const dx = 2;
  const dy = -2;
  const ballRadius = 10;
  const paddleHeight = 10;
  const paddleWidth = 75;
  const paddleX = (canvas.width - paddleWidth) / 2;
  const rightPressed = false;
  const leftPressed = false;

  return {
    canvas,
    ctx,
    x,
    y,
    dx,
    dy,
    ballRadius,
    paddleHeight,
    paddleWidth,
    paddleX,
    rightPressed,
    leftPressed,
  };
};
