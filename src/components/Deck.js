import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Result from './Result';
import End from './End';
import logo from '../assets/img/logo.png';

export default function Deck({ cards, goalSelected, setStateApp }) {
  const [result, setResult] = useState(cards.map(() => 'notOpen'));
  const answered = result.filter(x => x !== 'notOpen');

  if (answered.length === result.length) {
    return <End result={result} goalSelected={goalSelected} setStateApp={setStateApp} />;
  } else {
    return (
      <DeckDisplay>
        <LogoDisplay>
          <img src={logo} alt='Logo ZapRecall' />
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
        <Result result={result} goalSelected={goalSelected} />
      </DeckDisplay>
    );
  }
}

const DeckDisplay = styled.main`
  background-color: #FB6B6B;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding-bottom: 130px;
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