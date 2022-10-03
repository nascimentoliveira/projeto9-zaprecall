import styled from 'styled-components';
import logo from '../assets/img/logo.png';

export default function Welcome(props) {
  const {
    decks,
    deckSelected,
    setDeckSelected,
    goalSelected,
    setGoalSelected,
    setStateApp
  } = props;

  function startTest() {
    if (!deckSelected) {
      alert('Escolha um deck de flashcards!');
    } else {
      if (!goalSelected) {
        alert('Escolha uma meta de Zaps!');
      } else {
        setStateApp('test');
      }
    }
  }

  function setMaxGoal() {
    return (deckSelected === '' ?
      1 : decks.filter(deck => (deck.name === deckSelected))[0].maxGoal);
  }

  function setValue(value) {
    if (deckSelected !== '') {
      setGoalSelected(Math.min(goalSelected, setMaxGoal()));
    }
    setDeckSelected(value);
  }

  return (
    <WelcomeDisplay>
      <img src={logo} alt='Logo ZapRecall' />
      <span>ZapRecall</span>
      <select
        value={deckSelected}
        onChange={e => { setValue(e.target.value); setGoalSelected('') }}
      >
        <option disabled={true} value=''>Escolha seu deck...</option>
        {decks.map(deck => <option key={deck.id} value={deck.name}>{deck.name}</option>)}
      </select>
      <input
        type='number'
        placeholder={'Insira sua meta de zaps...'}
        value={goalSelected !== '' ? Math.min(Math.max(1, goalSelected), setMaxGoal()) : ''}
        min='1'
        max={setMaxGoal()}
        onChange={e => { setGoalSelected(Math.min(Math.max(1, e.target.value), setMaxGoal())) }}
      />
      <button onClick={startTest}>Iniciar Recall!</button>
    </WelcomeDisplay>
  );
}

const WelcomeDisplay = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
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

  input, select {
    width: 246px;
    height: 43px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    margin: 2px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ADADAD;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ADADAD;
    }

    &:focus {
      outline: none;
    }
  
    &::list {
      color: #ADADAD;
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
    margin: 17px;
    box-sizing: border-box;
    transition-duration: 0.4s;

    &:hover {
      color: #FFFFFF;
      background-color: #D70900;
    }
  }
`;