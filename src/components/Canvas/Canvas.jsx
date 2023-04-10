import { Screen } from "./Canvas.styled";
import { useRef, useEffect } from "react";
import {
  getRefs,
  startDrawing,
  endDrawing,
  getMoveHandlers,
  addPaddleMoving,
  removePaddleMoving,
} from "drawing";

export default function Canvas() {
  const canvasEl = useRef();

  useEffect(() => {
    const refs = getRefs(canvasEl);

    startDrawing(refs);
    addPaddleMoving(getMoveHandlers(refs));

    return () => {
      endDrawing();
      removePaddleMoving(getMoveHandlers(refs));
    };
  }, []);

  return <Screen ref={canvasEl} width="320" height="240"></Screen>;
}
