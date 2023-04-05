import {
  Wrapper,
  DirectionController,
  TopBtn,
  RightBtn,
  BottomBtn,
  LeftBtn,
  ServiceButtons,
  ServiceBtn,
  ActionBtn,
} from "./Controller.styled";

export default function Controller() {
  return (
    <Wrapper>
      <DirectionController>
        <TopBtn type="button"></TopBtn>
        <RightBtn type="button"></RightBtn>
        <BottomBtn type="button"></BottomBtn>
        <LeftBtn type="button"></LeftBtn>
      </DirectionController>
      <ServiceButtons>
        <ServiceBtn type="button"></ServiceBtn>
        <ServiceBtn type="button"></ServiceBtn>
      </ServiceButtons>
      <ActionBtn type="button" />
    </Wrapper>
  );
}
