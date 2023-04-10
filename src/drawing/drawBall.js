export const drawBall = (refs) => {
  const { ctx, x, y, ballRadius } = refs;

  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI);
  ctx.fillStyle = "#FFFF44";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, Math.PI, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

export const moveBall = (refs) => {
  const {
    canvas,
    x,
    y,
    dx,
    dy,
    ballRadius,
    paddleX,
    paddleWidth,
    paddleHeight,
  } = refs;

  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    refs.dx = -dx;
  }

  if (y + dy < ballRadius) {
    refs.dy = -dy;
  }

  if (
    x >= paddleX &&
    x <= paddleX + paddleWidth &&
    y + dy === canvas.height - ballRadius - paddleHeight
  ) {
    refs.dy = -dy;
  }

  refs.x += dx;
  refs.y += dy;
};
