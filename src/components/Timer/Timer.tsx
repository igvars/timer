import "./styles.css";

function Timer() {
  return (
    <div className="Clock">
      <svg className="svg">
        <circle className="timer" cx={75} cy={75} r={75}></circle>
      </svg>
    </div>
  );
}

export default Timer;
