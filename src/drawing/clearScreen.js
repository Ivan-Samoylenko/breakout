export const clearScreen = (refs) => {
  const { canvas, ctx } = refs;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
