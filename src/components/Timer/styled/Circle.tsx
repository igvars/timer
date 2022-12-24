import styled, { keyframes } from "styled-components";
import { Color } from "../Timer";

const timer = (size: number) => keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: ${size * Math.PI};
  }
`;

const changeColor = (firstColor: Color, secondColor: Color) => keyframes`
  0% {
    stroke: ${firstColor};
  }
  100% {
    stroke: ${secondColor};
  }
`;

interface Props {
  size: number;
  time: number;
  color: Color;
  secondColor: Color;
}

export const Circle = styled.circle<Props>`
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: ${({ color }) => color};
  stroke-dasharray: ${({ size }) => size * Math.PI};
  stroke-width: 100%;
  animation: ${({ time }) => `${time}s`} linear ${({ size }) => timer(size)},
    0.3s linear ${({ time }) => `${time / 2}s`} ${({ color, secondColor }) => changeColor(color, secondColor)};
  animation-fill-mode: forwards;
`;
