import { Case, Screen } from "./Tetris.styled";
import { Controller } from "components/Controller";

export default function Tetris({ children }) {
  return (
    <Case>
      <Screen>{children}</Screen>
      <Controller />
    </Case>
  );
}
