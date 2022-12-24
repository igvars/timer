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
  return (
    <Wrapper>
      <Timer testId="clock" size={100} time={60} color="#25d725" />
      <Timer
        testId="clock"
        size={100}
        time={60}
        color="#25d725"
        secondColor="#ff0000"
      />
    </Wrapper>
  );
}

export default Home;
