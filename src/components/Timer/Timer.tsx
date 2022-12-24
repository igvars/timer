import { Circle } from "./styled/Circle";
import { Svg } from "./styled/Svg";
import { Wrapper } from "./styled/Wrapper";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

interface Props {
  testId?: string;
  size: number;
  time: number;
  color: Color;
}

function Timer({ testId, size, time, color }: Props) {
  const radius = size / 2;
  return (
    <Wrapper data-testid={testId} size={size} color={color}>
      <Svg size={size}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          size={size}
          time={time}
          color={color}
        />
      </Svg>
    </Wrapper>
  );
}

export default Timer;
