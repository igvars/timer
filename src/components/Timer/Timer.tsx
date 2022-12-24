import "./styles.css";

interface Props {
  testId?: string;
}

function Timer({ testId }: Props) {
  return (
    <div className="Clock" data-testid={testId}>
      <svg className="svg">
        <circle className="timer" cx={75} cy={75} r={75}></circle>
      </svg>
    </div>
  );
}

export default Timer;
