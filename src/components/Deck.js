import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Result from './Result'
import logo from '../assets/img/logo.png'

export default function Deck({ cards }) {
  const [result, setResult] = useState(cards.map(() => 'notOpen'));

  return (
    <DeckDisplay>
      <LogoDisplay>
        <img src={logo} />
        <span>ZapRecall</span>
      </LogoDisplay>
      {cards.map((card, index) =>
        <Card
          key={index}
          card={card}
          index={index}
          result={result}
          setResult={setResult}
        />
      )}
      <Result nCards={cards.length} result={result} />
    </DeckDisplay>
  );
}

const DeckDisplay = styled.main`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`;

const LogoDisplay = styled.main`
  display: flex;
  align-items: center;
  margin: 44px auto;

  img {
    width: 52px;
    margin: 0px 20px;
  }

  span {
    font-family: 'Righteous', sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
  }
`;