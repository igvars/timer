import styled, { keyframes } from "styled-components";

const timer = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 471;
  }
`;

export const Circle = styled.circle`
  width: 100%;
  height: 100%;
  fill: transparent;
  transform: translate(5px, 5px);
  stroke: #25d725;
  stroke-dasharray: 471;
  stroke-width: 100%;
  animation: 60s linear ${timer};
  animation-fill-mode: forwards;
`;
