import { Circle } from "./styled/Circle";
import { Svg } from "./styled/Svg";
import { Wrapper } from "./styled/Wrapper";


interface Props {
  testId?: string;
  size: number;
  time: number;
  color: string;
  secondColor?: string;
}

function Timer({ testId, size, time, color, secondColor }: Props) {
  const radius = size / 2;
  return (
    <Wrapper
      data-testid={testId}
      size={size}
      color={color}
      secondColor={secondColor ?? color}
      time={time}
    >
      <Svg size={size}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          size={size}
          time={time}
          color={color}
          secondColor={secondColor ?? color}
        />
      </Svg>
    </Wrapper>
  );
}

export default Timer;
