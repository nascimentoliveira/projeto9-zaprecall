import DECKS from './DECKS';
import Deck from './Deck';
import Welcome from './Welcome';
import { useState } from 'react';

export default function App() {
  const [deckSelected, setDeckSelected] = useState('');
  const [goalSelected, setGoalSelected] = useState('');
  const [stateApp, setStateApp] = useState('start'); //[start, test , end]

  if (stateApp === 'start') {
    const decks = DECKS.map(deck => ({ id: deck.id, name: deck.name, maxGoal: deck.cards.length}));
    return (<Welcome
      decks={decks}
      deckSelected={deckSelected}
      setDeckSelected={setDeckSelected}
      goalSelected={goalSelected}
      setGoalSelected={setGoalSelected}
      setStateApp={setStateApp}
    />
    );
  }

  if (stateApp === 'test') {
    const deck = DECKS.filter(deck => deck.name === deckSelected)[0];
    return <Deck cards={deck.cards} />;
  }

  if (stateApp === 'end') {
    return;
  }
}