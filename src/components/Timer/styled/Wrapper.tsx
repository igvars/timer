import styled, { keyframes } from "styled-components";
import { TinyColor } from "@ctrl/tinycolor";

interface Props {
  size: number;
  color: string;
  time: number;
  secondColor: string;
}

const getDarkenColor = (color: string) => {
  const mappedColor = new TinyColor(color);
  return mappedColor.darken(20).toHexString();
};

const changeColor = (firstColor: string, secondColor: string) => keyframes`
  0% {
    border-color: ${getDarkenColor(firstColor)};
  }
  100% {
    border-color: ${getDarkenColor(secondColor)};
  }
`;

export const Wrapper = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ size }) => `${size * 0.075}px`} solid
    ${({ color }) => getDarkenColor(color)};
  border-radius: 50%;
  padding: ${({ size }) => `${size * 0.075}px`};
  animation: 0.3s linear ${({ time }) => `${time / 2}s`} ${({ color, secondColor }) => changeColor(color, secondColor)};
  animation-fill-mode: forwards;
`;
