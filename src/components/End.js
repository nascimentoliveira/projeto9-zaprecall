import styled from 'styled-components';
import succeed from '../assets/img/party.png';
import failed from '../assets/img/sad.png';
import logo from '../assets/img/logo.png';

export default function Deck({ result, goalSelected, setStateApp }) {
  const zaps = result.filter(x => x === 'zap');
  const reached = (zaps.length >= goalSelected);

  function setMessage(reached) {
    return (reached ?
      `Parabéns! Você deu Zap em ${zaps.length} flashcards e bateu a meta! Continue assim.` :
      `Que pena! Você deu Zap em ${zaps.length} flashcards e não conseguiu superar a meta, AINDA! Continue tentando.`);
  }

  return (
    <EndDisplay>
      <img src={logo} alt='Logo ZapRecall' />
      <span>ZapRecall</span>
      <div>
        <img src={reached ? succeed : failed} alt={reached ? 'Conseguiu' : 'Não conseguiu'} />
        <span>{setMessage(reached)}</span>
      </div>
      <button onClick={() => setStateApp('restart')}>Voltar ao início!</button>
    </EndDisplay>
  );
}

const EndDisplay = styled.main`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding-bottom: 130px;
  box-sizing: border-box;

  img {
    width: 136px;
    margin: 13px;
  }

  span {
    font-family: 'Righteous', sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
  }

  div {
    width: 80%;
    max-width: 500px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin: 17px;
    padding: 10px;

    img {
      width: 25px;
      height: 25px;
      margin: 13px;
    }

    span {
      font-family: 'Recursive', sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: #ADADAD;
      text-align: center;
    }
  }

  button {
    width: 246px;
    height: 54px;
    background-color: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
    box-sizing: border-box;
    transition-duration: 0.8s;

    &:hover {
      color: #FFFFFF;
      background-color: #D70900;
    }
  }
`;