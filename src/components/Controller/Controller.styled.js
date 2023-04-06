import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DirectionController = styled.div`
  width: 130px;
  height: 130px;

  position: relative;

  background-color: ${(p) => p.theme.color.body};

  border-radius: 50%;
  box-shadow: ${(p) => p.theme.shadows.direction};
`;

export const DirectionBtn = styled.button`
  border-width: 3px;
  border-style: solid;
  border-top-color: ${(p) => p.theme.color.shadow.darker};
  border-right-color: ${(p) => p.theme.color.shadow.light};
  border-bottom-color: ${(p) => p.theme.color.shadow.lighter};
  border-left-color: ${(p) => p.theme.color.shadow.dark};
  padding: 0;

  position: absolute;

  background: linear-gradient(
    ${(p) => getGradientAngle(p)},
    transparent,
    rgba(0, 0, 0, 0.3)
  );
  background-color: #555;

  border-radius: 3px;
  ${(p) => {
    switch (p.name) {
      case "top":
        return "width: 30px; height: 40px; top: 5px; left: 50px;";
      case "right":
        return "width: 40px; height: 30px; top: 50px; left: 85px;";
      case "bottom":
        return "width: 30px; height: 40px; top: 85px; left: 50px;";
      case "left":
        return "width: 40px; height: 30px; top: 50px; left: 5px;";
      default:
        return "";
    }
  }};

  &:active {
    border-top-color: ${(p) => p.theme.color.activeShadow.lighter};
    border-right-color: ${(p) => p.theme.color.activeShadow.dark};
    border-bottom-color: ${(p) => p.theme.color.activeShadow.darker};
    border-left-color: ${(p) => p.theme.color.activeShadow.light};
    background-color: #d62;
    box-shadow: ${(p) => p.theme.shadows.activeButton};
  }
`;

function getGradientAngle(p) {
  switch (p.name) {
    case "top":
      return "180deg";
    case "right":
      return "270deg";
    case "bottom":
      return "0";
    case "left":
      return "90deg";
    default:
      return "0";
  }
}

export const ServiceButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ServiceBtn = styled.button`
  width: 35px;
  height: 11px;
  border-width: 3px;
  border-style: solid;
  border-top-color: ${(p) => p.theme.color.shadow.darker};
  border-right-color: ${(p) => p.theme.color.shadow.light};
  border-bottom-color: ${(p) => p.theme.color.shadow.lighter};
  border-left-color: ${(p) => p.theme.color.shadow.dark};
  padding: 0;

  background-color: #555;

  border-radius: 4px;

  &:active {
    border-top-color: ${(p) => p.theme.color.activeShadow.lighter};
    border-right-color: ${(p) => p.theme.color.activeShadow.dark};
    border-bottom-color: ${(p) => p.theme.color.activeShadow.darker};
    border-left-color: ${(p) => p.theme.color.activeShadow.light};
    background-color: #d62;
    box-shadow: ${(p) => p.theme.shadows.activeButton};
  }
`;

export const ActionBtn = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  padding: 0;

  background-color: #555;

  border-radius: 50%;
  box-shadow: ${(p) => p.theme.shadows.button};

  &:active {
    background-color: #d62;
    box-shadow: ${(p) => p.theme.shadows.activeButton};
  }
`;
