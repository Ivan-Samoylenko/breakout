import styled from "styled-components";

export const Case = styled.main`
  width: 640px;
  height: 480px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;

  background-color: ${(p) => p.theme.color.body};

  border-radius: 50px;
  box-shadow: ${(p) => p.theme.shadows.case};
`;

export const Screen = styled.div`
  width: 320px;
  height: 240px;
  margin-right: auto;
  margin-left: auto;
  border-width: 8px;
  border-style: solid;
  border-top-color: ${(p) => p.theme.color.shadow.lighter};
  border-right-color: ${(p) => p.theme.color.shadow.dark};
  border-bottom-color: ${(p) => p.theme.color.shadow.darker};
  border-left-color: ${(p) => p.theme.color.shadow.light};

  background-color: ${(p) => p.theme.color.screen};

  box-shadow: ${(p) => p.theme.shadows.screen};
`;
