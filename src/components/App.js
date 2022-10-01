import DECKS from "./DECKS";
import Deck from "./Deck";
import Welcome from "./Welcome";
import { useState } from "react";

export default function App() {
  const [deckSelected, setDeckSelected] = useState('');
  const [goalSelected, setGoalSelected] = useState('');
  const [stateApp, setStateApp] = useState("start"); //[start, test , end]

  if (stateApp === "start") {
    return (<Welcome
      decks={DECKS.map(deck => {return { id: deck.id, name: deck.name, maxGoal: deck.cards.length}})}
      deckSelected={deckSelected}
      setDeckSelected={setDeckSelected}
      goalSelected={goalSelected}
      setGoalSelected={setGoalSelected}
      setStateApp={setStateApp}
    />
    );
  }
  else if (stateApp === "test")
    return <Deck cards={DECKS.cards} />;
  else
    return <Deck cards={DECKS.cards} />;

}