import styled from "styled-components";
import { TinyColor } from "@ctrl/tinycolor";
import { Color } from "../Timer";

interface Props {
  size: number;
  color: Color;
}

const getDarkenColor = (color: Color) => {
  const mappedColor = new TinyColor(color);
  return mappedColor.darken(20).toHexString();
};

export const Wrapper = styled.div<Props>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ size }) => `${size * 0.075}px`} solid
    ${({ color }) => getDarkenColor(color)};
  border-radius: 50%;
  padding: ${({ size }) => `${size * 0.075}px`};
`;
