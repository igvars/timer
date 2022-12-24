import styled from "styled-components";
import { Timer } from "../../components/Timer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function Home() {
  return (
    <Wrapper>
      <Timer testId="clock" />
    </Wrapper>
  );
}

export default Home;
