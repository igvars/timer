import { Circle } from "./styled/Circle";
import { Svg } from "./styled/Svg";
import { Wrapper } from "./styled/Wrapper";

interface Props {
  testId?: string;
}

function Timer({ testId }: Props) {
  return (
    <Wrapper data-testid={testId}>
      <Svg>
        <Circle cx={75} cy={75} r={75} />
      </Svg>
    </Wrapper>
  );
}

export default Timer;
