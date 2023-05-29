import { Sprite } from "./Sprites.styled";
import background from "../../assets/background.png";
import platform from "../../assets/platformL.png";
import ball from "../../assets/ball.png";
import block from "../../assets/blockT.png";

export default function Sprites() {
  return (
    <>
      <Sprite id="background" src={background} />
      <Sprite id="platform" src={platform} />
      <Sprite id="ball" src={ball} />
      <Sprite id="block" src={block} />
    </>
  );
}
