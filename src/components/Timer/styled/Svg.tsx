import styled from "styled-components";

interface Props {
  size: number;
}

export const Svg = styled.svg<Props>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transform: rotate(270deg);
  border-radius: 50%;
`;
