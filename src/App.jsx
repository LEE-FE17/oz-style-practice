import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <Header />
      <Section>
        <Content />
        <Content />
        <Content />
      </Section>
    </>
  );
}

export default App;