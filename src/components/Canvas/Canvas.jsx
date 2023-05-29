import { useEffect } from "react";
import { StyledCanvas } from "./Canvas.styled";
import { breakout } from "game";

export default function Canvas() {
  useEffect(() => {
    breakout();
  }, []);

  return <StyledCanvas id="canvas" />;
}
