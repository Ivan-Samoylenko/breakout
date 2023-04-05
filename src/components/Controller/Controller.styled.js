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
  box-shadow: ${(p) => p.theme.shadows.button};
`;

const DirectionBtn = styled.button`
  border: none;
  padding: 0;

  position: absolute;

  background-color: #555;

  box-shadow: ${(p) => p.theme.shadows.button};
`;

export const TopBtn = styled(DirectionBtn)`
  width: 30px;
  height: 40px;

  top: 5px;
  left: 50px;
`;

export const RightBtn = styled(DirectionBtn)`
  width: 40px;
  height: 30px;

  top: 50px;
  left: 85px;
`;

export const BottomBtn = styled(DirectionBtn)`
  width: 30px;
  height: 40px;

  top: 85px;
  left: 50px;
`;

export const LeftBtn = styled(DirectionBtn)`
  width: 40px;
  height: 30px;

  top: 50px;
  left: 5px;
`;

export const ServiceButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ServiceBtn = styled.button`
  width: 30px;
  height: 8px;
  border: none;
  padding: 0;

  background-color: #555;

  border-radius: 4px;
  box-shadow: ${(p) => p.theme.shadows.button};
`;

export const ActionBtn = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  padding: 0;

  background-color: #555;

  border-radius: 50%;
  box-shadow: ${(p) => p.theme.shadows.button};
`;
