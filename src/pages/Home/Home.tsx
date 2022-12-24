import styled from "styled-components";
import { Timer } from "../../components/Timer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 15px;
`;

function Home() {
  const style = getComputedStyle(document.body)
  return (
    <Wrapper>
      <Timer testId="clock1" size={100} time={120} color={style.getPropertyValue('--bs-green')} />
      <Timer
        testId="clock2"
        size={100}
        time={5}
        color={style.getPropertyValue('--bs-green')}
        secondColor={style.getPropertyValue('--bs-danger')}
      />
    </Wrapper>
  );
}

export default Home;
