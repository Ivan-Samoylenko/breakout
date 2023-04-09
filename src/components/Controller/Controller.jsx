import {
  Wrapper,
  DirectionController,
  DirectionBtn,
  ServiceButtons,
  ServiceBtn,
  ActionBtn,
} from "./Controller.styled";

export default function Controller() {
  return (
    <Wrapper>
      <DirectionController>
        <DirectionBtn type="button" name="top">
          ↑
        </DirectionBtn>
        <DirectionBtn type="button" name="right">
          →
        </DirectionBtn>
        <DirectionBtn type="button" name="bottom">
          ↓
        </DirectionBtn>
        <DirectionBtn type="button" name="left">
          ←
        </DirectionBtn>
      </DirectionController>
      <ServiceButtons>
        <ServiceBtn type="button"></ServiceBtn>
        <ServiceBtn type="button"></ServiceBtn>
      </ServiceButtons>
      <ActionBtn type="button" />
    </Wrapper>
  );
}
