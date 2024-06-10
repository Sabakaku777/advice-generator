import { useEffect, useState } from "react";
import styled from "styled-components";
import line from "/images/pattern-divider-desktop.png";
import bill from "/images/Property 1=Default.png";

function App() {
  type TypeAdvice = {
    slip: {
      advice: string;
      id: number;
    };
  };
  const [advice, setAdvice] = useState<TypeAdvice>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fethcData = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();

      setAdvice(data);
    };

    fethcData();
  }, [count]);

  return (
    <Container>
      <h1>ADVICE #{advice?.slip.id}</h1>
      <p>{advice?.slip.advice}</p>
      <img src={line} className="line" />
      <button onClick={() => setCount((prev) => prev + 1)}>
        <img src={bill} />
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 520px;
  background-color: #323a49;
  border-radius: 10px;
  padding: 48px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    color: #52ffa8;
    font-size: 18px;
    letter-spacing: 01cap;
    margin-bottom: 30px;
  }
  p {
    color: white;
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
  }
  line {
    margin-top: 30px;
  }

  button {
    border: none;
    padding: 0;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    position: absolute;
    bottom: -30px;
  }
`;
export default App;
