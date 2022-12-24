import styled, { keyframes } from "styled-components";
import { TinyColor } from "@ctrl/tinycolor";
import { Color } from "../Timer";

interface Props {
  size: number;
  color: Color;
  time: number;
  secondColor: Color;
}

const getDarkenColor = (color: Color) => {
  const mappedColor = new TinyColor(color);
  return mappedColor.darken(20).toHexString();
};

const changeColor = (firstColor: Color, secondColor: Color) => keyframes`
  0% {
    border-color: ${getDarkenColor(firstColor)};
  }
  100% {
    border-color: ${getDarkenColor(secondColor)};
  }
`;

export const Wrapper = styled.div<Props>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ size }) => `${size * 0.075}px`} solid ${({ color }) => getDarkenColor(color)};
  border-radius: 50%;
  padding: ${({ size }) => `${size * 0.075}px`};
  animation: 0.3s linear ${({ time }) => `${time / 2}s`} ${({ color, secondColor }) => changeColor(color, secondColor)};
  animation-fill-mode: forwards;
`;
