import styled from "styled-components";

export const Button = styled.button`
  padding: 0;
  border: none;
  width: 50%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backGroundColor};
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  height: ${(props) => props.height};
  width: 100%;
`;
